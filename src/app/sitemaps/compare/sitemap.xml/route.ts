import { NextResponse } from 'next/server';
import { getAllComparisons } from '@/data/comparisons';

export async function GET() {
  const baseUrl = 'https://kontentfire.com';
  const lastmod = new Date().toISOString();
  const comparisons = getAllComparisons();

  const urls = [
    `
  <url>
    <loc>${baseUrl}/compare</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`,
    ...comparisons.map(
      (c) => `
  <url>
    <loc>${baseUrl}/compare/${c.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Compare Pages Sitemap - ${urls.length} URLs -->
  ${urls.join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
