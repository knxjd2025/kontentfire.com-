const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load API keys from clipfire .env
function loadEnvKey(envPath, key) {
  try {
    const content = fs.readFileSync(envPath, 'utf8');
    const match = content.match(new RegExp(`^${key}=(.+)$`, 'm'));
    return match ? match[1].trim() : null;
  } catch { return null; }
}

const CLIPFIRE_ENV = path.join(process.env.HOME || process.env.USERPROFILE,
  'OneDrive', 'Desktop', 'Kynex Apps', 'Apps and Sites', 'clipfire', '.env');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || loadEnvKey(CLIPFIRE_ENV, 'OPENAI_API_KEY');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || loadEnvKey(CLIPFIRE_ENV, 'GEMINI_API_KEY');

if (!OPENAI_API_KEY) console.warn('WARNING: No OPENAI_API_KEY found');
if (!GEMINI_API_KEY) console.warn('WARNING: No GEMINI_API_KEY found');

const openai = OPENAI_API_KEY ? new OpenAI({ apiKey: OPENAI_API_KEY }) : null;
const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

const IMAGES_DIR = path.join(__dirname, 'images');
const MANIFEST_PATH = path.join(IMAGES_DIR, 'manifest.json');
const PROGRESS_PATH = path.join(IMAGES_DIR, 'progress.json');

// Rate limiting
const OPENAI_DELAY_MS = 15000;  // 15s between OpenAI calls (rate limit safety)
const GEMINI_DELAY_MS = 6000;   // 6s between Gemini calls

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function loadProgress() {
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
  } catch {
    return { completed: [], failed: [] };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2));
}

async function generateWithOpenAI(imageEntry) {
  if (!openai) throw new Error('OpenAI client not initialized');

  const enhancedPrompt = `${imageEntry.prompt}. Style: Modern editorial book illustration, warm color palette, professional and approachable. No text or words in the image.`;

  const response = await openai.images.generate({
    model: 'gpt-image-1',
    prompt: enhancedPrompt,
    n: 1,
    size: '1536x1024',
    quality: 'medium'
  });

  // gpt-image-1 returns base64
  const base64 = response.data[0].b64_json;
  if (base64) {
    const buffer = Buffer.from(base64, 'base64');
    const filepath = path.join(IMAGES_DIR, imageEntry.filename);
    fs.writeFileSync(filepath, buffer);
    return filepath;
  }

  throw new Error('No image data in response');
}

async function generateWithGemini(imageEntry) {
  if (!genAI) throw new Error('Gemini client not initialized');

  const model = genAI.getGenerativeModel({
    model: 'imagen-4.0-generate-preview-05-20',
  });

  const enhancedPrompt = `${imageEntry.prompt}. Style: Modern editorial book illustration, warm color palette, professional and approachable, clean design. No text or words in the image.`;

  const response = await model.generateImages({
    prompt: enhancedPrompt,
    config: {
      numberOfImages: 1,
    }
  });

  if (response.generatedImages && response.generatedImages.length > 0) {
    const imageBytes = response.generatedImages[0].image.imageBytes;
    const buffer = Buffer.from(imageBytes, 'base64');
    const filepath = path.join(IMAGES_DIR, imageEntry.filename);
    fs.writeFileSync(filepath, buffer);
    return filepath;
  }

  throw new Error('No image data in Gemini response');
}

async function generateImage(imageEntry, progress) {
  const provider = imageEntry.provider;

  try {
    let filepath;
    if (provider === 'openai') {
      filepath = await generateWithOpenAI(imageEntry);
    } else {
      filepath = await generateWithGemini(imageEntry);
    }

    console.log(`  [${provider.toUpperCase()}] ${imageEntry.id}: ${imageEntry.filename}`);
    progress.completed.push(imageEntry.id);
    saveProgress(progress);
    return true;
  } catch (err) {
    console.error(`  FAILED [${provider.toUpperCase()}] ${imageEntry.id}: ${err.message}`);
    progress.failed.push({ id: imageEntry.id, error: err.message, provider });
    saveProgress(progress);
    return false;
  }
}

async function main() {
  // Parse CLI args
  const args = process.argv.slice(2);
  const startIdx = parseInt(args.find(a => a.startsWith('--start='))?.split('=')[1] || '0');
  const batchSize = parseInt(args.find(a => a.startsWith('--batch='))?.split('=')[1] || '999');
  const providerFilter = args.find(a => a.startsWith('--provider='))?.split('=')[1] || null;
  const chapterFilter = args.find(a => a.startsWith('--chapter='))?.split('=')[1] || null;
  const retryFailed = args.includes('--retry-failed');

  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error('ERROR: manifest.json not found. Run the manifest generator first.');
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  const progress = loadProgress();

  let images = manifest.images;

  // Filter by provider
  if (providerFilter) {
    images = images.filter(img => img.provider === providerFilter);
  }

  // Filter by chapter
  if (chapterFilter) {
    images = images.filter(img => img.chapter.includes(chapterFilter));
  }

  // Filter out already completed (unless retrying failed)
  if (retryFailed) {
    const failedIds = progress.failed.map(f => f.id);
    images = images.filter(img => failedIds.includes(img.id));
    // Clear failed entries for retry
    progress.failed = progress.failed.filter(f => !failedIds.includes(f.id));
  } else {
    images = images.filter(img => !progress.completed.includes(img.id));
  }

  // Apply start index and batch size
  images = images.slice(startIdx, startIdx + batchSize);

  console.log(`\n=== AI Image Generator for "The AI Apprentice" ===`);
  console.log(`Total in manifest: ${manifest.images.length}`);
  console.log(`Already completed: ${progress.completed.length}`);
  console.log(`Failed: ${progress.failed.length}`);
  console.log(`Generating this batch: ${images.length}`);
  console.log(`Provider filter: ${providerFilter || 'all'}`);
  console.log(`Chapter filter: ${chapterFilter || 'all'}`);
  console.log('');

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const pct = Math.round(((i + 1) / images.length) * 100);
    console.log(`[${i + 1}/${images.length}] (${pct}%) Generating ${img.id}...`);

    const success = await generateImage(img, progress);
    if (success) successCount++;
    else failCount++;

    // Rate limiting
    if (i < images.length - 1) {
      const delay = img.provider === 'openai' ? OPENAI_DELAY_MS : GEMINI_DELAY_MS;
      await sleep(delay);
    }
  }

  console.log(`\n=== DONE ===`);
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`Total completed: ${progress.completed.length}/${manifest.images.length}`);

  if (progress.failed.length > 0) {
    console.log(`\nFailed images (re-run with --retry-failed):`);
    progress.failed.forEach(f => console.log(`  ${f.id} [${f.provider}]: ${f.error}`));
  }
}

main().catch(console.error);
