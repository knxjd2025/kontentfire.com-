/**
 * Generates realistic UI mockup screenshots for the KontentFire marketing site.
 * Uses Playwright to render HTML mockups that look like the real app.
 */
import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const OUTPUT_DIR = path.resolve(__dirname, '../public/screenshots');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const BRAND = {
  primary: '#f97316', // orange-500
  primaryDark: '#ea580c',
  bg: '#0f172a', // slate-900
  sidebar: '#1e293b', // slate-800
  card: '#1e293b',
  cardBorder: '#334155', // slate-700
  text: '#f8fafc',
  textMuted: '#94a3b8',
  green: '#22c55e',
  blue: '#3b82f6',
  purple: '#a855f7',
  pink: '#ec4899',
};

function appShell(content: string, title = 'KontentFire') {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: ${BRAND.bg}; color: ${BRAND.text}; }
  .app { display: flex; height: 800px; }
  .sidebar { width: 240px; background: ${BRAND.sidebar}; border-right: 1px solid ${BRAND.cardBorder}; padding: 20px 0; flex-shrink: 0; }
  .sidebar-logo { display: flex; align-items: center; gap: 10px; padding: 0 20px 24px; border-bottom: 1px solid ${BRAND.cardBorder}; margin-bottom: 16px; }
  .sidebar-logo .flame { font-size: 24px; }
  .sidebar-logo span { font-size: 18px; font-weight: 700; }
  .sidebar-logo .fire { color: ${BRAND.primary}; }
  .nav-item { display: flex; align-items: center; gap: 12px; padding: 10px 20px; color: ${BRAND.textMuted}; font-size: 14px; cursor: pointer; transition: all 0.2s; }
  .nav-item:hover, .nav-item.active { background: rgba(249,115,22,0.1); color: ${BRAND.primary}; }
  .nav-item.active { border-right: 3px solid ${BRAND.primary}; }
  .nav-icon { width: 20px; text-align: center; }
  .main { flex: 1; overflow: hidden; display: flex; flex-direction: column; }
  .topbar { height: 64px; background: ${BRAND.sidebar}; border-bottom: 1px solid ${BRAND.cardBorder}; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; }
  .topbar h1 { font-size: 20px; font-weight: 600; }
  .topbar-actions { display: flex; align-items: center; gap: 12px; }
  .btn { padding: 8px 16px; border-radius: 8px; font-size: 14px; font-weight: 500; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; }
  .btn-primary { background: ${BRAND.primary}; color: white; }
  .btn-outline { background: transparent; border: 1px solid ${BRAND.cardBorder}; color: ${BRAND.text}; }
  .content { flex: 1; padding: 24px; overflow-y: auto; }
  .card { background: ${BRAND.card}; border: 1px solid ${BRAND.cardBorder}; border-radius: 12px; padding: 20px; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
  .grid-4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 16px; }
  .stat-value { font-size: 28px; font-weight: 700; }
  .stat-label { font-size: 13px; color: ${BRAND.textMuted}; margin-top: 4px; }
  .badge { display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 500; }
  .badge-orange { background: rgba(249,115,22,0.15); color: ${BRAND.primary}; }
  .badge-green { background: rgba(34,197,94,0.15); color: ${BRAND.green}; }
  .badge-blue { background: rgba(59,130,246,0.15); color: ${BRAND.blue}; }
  .badge-purple { background: rgba(168,85,247,0.15); color: ${BRAND.purple}; }
  .avatar { width: 32px; height: 32px; border-radius: 50%; background: ${BRAND.primary}; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; font-weight: 600; }
  .progress { height: 8px; background: ${BRAND.cardBorder}; border-radius: 4px; overflow: hidden; }
  .progress-bar { height: 100%; border-radius: 4px; }
  .tab-bar { display: flex; gap: 0; border-bottom: 1px solid ${BRAND.cardBorder}; margin-bottom: 16px; }
  .tab { padding: 10px 16px; font-size: 14px; color: ${BRAND.textMuted}; cursor: pointer; border-bottom: 2px solid transparent; }
  .tab.active { color: ${BRAND.primary}; border-bottom-color: ${BRAND.primary}; }
  .list-item { display: flex; align-items: center; gap: 12px; padding: 14px 0; border-bottom: 1px solid ${BRAND.cardBorder}; }
  .list-item:last-child { border-bottom: none; }
  .platform-icon { width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 14px; }
  .truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .text-sm { font-size: 13px; }
  .text-muted { color: ${BRAND.textMuted}; }
  .mt-2 { margin-top: 8px; }
  .mt-4 { margin-top: 16px; }
  .mb-4 { margin-bottom: 16px; }
  .flex { display: flex; }
  .items-center { align-items: center; }
  .justify-between { justify-content: space-between; }
  .gap-2 { gap: 8px; }
  .gap-4 { gap: 16px; }
  .flex-1 { flex: 1; }
  .font-bold { font-weight: 700; }
  .input { background: ${BRAND.bg}; border: 1px solid ${BRAND.cardBorder}; border-radius: 8px; padding: 10px 14px; color: ${BRAND.text}; font-size: 14px; width: 100%; }
  .textarea { background: ${BRAND.bg}; border: 1px solid ${BRAND.cardBorder}; border-radius: 8px; padding: 10px 14px; color: ${BRAND.text}; font-size: 14px; width: 100%; min-height: 120px; resize: none; }
  .select { background: ${BRAND.bg}; border: 1px solid ${BRAND.cardBorder}; border-radius: 8px; padding: 10px 14px; color: ${BRAND.text}; font-size: 14px; }
  .modal-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 50; }
  .modal { background: ${BRAND.sidebar}; border: 1px solid ${BRAND.cardBorder}; border-radius: 16px; width: 600px; max-height: 700px; overflow-y: auto; }
  .modal-header { padding: 20px 24px; border-bottom: 1px solid ${BRAND.cardBorder}; display: flex; justify-content: space-between; align-items: center; }
  .modal-body { padding: 24px; }
  .template-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .template-card { background: ${BRAND.bg}; border: 1px solid ${BRAND.cardBorder}; border-radius: 10px; padding: 14px; text-align: center; cursor: pointer; }
  .template-card.selected { border-color: ${BRAND.primary}; background: rgba(249,115,22,0.1); }
  .template-icon { font-size: 28px; margin-bottom: 6px; }
  .template-name { font-size: 13px; font-weight: 600; }
</style>
</head>
<body>
<div class="app">
  <div class="sidebar">
    <div class="sidebar-logo">
      <span class="flame">🔥</span>
      <span>Kontent<span class="fire">Fire</span></span>
    </div>
    <div class="nav-item ${title === 'Dashboard' ? 'active' : ''}"><span class="nav-icon">🏠</span> Dashboard</div>
    <div class="nav-item ${title === 'Content' ? 'active' : ''}"><span class="nav-icon">📝</span> Content</div>
    <div class="nav-item ${title === 'Schedule' ? 'active' : ''}"><span class="nav-icon">📅</span> Schedule</div>
    <div class="nav-item ${title === 'Analytics' ? 'active' : ''}"><span class="nav-icon">📊</span> Analytics</div>
    <div class="nav-item ${title === 'Templates' ? 'active' : ''}"><span class="nav-icon">📑</span> Templates</div>
    <div class="nav-item ${title === 'Images' ? 'active' : ''}"><span class="nav-icon">🖼️</span> Images</div>
    <div class="nav-item ${title === 'Automation' ? 'active' : ''}"><span class="nav-icon">⚡</span> Automation</div>
    <div class="nav-item ${title === 'Brand' ? 'active' : ''}"><span class="nav-icon">🎨</span> Brand Voice</div>
    <div class="nav-item ${title === 'Integrations' ? 'active' : ''}"><span class="nav-icon">🔗</span> Integrations</div>
    <div class="nav-item"><span class="nav-icon">⚙️</span> Settings</div>
  </div>
  <div class="main">
    <div class="topbar">
      <h1>${title}</h1>
      <div class="topbar-actions">
        <span class="badge badge-orange">✨ 847 credits</span>
        <div class="avatar">JD</div>
      </div>
    </div>
    <div class="content">
      ${content}
    </div>
  </div>
</div>
</body>
</html>`;
}

const mockups: Record<string, string> = {
  // 1. Dashboard
  dashboard: appShell(`
    <div style="margin-bottom: 20px;">
      <h2 style="font-size: 24px; margin-bottom: 4px;">Welcome back, James! 👋</h2>
      <p class="text-muted text-sm">Here's what's happening with your content this week.</p>
    </div>
    <div class="grid-4 mb-4">
      <div class="card">
        <div class="stat-label">Posts This Week</div>
        <div class="stat-value" style="color: ${BRAND.primary}">24</div>
        <div class="text-sm text-muted mt-2">↑ 12% from last week</div>
      </div>
      <div class="card">
        <div class="stat-label">Total Engagement</div>
        <div class="stat-value" style="color: ${BRAND.green}">1,847</div>
        <div class="text-sm text-muted mt-2">↑ 23% from last week</div>
      </div>
      <div class="card">
        <div class="stat-label">Scheduled Posts</div>
        <div class="stat-value" style="color: ${BRAND.blue}">12</div>
        <div class="text-sm text-muted mt-2">Next: Tomorrow 10am</div>
      </div>
      <div class="card">
        <div class="stat-label">Credits Remaining</div>
        <div class="stat-value" style="color: ${BRAND.purple}">847</div>
        <div class="progress mt-2"><div class="progress-bar" style="width:85%;background:${BRAND.purple}"></div></div>
      </div>
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="flex justify-between items-center mb-4">
          <h3 style="font-weight:600">Recent Content</h3>
          <span class="badge badge-orange">View All</span>
        </div>
        <div class="list-item">
          <div class="platform-icon" style="background:rgba(59,130,246,0.15);color:${BRAND.blue}">in</div>
          <div class="flex-1">
            <div class="text-sm font-bold truncate">5 Myths About Home Insulation Busted</div>
            <div class="text-sm text-muted">LinkedIn · Published 2h ago</div>
          </div>
          <span class="badge badge-green">Published</span>
        </div>
        <div class="list-item">
          <div class="platform-icon" style="background:rgba(59,130,246,0.15);color:#1877F2">f</div>
          <div class="flex-1">
            <div class="text-sm font-bold truncate">Spring Lawn Care Checklist for Homeowners</div>
            <div class="text-sm text-muted">Facebook · Scheduled for tomorrow</div>
          </div>
          <span class="badge badge-blue">Scheduled</span>
        </div>
        <div class="list-item">
          <div class="platform-icon" style="background:rgba(236,72,153,0.15);color:${BRAND.pink}">ig</div>
          <div class="flex-1">
            <div class="text-sm font-bold truncate">Before & After: Kitchen Remodel Reveal</div>
            <div class="text-sm text-muted">Instagram · Draft</div>
          </div>
          <span class="badge badge-orange">Draft</span>
        </div>
      </div>
      <div class="card">
        <div class="flex justify-between items-center mb-4">
          <h3 style="font-weight:600">Platform Performance</h3>
          <span class="text-sm text-muted">Last 7 days</span>
        </div>
        <div style="margin-bottom:16px">
          <div class="flex justify-between items-center text-sm mb-1"><span>LinkedIn</span><span class="font-bold">642 engagements</span></div>
          <div class="progress"><div class="progress-bar" style="width:85%;background:${BRAND.blue}"></div></div>
        </div>
        <div style="margin-bottom:16px">
          <div class="flex justify-between items-center text-sm mb-1"><span>Facebook</span><span class="font-bold">523 engagements</span></div>
          <div class="progress"><div class="progress-bar" style="width:70%;background:#1877F2"></div></div>
        </div>
        <div style="margin-bottom:16px">
          <div class="flex justify-between items-center text-sm mb-1"><span>Instagram</span><span class="font-bold">412 engagements</span></div>
          <div class="progress"><div class="progress-bar" style="width:55%;background:${BRAND.pink}"></div></div>
        </div>
        <div>
          <div class="flex justify-between items-center text-sm mb-1"><span>Twitter/X</span><span class="font-bold">270 engagements</span></div>
          <div class="progress"><div class="progress-bar" style="width:36%;background:#1DA1F2"></div></div>
        </div>
      </div>
    </div>
  `, 'Dashboard'),

  // 2. Content Creator Modal
  'content-create': appShell(`
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <h2 style="font-size:18px;font-weight:700">✨ Create New Content</h2>
          <span style="cursor:pointer;font-size:20px;color:${BRAND.textMuted}">✕</span>
        </div>
        <div class="modal-body">
          <div class="mb-4">
            <label class="text-sm font-bold" style="display:block;margin-bottom:8px">Content Type</label>
            <div class="flex gap-2">
              <span class="btn btn-primary" style="font-size:13px">📝 Social Post</span>
              <span class="btn btn-outline" style="font-size:13px">📰 Blog Post</span>
              <span class="btn btn-outline" style="font-size:13px">📧 Email</span>
            </div>
          </div>
          <div class="mb-4">
            <label class="text-sm font-bold" style="display:block;margin-bottom:8px">Choose Template</label>
            <div class="template-grid">
              <div class="template-card selected"><div class="template-icon">⚔️</div><div class="template-name">Battle Royale</div></div>
              <div class="template-card"><div class="template-icon">🔍</div><div class="template-name">Myth Buster</div></div>
              <div class="template-card"><div class="template-icon">📋</div><div class="template-name">How-To Guide</div></div>
              <div class="template-card"><div class="template-icon">✅</div><div class="template-name">Checklist</div></div>
              <div class="template-card"><div class="template-icon">💡</div><div class="template-name">Tip of the Day</div></div>
              <div class="template-card"><div class="template-icon">🎬</div><div class="template-name">Behind Scenes</div></div>
            </div>
          </div>
          <div class="mb-4">
            <label class="text-sm font-bold" style="display:block;margin-bottom:8px">Topic</label>
            <input class="input" value="Best roofing materials for hurricane season" />
          </div>
          <div class="mb-4">
            <label class="text-sm font-bold" style="display:block;margin-bottom:8px">Platform</label>
            <div class="flex gap-2">
              <span class="btn btn-primary" style="font-size:13px">LinkedIn</span>
              <span class="btn btn-outline" style="font-size:13px">Facebook</span>
              <span class="btn btn-outline" style="font-size:13px">Instagram</span>
              <span class="btn btn-outline" style="font-size:13px">Twitter</span>
            </div>
          </div>
          <button class="btn btn-primary" style="width:100%;justify-content:center;padding:12px;font-size:15px">✨ Generate Content with AI</button>
        </div>
      </div>
    </div>
  `, 'Content'),

  // 3. Content List
  'content-list': appShell(`
    <div class="flex justify-between items-center mb-4">
      <div class="tab-bar" style="border:none;margin:0">
        <div class="tab active">All (47)</div>
        <div class="tab">Drafts (8)</div>
        <div class="tab">Scheduled (12)</div>
        <div class="tab">Published (24)</div>
        <div class="tab">Archived (3)</div>
      </div>
      <button class="btn btn-primary">+ Create Content</button>
    </div>
    <div class="card mb-4" style="padding:0">
      <div class="flex items-center gap-4" style="padding:16px;border-bottom:1px solid ${BRAND.cardBorder}">
        <input class="input" style="max-width:300px" placeholder="🔍 Search content..." />
        <span class="btn btn-outline" style="font-size:13px">Filter</span>
        <span class="btn btn-outline" style="font-size:13px">Sort</span>
      </div>
      <div style="padding:0 16px">
        <div class="list-item">
          <input type="checkbox" style="accent-color:${BRAND.primary}" />
          <div class="platform-icon" style="background:rgba(59,130,246,0.15);color:${BRAND.blue}">in</div>
          <div class="flex-1">
            <div class="text-sm font-bold">Metal Roofing vs Shingles: The Ultimate Battle Royale</div>
            <div class="text-sm text-muted">LinkedIn · Created 2 hours ago · 847 impressions</div>
          </div>
          <span class="badge badge-green">Published</span>
          <span class="btn btn-outline" style="font-size:12px;padding:4px 10px">Edit</span>
        </div>
        <div class="list-item">
          <input type="checkbox" style="accent-color:${BRAND.primary}" />
          <div class="platform-icon" style="background:rgba(59,130,246,0.15);color:#1877F2">f</div>
          <div class="flex-1">
            <div class="text-sm font-bold">5 Signs Your HVAC System Needs Replacement</div>
            <div class="text-sm text-muted">Facebook · Scheduled for Mar 30, 10:00 AM</div>
          </div>
          <span class="badge badge-blue">Scheduled</span>
          <span class="btn btn-outline" style="font-size:12px;padding:4px 10px">Edit</span>
        </div>
        <div class="list-item">
          <input type="checkbox" style="accent-color:${BRAND.primary}" />
          <div class="platform-icon" style="background:rgba(236,72,153,0.15);color:${BRAND.pink}">ig</div>
          <div class="flex-1">
            <div class="text-sm font-bold">Spring Cleaning Checklist Every Homeowner Needs</div>
            <div class="text-sm text-muted">Instagram · Draft · Last edited 5 hours ago</div>
          </div>
          <span class="badge badge-orange">Draft</span>
          <span class="btn btn-outline" style="font-size:12px;padding:4px 10px">Edit</span>
        </div>
        <div class="list-item">
          <input type="checkbox" style="accent-color:${BRAND.primary}" />
          <div class="platform-icon" style="background:rgba(29,161,242,0.15);color:#1DA1F2">𝕏</div>
          <div class="flex-1">
            <div class="text-sm font-bold">Did you know the average home loses 25-30% of heating energy through windows?</div>
            <div class="text-sm text-muted">Twitter · Published 1 day ago · 312 impressions</div>
          </div>
          <span class="badge badge-green">Published</span>
          <span class="btn btn-outline" style="font-size:12px;padding:4px 10px">Edit</span>
        </div>
        <div class="list-item">
          <input type="checkbox" style="accent-color:${BRAND.primary}" />
          <div class="platform-icon" style="background:rgba(59,130,246,0.15);color:${BRAND.blue}">in</div>
          <div class="flex-1">
            <div class="text-sm font-bold">How to Winterize Your Sprinkler System in 7 Easy Steps</div>
            <div class="text-sm text-muted">LinkedIn · Scheduled for Apr 1, 9:00 AM</div>
          </div>
          <span class="badge badge-blue">Scheduled</span>
          <span class="btn btn-outline" style="font-size:12px;padding:4px 10px">Edit</span>
        </div>
      </div>
    </div>
  `, 'Content'),

  // 4. Schedule Calendar
  'schedule-calendar': appShell(`
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center gap-4">
        <h2 style="font-size:18px;font-weight:600">March 2026</h2>
        <span class="btn btn-outline" style="font-size:13px;padding:6px 12px">← Prev</span>
        <span class="btn btn-outline" style="font-size:13px;padding:6px 12px">Next →</span>
        <span class="btn btn-outline" style="font-size:13px;padding:6px 12px">Today</span>
      </div>
      <div class="flex gap-2">
        <span class="btn btn-primary" style="font-size:13px">Month</span>
        <span class="btn btn-outline" style="font-size:13px">Week</span>
        <span class="btn btn-outline" style="font-size:13px">List</span>
      </div>
    </div>
    <div class="card" style="padding:0">
      <div style="display:grid;grid-template-columns:repeat(7,1fr);text-align:center;border-bottom:1px solid ${BRAND.cardBorder}">
        ${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => `<div style="padding:10px;font-size:13px;font-weight:600;color:${BRAND.textMuted}">${d}</div>`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);min-height:500px">
        ${Array.from({length:35}, (_, i) => {
          const day = i - 5; // offset for month start
          const dayNum = day + 1;
          const isMonth = day >= 0 && day < 31;
          const hasContent = [2,5,8,10,12,15,17,19,22,24,26,28].includes(dayNum);
          const isToday = dayNum === 29;
          return `<div style="border:1px solid ${BRAND.cardBorder};padding:6px;min-height:72px;${!isMonth ? 'opacity:0.3' : ''}${isToday ? ';background:rgba(249,115,22,0.08)' : ''}">
            <div style="font-size:12px;margin-bottom:4px;${isToday ? 'color:'+BRAND.primary+';font-weight:700' : 'color:'+BRAND.textMuted}">${isMonth ? dayNum : ''}</div>
            ${hasContent && isMonth ? `<div style="font-size:10px;background:rgba(59,130,246,0.2);color:${BRAND.blue};padding:2px 6px;border-radius:4px;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">📝 LinkedIn Post</div>` : ''}
            ${[5,15,24].includes(dayNum) && isMonth ? `<div style="font-size:10px;background:rgba(236,72,153,0.2);color:${BRAND.pink};padding:2px 6px;border-radius:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">📸 Instagram</div>` : ''}
            ${[10,22].includes(dayNum) && isMonth ? `<div style="font-size:10px;background:rgba(24,119,242,0.2);color:#1877F2;padding:2px 6px;border-radius:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">📘 Facebook</div>` : ''}
          </div>`;
        }).join('')}
      </div>
    </div>
  `, 'Schedule'),

  // 5. Analytics
  'analytics-dashboard': appShell(`
    <div class="flex justify-between items-center mb-4">
      <h2 style="font-size:18px;font-weight:600">Performance Overview</h2>
      <div class="flex gap-2">
        <span class="btn btn-outline" style="font-size:13px">Last 7 Days</span>
        <span class="btn btn-primary" style="font-size:13px">Last 30 Days</span>
        <span class="btn btn-outline" style="font-size:13px">Last 90 Days</span>
      </div>
    </div>
    <div class="grid-4 mb-4">
      <div class="card" style="text-align:center">
        <div class="stat-label">Total Impressions</div>
        <div class="stat-value" style="color:${BRAND.blue}">23.4K</div>
        <div class="text-sm" style="color:${BRAND.green}">↑ 18.2%</div>
      </div>
      <div class="card" style="text-align:center">
        <div class="stat-label">Engagements</div>
        <div class="stat-value" style="color:${BRAND.green}">4,215</div>
        <div class="text-sm" style="color:${BRAND.green}">↑ 24.7%</div>
      </div>
      <div class="card" style="text-align:center">
        <div class="stat-label">Click-Through Rate</div>
        <div class="stat-value" style="color:${BRAND.primary}">3.8%</div>
        <div class="text-sm" style="color:${BRAND.green}">↑ 0.5%</div>
      </div>
      <div class="card" style="text-align:center">
        <div class="stat-label">New Followers</div>
        <div class="stat-value" style="color:${BRAND.purple}">+287</div>
        <div class="text-sm" style="color:${BRAND.green}">↑ 31.4%</div>
      </div>
    </div>
    <div class="card mb-4">
      <h3 style="font-weight:600;margin-bottom:16px">Engagement Over Time</h3>
      <div style="height:200px;display:flex;align-items:flex-end;gap:6px;padding:0 10px">
        ${[65,72,58,88,92,78,95,110,85,102,120,98,115,130,108,125,140,118,135,155,128,145,160,138,150,170,142,158,175,165].map((v, i) =>
          `<div style="flex:1;background:linear-gradient(to top, ${BRAND.primary}, ${BRAND.primary}88);height:${v/175*100}%;border-radius:3px 3px 0 0;min-width:4px" title="Day ${i+1}"></div>`
        ).join('')}
      </div>
      <div class="flex justify-between text-sm text-muted" style="margin-top:8px;padding:0 10px"><span>Mar 1</span><span>Mar 15</span><span>Mar 30</span></div>
    </div>
    <div class="grid-2">
      <div class="card">
        <h3 style="font-weight:600;margin-bottom:16px">Top Performing Posts</h3>
        <div class="list-item"><div class="flex-1"><div class="text-sm font-bold">Metal Roofing vs Shingles Battle</div><div class="text-sm text-muted">LinkedIn · 1,247 impressions</div></div><span class="badge badge-green">Top</span></div>
        <div class="list-item"><div class="flex-1"><div class="text-sm font-bold">5 HVAC Myths Homeowners Believe</div><div class="text-sm text-muted">Facebook · 892 impressions</div></div></div>
        <div class="list-item"><div class="flex-1"><div class="text-sm font-bold">Kitchen Remodel Before & After</div><div class="text-sm text-muted">Instagram · 756 impressions</div></div></div>
      </div>
      <div class="card">
        <h3 style="font-weight:600;margin-bottom:16px">Platform Breakdown</h3>
        <div style="margin-bottom:14px"><div class="flex justify-between text-sm mb-1"><span>LinkedIn</span><span class="font-bold">38%</span></div><div class="progress"><div class="progress-bar" style="width:38%;background:${BRAND.blue}"></div></div></div>
        <div style="margin-bottom:14px"><div class="flex justify-between text-sm mb-1"><span>Facebook</span><span class="font-bold">28%</span></div><div class="progress"><div class="progress-bar" style="width:28%;background:#1877F2"></div></div></div>
        <div style="margin-bottom:14px"><div class="flex justify-between text-sm mb-1"><span>Instagram</span><span class="font-bold">22%</span></div><div class="progress"><div class="progress-bar" style="width:22%;background:${BRAND.pink}"></div></div></div>
        <div><div class="flex justify-between text-sm mb-1"><span>Twitter/X</span><span class="font-bold">12%</span></div><div class="progress"><div class="progress-bar" style="width:12%;background:#1DA1F2"></div></div></div>
      </div>
    </div>
  `, 'Analytics'),

  // 6. Template Selector
  'template-selector': appShell(`
    <div class="mb-4">
      <h2 style="font-size:18px;font-weight:600;margin-bottom:4px">Content Templates</h2>
      <p class="text-sm text-muted">Choose from 13 proven templates to create engaging content.</p>
    </div>
    <div class="tab-bar">
      <div class="tab active">All Templates</div>
      <div class="tab">Educational</div>
      <div class="tab">Engagement</div>
      <div class="tab">Promotional</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
      ${[
        {icon:'⚔️',name:'Battle Royale',desc:'Compare two options your audience cares about',badge:'Popular'},
        {icon:'🔍',name:'Myth Buster',desc:'Debunk common misconceptions in your industry',badge:'Popular'},
        {icon:'📋',name:'How-To Guide',desc:'Step-by-step instructions your audience needs',badge:''},
        {icon:'✅',name:'Checklist',desc:'Actionable checklist your audience can save',badge:''},
        {icon:'💡',name:'Tip of the Day',desc:'Quick valuable tip that builds authority',badge:'New'},
        {icon:'🎬',name:'Behind the Scenes',desc:'Show the human side of your business',badge:''},
        {icon:'🔥',name:'Trending Topic',desc:'Join the conversation on what is trending',badge:''},
        {icon:'⭐',name:'Product Showcase',desc:'Highlight your products or services',badge:''},
        {icon:'📰',name:'Press Release',desc:'Share company news and announcements',badge:''},
        {icon:'🏆',name:'Case Study',desc:'Share success stories and results',badge:'New'},
        {icon:'💬',name:'Engagement Boost',desc:'Drive comments and shares with questions',badge:'Popular'},
        {icon:'📖',name:'Basics 101',desc:'Explain fundamentals for your audience',badge:''},
      ].map(t => `
        <div class="card" style="cursor:pointer;transition:all 0.2s;${t.badge === 'Popular' ? 'border-color:'+BRAND.primary : ''}">
          <div style="font-size:36px;margin-bottom:8px">${t.icon}</div>
          <div style="font-weight:700;font-size:15px;margin-bottom:4px">${t.name}</div>
          <div class="text-sm text-muted" style="margin-bottom:8px">${t.desc}</div>
          ${t.badge ? `<span class="badge ${t.badge === 'Popular' ? 'badge-orange' : t.badge === 'New' ? 'badge-green' : 'badge-blue'}">${t.badge}</span>` : ''}
        </div>
      `).join('')}
    </div>
  `, 'Templates'),

  // 7. Brand Voice
  'brand-voice': appShell(`
    <div class="mb-4">
      <h2 style="font-size:18px;font-weight:600;margin-bottom:4px">Brand Voice Settings</h2>
      <p class="text-sm text-muted">Configure how AI writes content for your brand.</p>
    </div>
    <div class="grid-2">
      <div>
        <div class="card mb-4">
          <h3 style="font-weight:600;margin-bottom:16px">Brand Identity</h3>
          <div class="mb-4">
            <label class="text-sm font-bold" style="display:block;margin-bottom:6px">Business Name</label>
            <input class="input" value="Premier Roofing Solutions" />
          </div>
          <div class="mb-4">
            <label class="text-sm font-bold" style="display:block;margin-bottom:6px">Industry</label>
            <div class="select" style="display:block">Roofing & Exterior Services</div>
          </div>
          <div class="mb-4">
            <label class="text-sm font-bold" style="display:block;margin-bottom:6px">Brand Description</label>
            <div class="textarea" style="min-height:80px">Family-owned roofing company serving the Houston metro area since 2005. We specialize in storm damage repair, new installations, and energy-efficient roofing solutions.</div>
          </div>
        </div>
        <div class="card">
          <h3 style="font-weight:600;margin-bottom:16px">Tone & Style</h3>
          <div class="mb-4">
            <label class="text-sm font-bold" style="display:block;margin-bottom:6px">Writing Tone</label>
            <div class="flex gap-2">
              <span class="btn btn-primary" style="font-size:12px">Professional</span>
              <span class="btn btn-outline" style="font-size:12px">Casual</span>
              <span class="btn btn-outline" style="font-size:12px">Friendly</span>
              <span class="btn btn-outline" style="font-size:12px">Authoritative</span>
            </div>
          </div>
          <div class="mb-4">
            <label class="text-sm font-bold" style="display:block;margin-bottom:6px">Emoji Usage</label>
            <div class="flex gap-2">
              <span class="btn btn-outline" style="font-size:12px">None</span>
              <span class="btn btn-primary" style="font-size:12px">Minimal</span>
              <span class="btn btn-outline" style="font-size:12px">Moderate</span>
              <span class="btn btn-outline" style="font-size:12px">Heavy</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card mb-4">
          <h3 style="font-weight:600;margin-bottom:16px">AI Preview</h3>
          <div style="background:${BRAND.bg};border-radius:8px;padding:16px;border:1px solid ${BRAND.cardBorder}">
            <div class="flex items-center gap-2 mb-2">
              <span class="badge badge-blue">LinkedIn</span>
              <span class="text-sm text-muted">Generated Preview</span>
            </div>
            <p class="text-sm" style="line-height:1.6">🏠 Storm season is approaching Houston. Here are 5 signs your roof may need attention before the next big one hits:

1. Missing or curling shingles
2. Granules in your gutters
3. Daylight through roof boards
4. Water stains on ceilings
5. Sagging roof deck

At Premier Roofing Solutions, we offer free storm damage inspections. Don't wait until it's too late — schedule yours today.

#HoustonRoofing #StormPrep #RoofInspection</p>
          </div>
          <button class="btn btn-primary mt-4" style="width:100%;justify-content:center">✨ Regenerate Preview</button>
        </div>
        <div class="card">
          <h3 style="font-weight:600;margin-bottom:12px">Keywords & Hashtags</h3>
          <div class="flex gap-2" style="flex-wrap:wrap">
            ${['#HoustonRoofing', '#StormDamage', '#RoofRepair', '#HomeImprovement', '#PremierRoofing', '#RoofingExperts'].map(h =>
              `<span class="badge badge-orange">${h}</span>`
            ).join('')}
          </div>
        </div>
      </div>
    </div>
  `, 'Brand'),

  // 8. Multi-platform publishing
  'multi-platform': appShell(`
    <div class="mb-4">
      <h2 style="font-size:18px;font-weight:600;margin-bottom:4px">Connected Accounts</h2>
      <p class="text-sm text-muted">Manage your social media accounts and publishing settings.</p>
    </div>
    <div class="grid-2 mb-4">
      <div class="card" style="border-color:${BRAND.blue}">
        <div class="flex items-center gap-4 mb-4">
          <div style="width:48px;height:48px;border-radius:10px;background:rgba(59,130,246,0.15);display:flex;align-items:center;justify-content:center;font-size:24px;color:${BRAND.blue}">in</div>
          <div class="flex-1"><div class="font-bold">LinkedIn</div><div class="text-sm text-muted">Premier Roofing Solutions</div></div>
          <span class="badge badge-green">Connected</span>
        </div>
        <div class="text-sm text-muted">Last post: 2 hours ago · 12 posts this month</div>
      </div>
      <div class="card" style="border-color:#1877F2">
        <div class="flex items-center gap-4 mb-4">
          <div style="width:48px;height:48px;border-radius:10px;background:rgba(24,119,242,0.15);display:flex;align-items:center;justify-content:center;font-size:24px;color:#1877F2">f</div>
          <div class="flex-1"><div class="font-bold">Facebook</div><div class="text-sm text-muted">Premier Roofing - Houston</div></div>
          <span class="badge badge-green">Connected</span>
        </div>
        <div class="text-sm text-muted">Last post: Yesterday · 8 posts this month</div>
      </div>
      <div class="card" style="border-color:${BRAND.pink}">
        <div class="flex items-center gap-4 mb-4">
          <div style="width:48px;height:48px;border-radius:10px;background:rgba(236,72,153,0.15);display:flex;align-items:center;justify-content:center;font-size:24px;color:${BRAND.pink}">ig</div>
          <div class="flex-1"><div class="font-bold">Instagram</div><div class="text-sm text-muted">@premierroofinghtx</div></div>
          <span class="badge badge-green">Connected</span>
        </div>
        <div class="text-sm text-muted">Last post: 3 days ago · 6 posts this month</div>
      </div>
      <div class="card" style="border-color:${BRAND.cardBorder}">
        <div class="flex items-center gap-4 mb-4">
          <div style="width:48px;height:48px;border-radius:10px;background:rgba(29,161,242,0.15);display:flex;align-items:center;justify-content:center;font-size:20px;color:#1DA1F2">𝕏</div>
          <div class="flex-1"><div class="font-bold">Twitter / X</div><div class="text-sm text-muted">Not connected</div></div>
          <span class="btn btn-primary" style="font-size:12px;padding:6px 12px">Connect</span>
        </div>
        <div class="text-sm text-muted">Connect to publish to Twitter/X</div>
      </div>
    </div>
  `, 'Integrations'),
};

async function generateScreenshots() {
  const browser = await chromium.launch({ headless: true });

  for (const [name, html] of Object.entries(mockups)) {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();
    await page.setContent(html, { waitUntil: 'load' });
    await page.waitForTimeout(500);

    await page.screenshot({
      path: path.join(OUTPUT_DIR, `${name}.png`),
      type: 'png',
      fullPage: false,
    });
    console.log(`Generated: ${name}.png`);
    await context.close();
  }

  await browser.close();

  const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.png'));
  console.log(`\nDone! Generated ${files.length} mockup screenshots in public/screenshots/`);
}

generateScreenshots().catch(console.error);
