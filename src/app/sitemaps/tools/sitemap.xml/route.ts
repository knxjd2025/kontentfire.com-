import { NextResponse } from 'next/server';

const toolPages = [
  { url: '/tools', priority: 0.9 },
  { url: '/tools/social-media-post-generator', priority: 0.9 },
  { url: '/tools/linkedin-post-generator', priority: 0.8 },
  { url: '/tools/ai-caption-generator', priority: 0.8 },
  { url: '/tools/social-media-audit', priority: 0.8 },
];

export async function GET() {
  const baseUrl = 'https://kontentfire.com';
  const lastmod = new Date().toISOString();

  const urls = toolPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Free Tools Sitemap - ${toolPages.length} URLs -->
  ${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
