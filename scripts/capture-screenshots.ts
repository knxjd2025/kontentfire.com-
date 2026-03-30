import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.resolve(__dirname, '../public/screenshots');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function captureScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2, // Retina quality
  });
  const page = await context.newPage();

  console.log('Starting screenshot capture...');

  // First, try to register a demo account
  console.log('Creating demo account...');
  try {
    const regResponse = await page.request.post(`${BASE_URL}/api/register`, {
      data: {
        username: 'demo@kontentfire.com',
        password: 'DemoPass123!',
        firstName: 'Demo',
        lastName: 'User',
      },
    });
    console.log(`Register response: ${regResponse.status()}`);
  } catch (e) {
    console.log('Registration failed (account may already exist), trying login...');
  }

  // Login
  console.log('Logging in...');
  await page.goto(`${BASE_URL}/auth`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Take auth page screenshot first
  await page.screenshot({
    path: path.join(OUTPUT_DIR, 'auth-page.webp'),
    type: 'png',
  });
  console.log('Captured: auth-page');

  // Fill login form
  try {
    await page.fill('input[name="username"], input[type="email"]', 'demo@kontentfire.com');
    await page.fill('input[name="password"], input[type="password"]', 'DemoPass123!');
    await page.click('button[type="submit"]');
    await page.waitForTimeout(3000);
    console.log('Login submitted, current URL:', page.url());
  } catch (e) {
    console.log('Login form interaction failed, continuing with unauthenticated screenshots...');
  }

  // Define pages to screenshot
  const pages = [
    { url: '/', name: 'dashboard', waitFor: 3000, description: 'Dashboard Overview' },
    { url: '/content', name: 'content-list', waitFor: 3000, description: 'Content Management' },
    { url: '/schedule', name: 'schedule-calendar', waitFor: 3000, description: 'Schedule Calendar' },
    { url: '/brand-settings', name: 'brand-voice', waitFor: 2000, description: 'Brand Voice Settings' },
    { url: '/seo', name: 'seo-tools', waitFor: 2000, description: 'SEO Tools' },
    { url: '/media-library', name: 'media-library', waitFor: 2000, description: 'Media Library' },
    { url: '/pipelines', name: 'automation-setup', waitFor: 2000, description: 'Automation Setup' },
    { url: '/settings', name: 'settings', waitFor: 2000, description: 'Settings' },
  ];

  for (const pageInfo of pages) {
    try {
      console.log(`Navigating to ${pageInfo.url}...`);
      await page.goto(`${BASE_URL}${pageInfo.url}`, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(pageInfo.waitFor);

      // Close any modals/toasts that might be open
      try {
        const closeButtons = page.locator('[data-dismiss], .toast-close, [aria-label="Close"]');
        const count = await closeButtons.count();
        for (let i = 0; i < count; i++) {
          await closeButtons.nth(i).click().catch(() => {});
        }
      } catch {}

      await page.screenshot({
        path: path.join(OUTPUT_DIR, `${pageInfo.name}.png`),
        type: 'png',
        fullPage: false,
      });
      console.log(`Captured: ${pageInfo.name} (${pageInfo.description})`);
    } catch (e) {
      console.log(`Failed to capture ${pageInfo.name}: ${e}`);
    }
  }

  // Try to open the create content modal for a screenshot
  try {
    console.log('Attempting to capture content creation modal...');
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(2000);

    // Look for create content button
    const createBtn = page.locator('button:has-text("Create"), button:has-text("New Content")').first();
    if (await createBtn.isVisible()) {
      await createBtn.click();
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: path.join(OUTPUT_DIR, 'content-create.png'),
        type: 'png',
        fullPage: false,
      });
      console.log('Captured: content-create (Content Creator Modal)');
    }
  } catch (e) {
    console.log(`Failed to capture content-create: ${e}`);
  }

  // Also capture the login page cleanly (unauthenticated)
  const cleanContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });
  const cleanPage = await cleanContext.newPage();
  try {
    await cleanPage.goto(`${BASE_URL}/auth`, { waitUntil: 'networkidle' });
    await cleanPage.waitForTimeout(2000);
    await cleanPage.screenshot({
      path: path.join(OUTPUT_DIR, 'login-page.png'),
      type: 'png',
      fullPage: false,
    });
    console.log('Captured: login-page');
  } catch (e) {
    console.log(`Failed to capture login page: ${e}`);
  }

  await cleanContext.close();
  await browser.close();

  // List all captured screenshots
  const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.png') || f.endsWith('.webp'));
  console.log(`\nDone! Captured ${files.length} screenshots:`);
  files.forEach(f => console.log(`  - ${f}`));
}

captureScreenshots().catch(console.error);
