import { NextResponse } from 'next/server';
import { getAllChapters } from '@/data/book-chapters';

export async function GET() {
  const baseUrl = 'https://kontentfire.com';
  const lastmod = new Date().toISOString();
  const chapters = getAllChapters();

  const hubUrl = `
  <url>
    <loc>${baseUrl}/guides/books</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;

  const chapterUrls = chapters
    .map(
      (ch) => `
  <url>
    <loc>${baseUrl}/guides/books/${ch.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('');

  const totalUrls = 1 + chapters.length;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Books Sitemap - ${totalUrls} URLs -->
  ${hubUrl}
  ${chapterUrls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
