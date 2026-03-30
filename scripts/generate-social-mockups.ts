/**
 * Generates realistic social media post mockup images using Playwright.
 * Creates fake LinkedIn, Facebook, Instagram, and Twitter posts that look authentic.
 */
import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const OUTPUT_DIR = path.resolve(__dirname, '../public/mockups');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function linkedinPost(opts: { name: string; title: string; content: string; likes: number; comments: number; reposts: number; image?: string }) {
  return `<!DOCTYPE html><html><head><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f3f2ef; display:flex; justify-content:center; padding:40px; }
    .post { background:white; border-radius:8px; width:550px; border:1px solid #e0e0e0; overflow:hidden; }
    .header { padding:16px 16px 0; display:flex; gap:12px; }
    .avatar { width:48px; height:48px; border-radius:50%; background:linear-gradient(135deg, #f97316, #f59e0b); display:flex; align-items:center; justify-content:center; color:white; font-weight:700; font-size:18px; flex-shrink:0; }
    .meta .name { font-weight:600; font-size:14px; color:#191919; }
    .meta .title { font-size:12px; color:#666; margin-top:2px; }
    .meta .time { font-size:12px; color:#999; margin-top:2px; display:flex; align-items:center; gap:4px; }
    .content { padding:12px 16px; font-size:14px; line-height:1.5; color:#191919; white-space:pre-line; }
    .image { width:100%; height:300px; background:linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%); display:flex; align-items:center; justify-content:center; }
    .image-text { color:white; font-size:28px; font-weight:700; text-align:center; padding:20px; line-height:1.3; }
    .image-text .highlight { color:#f97316; }
    .stats { padding:8px 16px; display:flex; justify-content:space-between; font-size:12px; color:#666; border-bottom:1px solid #e8e8e8; }
    .actions { padding:4px 8px; display:flex; }
    .action { flex:1; display:flex; align-items:center; justify-content:center; gap:6px; padding:12px; font-size:13px; font-weight:600; color:#666; cursor:pointer; border-radius:4px; }
    .action:hover { background:#f3f2ef; }
  </style></head><body>
  <div class="post">
    <div class="header">
      <div class="avatar">${opts.name.split(' ').map(n => n[0]).join('')}</div>
      <div class="meta">
        <div class="name">${opts.name}</div>
        <div class="title">${opts.title}</div>
        <div class="time">2h • 🌐</div>
      </div>
    </div>
    <div class="content">${opts.content}</div>
    ${opts.image ? `<div class="image"><div class="image-text">${opts.image}</div></div>` : ''}
    <div class="stats">
      <span>👍 😊 🔥 ${opts.likes.toLocaleString()}</span>
      <span>${opts.comments} comments • ${opts.reposts} reposts</span>
    </div>
    <div class="actions">
      <div class="action">👍 Like</div>
      <div class="action">💬 Comment</div>
      <div class="action">🔁 Repost</div>
      <div class="action">✉️ Send</div>
    </div>
  </div>
  </body></html>`;
}

function instagramPost(opts: { username: string; content: string; likes: number; image: string }) {
  return `<!DOCTYPE html><html><head><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background:#fafafa; display:flex; justify-content:center; padding:40px; }
    .post { background:white; border-radius:8px; width:470px; border:1px solid #dbdbdb; overflow:hidden; }
    .header { padding:14px 16px; display:flex; align-items:center; gap:10px; border-bottom:1px solid #efefef; }
    .avatar { width:32px; height:32px; border-radius:50%; background:linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); display:flex; align-items:center; justify-content:center; }
    .avatar-inner { width:28px; height:28px; border-radius:50%; background:#1e293b; display:flex; align-items:center; justify-content:center; color:white; font-size:12px; font-weight:700; }
    .username { font-weight:600; font-size:14px; color:#262626; }
    .image { width:100%; aspect-ratio:1; background:linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #334155 70%, #1e293b 100%); display:flex; align-items:center; justify-content:center; flex-direction:column; gap:16px; }
    .image-icon { font-size:48px; }
    .image-text { color:white; font-size:24px; font-weight:700; text-align:center; padding:0 30px; line-height:1.3; }
    .image-sub { color:#94a3b8; font-size:14px; }
    .actions-row { padding:12px 16px 0; display:flex; gap:16px; font-size:24px; }
    .likes { padding:4px 16px; font-weight:600; font-size:14px; color:#262626; }
    .caption { padding:4px 16px 12px; font-size:14px; color:#262626; line-height:1.4; }
    .caption strong { font-weight:600; }
    .time-ago { padding:0 16px 12px; font-size:10px; color:#8e8e8e; text-transform:uppercase; letter-spacing:0.2px; }
  </style></head><body>
  <div class="post">
    <div class="header">
      <div class="avatar"><div class="avatar-inner">${opts.username.substring(0, 2).toUpperCase()}</div></div>
      <div class="username">${opts.username}</div>
    </div>
    <div class="image">
      <div class="image-icon">🔥</div>
      <div class="image-text">${opts.image}</div>
    </div>
    <div class="actions-row">❤️ 💬 ✈️ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🔖</div>
    <div class="likes">${opts.likes.toLocaleString()} likes</div>
    <div class="caption"><strong>${opts.username}</strong> ${opts.content}</div>
    <div class="time-ago">2 hours ago</div>
  </div>
  </body></html>`;
}

function facebookPost(opts: { name: string; content: string; likes: number; comments: number; shares: number; image?: string }) {
  return `<!DOCTYPE html><html><head><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif; background:#f0f2f5; display:flex; justify-content:center; padding:40px; }
    .post { background:white; border-radius:8px; width:550px; box-shadow:0 1px 2px rgba(0,0,0,0.1); overflow:hidden; }
    .header { padding:16px 16px 0; display:flex; gap:10px; }
    .avatar { width:40px; height:40px; border-radius:50%; background:linear-gradient(135deg, #f97316, #f59e0b); display:flex; align-items:center; justify-content:center; color:white; font-weight:700; font-size:16px; flex-shrink:0; }
    .meta .name { font-weight:600; font-size:15px; color:#050505; }
    .meta .time { font-size:13px; color:#65676b; display:flex; align-items:center; gap:4px; }
    .content { padding:8px 16px 12px; font-size:15px; line-height:1.5; color:#050505; white-space:pre-line; }
    .image { width:100%; height:280px; background:linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%); display:flex; align-items:center; justify-content:center; flex-direction:column; gap:12px; }
    .image-text { color:white; font-size:26px; font-weight:700; text-align:center; padding:0 20px; line-height:1.3; }
    .image-sub { color:#94a3b8; font-size:14px; }
    .stats { padding:10px 16px; display:flex; justify-content:space-between; font-size:13px; color:#65676b; border-bottom:1px solid #e4e6eb; }
    .reactions { display:flex; align-items:center; gap:4px; }
    .actions { padding:4px 8px; display:flex; border-bottom:1px solid #e4e6eb; }
    .action { flex:1; display:flex; align-items:center; justify-content:center; gap:8px; padding:10px; font-size:14px; font-weight:600; color:#65676b; cursor:pointer; border-radius:4px; }
  </style></head><body>
  <div class="post">
    <div class="header">
      <div class="avatar">${opts.name.split(' ').map(n => n[0]).join('')}</div>
      <div class="meta">
        <div class="name">${opts.name}</div>
        <div class="time">2h · 🌐</div>
      </div>
    </div>
    <div class="content">${opts.content}</div>
    ${opts.image ? `<div class="image"><div class="image-text">${opts.image}</div></div>` : ''}
    <div class="stats">
      <div class="reactions">👍 ❤️ 😊 ${opts.likes.toLocaleString()}</div>
      <span>${opts.comments} comments · ${opts.shares} shares</span>
    </div>
    <div class="actions">
      <div class="action">👍 Like</div>
      <div class="action">💬 Comment</div>
      <div class="action">↗️ Share</div>
    </div>
  </div>
  </body></html>`;
}

function twitterPost(opts: { name: string; handle: string; content: string; likes: number; retweets: number; views: number }) {
  return `<!DOCTYPE html><html><head><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background:#000; display:flex; justify-content:center; padding:40px; }
    .post { background:#000; border:1px solid #2f3336; border-radius:16px; width:550px; padding:16px; }
    .header { display:flex; gap:10px; margin-bottom:8px; }
    .avatar { width:40px; height:40px; border-radius:50%; background:linear-gradient(135deg, #f97316, #f59e0b); display:flex; align-items:center; justify-content:center; color:white; font-weight:700; font-size:16px; flex-shrink:0; }
    .meta .name { font-weight:700; font-size:15px; color:#e7e9ea; display:flex; align-items:center; gap:4px; }
    .meta .name .badge { color:#1d9bf0; font-size:16px; }
    .meta .handle { font-size:15px; color:#71767b; }
    .content { font-size:15px; line-height:1.5; color:#e7e9ea; margin-bottom:12px; white-space:pre-line; }
    .time { font-size:15px; color:#71767b; padding-bottom:12px; border-bottom:1px solid #2f3336; margin-bottom:12px; }
    .stats { display:flex; gap:24px; padding-bottom:12px; border-bottom:1px solid #2f3336; margin-bottom:8px; }
    .stat { font-size:14px; color:#71767b; }
    .stat strong { color:#e7e9ea; font-weight:700; }
    .actions { display:flex; justify-content:space-around; }
    .action { font-size:18px; color:#71767b; padding:8px; }
  </style></head><body>
  <div class="post">
    <div class="header">
      <div class="avatar">${opts.name.split(' ').map(n => n[0]).join('')}</div>
      <div>
        <div class="meta"><div class="name">${opts.name} <span class="badge">✓</span></div></div>
        <div class="meta"><div class="handle">@${opts.handle}</div></div>
      </div>
    </div>
    <div class="content">${opts.content}</div>
    <div class="time">10:30 AM · Mar 29, 2026</div>
    <div class="stats">
      <div class="stat"><strong>${opts.retweets.toLocaleString()}</strong> Reposts</div>
      <div class="stat"><strong>${opts.likes.toLocaleString()}</strong> Likes</div>
      <div class="stat"><strong>${opts.views.toLocaleString()}</strong> Views</div>
    </div>
    <div class="actions">
      <div class="action">💬</div>
      <div class="action">🔁</div>
      <div class="action">❤️</div>
      <div class="action">📊</div>
      <div class="action">↗️</div>
    </div>
  </div>
  </body></html>`;
}

function marketingGraphic(opts: { headline: string; subhead: string; stat?: string; gradient: string }) {
  return `<!DOCTYPE html><html><head><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { display:flex; justify-content:center; padding:0; }
    .card { width:600px; height:400px; background:linear-gradient(135deg, ${opts.gradient}); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:40px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; position:relative; overflow:hidden; }
    .card::before { content:''; position:absolute; top:-50%; right:-50%; width:100%; height:100%; background:radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); }
    .logo { font-size:16px; font-weight:700; color:rgba(255,255,255,0.8); margin-bottom:24px; letter-spacing:1px; }
    .logo span { color:#fbbf24; }
    h1 { font-size:36px; font-weight:800; color:white; line-height:1.2; margin-bottom:16px; max-width:480px; position:relative; }
    .sub { font-size:18px; color:rgba(255,255,255,0.85); max-width:420px; line-height:1.4; position:relative; }
    .stat { font-size:64px; font-weight:900; color:white; margin-bottom:8px; position:relative; }
    .cta { margin-top:24px; background:white; color:#1e293b; padding:12px 28px; border-radius:8px; font-weight:700; font-size:15px; position:relative; }
  </style></head><body>
  <div class="card">
    <div class="logo">🔥 KONTENT<span>FIRE</span></div>
    ${opts.stat ? `<div class="stat">${opts.stat}</div>` : ''}
    <h1>${opts.headline}</h1>
    <div class="sub">${opts.subhead}</div>
    <div class="cta">Start Free Trial →</div>
  </div>
  </body></html>`;
}

const mockups = {
  // Social media post mockups
  'linkedin-post-1': linkedinPost({
    name: 'Premier Roofing Solutions',
    title: 'Roofing Contractor · Houston, TX',
    content: "Metal roofing vs. asphalt shingles — which is actually better for your home?\n\nAfter 15 years in the industry and 2,000+ installations, here's what I tell every homeowner:\n\n🏠 Asphalt Shingles:\n• Lower upfront cost ($5,000-$10,000)\n• 20-30 year lifespan\n• Easy to repair\n• Best for: Budget-conscious homeowners\n\n🔩 Metal Roofing:\n• Higher upfront ($12,000-$25,000)\n• 50-70 year lifespan\n• Energy savings of 25-40%\n• Best for: Long-term homeowners\n\nThe truth? Neither is universally \"better.\" It depends on your budget, timeline, and climate.\n\nWhat questions do you have about roofing materials? Drop them below 👇",
    likes: 247,
    comments: 38,
    reposts: 12,
  }),
  'linkedin-post-2': linkedinPost({
    name: 'Sarah Chen',
    title: 'Marketing Manager · Digital Agency',
    content: "We saved 6 hours per week by automating our social media with AI.\n\nHere's the exact workflow:\n\n1️⃣ Monday: AI generates 5 posts for the week\n2️⃣ We review and tweak in 15 minutes\n3️⃣ Everything auto-schedules to optimal times\n4️⃣ AI handles hashtags and formatting per platform\n5️⃣ We focus on replying to comments\n\nBefore: 8+ hours/week on content creation\nAfter: Under 2 hours/week total\n\nThe ROI? 3x more engagement with 75% less time.\n\nAI isn't replacing social media managers. It's giving us our time back.\n\nWhat's your biggest social media time drain?",
    likes: 1843,
    comments: 127,
    reposts: 89,
    image: '6 Hours Saved<br>Per Week With<br><span class="highlight">AI Automation</span>',
  }),
  'instagram-post-1': instagramPost({
    username: 'premierplumbing_atx',
    content: "This kitchen went from 1985 to 2026 in just one weekend! 🔧✨\n\nOur customer had been dealing with a leaky faucet and dated fixtures for years. We replaced everything — new faucet, garbage disposal, under-sink plumbing, and added a water filtration system.\n\nSwipe to see the before! ➡️\n\n📍 Austin, TX\n📞 Book your free estimate — link in bio!\n\n#PlumbingAustin #KitchenRemodel #BeforeAndAfter #PlumberLife #HomeImprovement #AustinTX",
    likes: 342,
    image: 'Kitchen Plumbing<br>Transformation ✨<br>Before → After',
  }),
  'instagram-post-2': instagramPost({
    username: 'greenscape_landscaping',
    content: "Spring is HERE and your lawn is ready for a glow-up! 🌱🌷\n\nHere are 5 things every homeowner should do this month:\n\n1️⃣ Rake dead grass and debris\n2️⃣ Aerate compacted soil\n3️⃣ Apply pre-emergent weed control\n4️⃣ Overseed bare patches\n5️⃣ Start your mowing schedule\n\nSave this post for your spring checklist! 💾\n\nNeed help? We're booking spring cleanups now 🗓️\n\n#SpringLawnCare #Landscaping #LawnMaintenance #CurbAppeal #GreenThumb",
    likes: 518,
    image: '🌱 Spring Lawn<br>Care Checklist<br>5 Must-Do Steps',
  }),
  'facebook-post-1': facebookPost({
    name: 'Comfort Zone HVAC',
    content: "🌡️ Is your AC ready for summer?\n\nHere are 5 signs your air conditioner needs attention BEFORE the heat hits:\n\n1. Strange noises when it starts up\n2. Uneven cooling in different rooms\n3. Higher than normal energy bills\n4. Musty or unusual odors\n5. It's been more than a year since your last tune-up\n\n💡 Pro tip: Schedule your AC tune-up NOW. Once summer hits, wait times double and emergency calls cost 2-3x more.\n\n📞 Book your spring AC checkup today — mention this post for 15% off!\n\nShare this with a friend who's been putting off their HVAC maintenance! 👇",
    likes: 89,
    comments: 23,
    shares: 15,
    image: '❄️ 5 Signs Your AC<br>Needs Attention<br>Before Summer',
  }),
  'twitter-post-1': twitterPost({
    name: 'KontentFire',
    handle: 'kontentfire',
    content: "We analyzed 10,000 social media posts from home service businesses.\n\nThe results:\n\n📸 Before/after posts → 4.2x more engagement\n📋 Educational tips → 2.8x more saves\n⭐ Customer reviews → 3.1x more clicks\n🎬 Behind-the-scenes → 2.4x more comments\n\nThe #1 mistake? Posting generic motivational quotes.\n\nPost what YOU know. Your expertise is your content strategy.",
    likes: 2847,
    retweets: 892,
    views: 184200,
  }),
  // Marketing graphics
  'graphic-stats': marketingGraphic({
    headline: 'Social Media Posts Created with AI See 3x More Engagement',
    subhead: 'AI-powered content generation saves 6+ hours per week while boosting results',
    gradient: '#0f172a, #1e3a5f, #0f172a',
  }),
  'graphic-time': marketingGraphic({
    headline: 'Stop Spending Hours on Social Media',
    subhead: 'Let AI create, schedule, and publish your content automatically',
    stat: '6hrs',
    gradient: '#7c2d12, #c2410c, #ea580c',
  }),
  'graphic-platforms': marketingGraphic({
    headline: 'One Dashboard. Four Platforms. Zero Hassle.',
    subhead: 'LinkedIn · Facebook · Instagram · Twitter — all managed from KontentFire',
    gradient: '#1e293b, #334155, #475569',
  }),
  'graphic-trial': marketingGraphic({
    headline: 'Your Content. Automated.',
    subhead: 'Free 7-day trial. No credit card required. Cancel anytime.',
    gradient: '#92400e, #b45309, #d97706',
  }),
};

async function generateMockups() {
  const browser = await chromium.launch({ headless: true });

  for (const [name, html] of Object.entries(mockups)) {
    const isTwitter = name.includes('twitter');
    const isGraphic = name.includes('graphic');
    const context = await browser.newContext({
      viewport: { width: isGraphic ? 600 : 630, height: isGraphic ? 400 : 800 },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();
    await page.setContent(html, { waitUntil: 'load' });
    await page.waitForTimeout(300);

    const element = await page.locator(isGraphic ? '.card' : '.post').first();
    await element.screenshot({
      path: path.join(OUTPUT_DIR, `${name}.png`),
      type: 'png',
    });
    console.log(`Generated: ${name}.png`);
    await context.close();
  }

  await browser.close();
  const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.png'));
  console.log(`\nDone! Generated ${files.length} mockup images in public/mockups/`);
}

generateMockups().catch(console.error);
