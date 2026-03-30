import { NextResponse } from 'next/server';

const guidePages = [
  { url: '/guides', priority: 0.9 },
  { url: '/guides/instagram', priority: 0.8 },
  { url: '/guides/linkedin', priority: 0.8 },
  { url: '/guides/facebook', priority: 0.8 },
  { url: '/guides/tiktok', priority: 0.8 },
];

export async function GET() {
  const baseUrl = 'https://kontentfire.com';
  const lastmod = new Date().toISOString();

  const urls = guidePages
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
  <!-- Platform Guides Sitemap - ${guidePages.length} URLs -->
  ${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
