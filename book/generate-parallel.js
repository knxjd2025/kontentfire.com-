const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Since OpenAI key is unavailable, we use two Gemini models:
// - "openai" entries  -> gemini-2.5-flash-image (generateContent with image output)
// - "gemini" entries  -> imagen-4.0-generate-001 (predict REST API)

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('ERROR: GEMINI_API_KEY not set');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const IMAGES_DIR = path.join(__dirname, 'images');
const MANIFEST_PATH = path.join(IMAGES_DIR, 'manifest.json');
const PROGRESS_PATH = path.join(IMAGES_DIR, 'progress.json');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function loadProgress() {
  try { return JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8')); }
  catch { return { completed: [], failed: [] }; }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2));
}

// Provider A: gemini-2.5-flash-image (used for "openai" manifest entries)
// Good for: character scenes, emotional moments, people, trade workers
async function generateFlashImage(entry) {
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash-image',
    generationConfig: { responseModalities: ['image', 'text'] }
  });

  const prompt = `Generate an image: ${entry.prompt}. No text, words, letters, or numbers anywhere in the image.`;

  const result = await model.generateContent(prompt);
  const response = result.response;

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      const ext = part.inlineData.mimeType === 'image/jpeg' ? '.jpg' : '.png';
      const filename = entry.filename.replace(/\.\w+$/, ext);
      fs.writeFileSync(path.join(IMAGES_DIR, filename), Buffer.from(part.inlineData.data, 'base64'));
      return filename;
    }
  }
  throw new Error('No image data in response');
}

// Provider B: imagen-4.0-generate-001 (used for "gemini" manifest entries)
// Good for: infographics, diagrams, clean illustrations, reference cards
async function generateImagen4(entry) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${GEMINI_API_KEY}`;

  const prompt = `${entry.prompt}. Style: Modern editorial book illustration, warm color palette, professional and approachable, clean design. No text, words, letters, or numbers in the image.`;

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: { sampleCount: 1, aspectRatio: '16:9' }
    })
  });

  if (!resp.ok) {
    const errBody = await resp.text();
    throw new Error(`Imagen4 ${resp.status}: ${errBody.substring(0, 200)}`);
  }

  const data = await resp.json();
  if (!data.predictions?.[0]?.bytesBase64Encoded) {
    throw new Error('No image data in Imagen4 response');
  }

  const filename = entry.filename.replace(/\.\w+$/, '.png');
  fs.writeFileSync(path.join(IMAGES_DIR, filename), Buffer.from(data.predictions[0].bytesBase64Encoded, 'base64'));
  return filename;
}

// Process a queue with rate limiting
async function processQueue(queue, generatorFn, providerLabel, delayMs, progress) {
  let success = 0, fail = 0;
  for (let i = 0; i < queue.length; i++) {
    const entry = queue[i];
    try {
      const filename = await generatorFn(entry);
      console.log(`  [${providerLabel} ${i + 1}/${queue.length}] ${entry.id} -> ${filename}`);
      progress.completed.push(entry.id);
      success++;
    } catch (err) {
      console.error(`  FAIL [${providerLabel} ${i + 1}/${queue.length}] ${entry.id}: ${err.message.substring(0, 150)}`);
      progress.failed.push({ id: entry.id, error: err.message.substring(0, 200), provider: providerLabel });
      fail++;
    }
    saveProgress(progress);
    if (i < queue.length - 1) await sleep(delayMs);
  }
  return { success, fail };
}

async function main() {
  const args = process.argv.slice(2);
  const chapterFilter = args.find(a => a.startsWith('--chapter='))?.split('=')[1];
  const batchSize = parseInt(args.find(a => a.startsWith('--batch='))?.split('=')[1] || '999');
  const retryFailed = args.includes('--retry-failed');

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  const progress = loadProgress();

  let images = manifest.images;
  if (chapterFilter) images = images.filter(i => i.chapter.includes(chapterFilter));

  if (retryFailed) {
    const failedIds = new Set(progress.failed.map(f => f.id));
    images = images.filter(i => failedIds.has(i.id));
    progress.failed = progress.failed.filter(f => !images.some(i => i.id === f.id));
  } else {
    const completedSet = new Set(progress.completed);
    images = images.filter(i => !completedSet.has(i.id));
  }

  images = images.slice(0, batchSize);

  // Split by manifest provider tag
  // "openai" entries -> Flash Image model (character/people scenes)
  // "gemini" entries -> Imagen 4 (diagrams/infographics)
  const flashQueue = images.filter(i => i.provider === 'openai');
  const imagenQueue = images.filter(i => i.provider === 'gemini');

  console.log(`\n=== Book Image Generator (Dual Gemini) ===`);
  console.log(`Manifest total: ${manifest.images.length}`);
  console.log(`Completed: ${progress.completed.length}`);
  console.log(`This batch: ${images.length}`);
  console.log(`  Flash-Image (people/scenes): ${flashQueue.length}`);
  console.log(`  Imagen 4 (diagrams/infographics): ${imagenQueue.length}`);
  console.log(`Chapter filter: ${chapterFilter || 'all'}`);
  console.log('');

  // Run both model queues in parallel
  const [flashResult, imagenResult] = await Promise.all([
    flashQueue.length > 0
      ? processQueue(flashQueue, generateFlashImage, 'FLASH-IMG', 8000, progress)
      : { success: 0, fail: 0 },
    imagenQueue.length > 0
      ? processQueue(imagenQueue, generateImagen4, 'IMAGEN-4', 6000, progress)
      : { success: 0, fail: 0 },
  ]);

  console.log(`\n=== RESULTS ===`);
  console.log(`Flash-Image: ${flashResult.success} ok, ${flashResult.fail} failed`);
  console.log(`Imagen 4:    ${imagenResult.success} ok, ${imagenResult.fail} failed`);
  console.log(`Total completed: ${progress.completed.length}/${manifest.images.length}`);

  if (progress.failed.length > 0) {
    console.log(`\nFailed (use --retry-failed):`);
    progress.failed.slice(0, 10).forEach(f => console.log(`  ${f.id}: ${f.error}`));
    if (progress.failed.length > 10) console.log(`  ... and ${progress.failed.length - 10} more`);
  }
}

main().catch(console.error);
