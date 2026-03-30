import { NextResponse } from 'next/server';

// Master sitemap index - links to all category sitemaps
export async function GET() {
  const baseUrl = 'https://kontentfire.com';
  const lastmod = new Date().toISOString();

  const sitemaps = [
    { url: '/sitemaps/core/sitemap.xml', name: 'Core Pages', count: 15 },
    { url: '/sitemaps/features/sitemap.xml', name: 'Features', count: 13 },
    { url: '/sitemaps/locations/sitemap.xml', name: 'Locations', count: 255 },
    { url: '/sitemaps/industries/sitemap.xml', name: 'Industries', count: 1026 },
    { url: '/sitemaps/compare/sitemap.xml', name: 'Comparisons', count: 9 },
    { url: '/sitemaps/guides/sitemap.xml', name: 'Platform Guides', count: 5 },
    { url: '/sitemaps/tools/sitemap.xml', name: 'Free Tools', count: 4 },
    { url: '/sitemaps/resources/sitemap.xml', name: 'Resources', count: 10 },
    { url: '/sitemaps/blog/sitemap.xml', name: 'Blog', count: 10 },
    { url: '/sitemaps/books/sitemap.xml', name: 'Books', count: 13 },
  ];

  const sitemapEntries = sitemaps
    .map(
      (sitemap) => `
  <sitemap>
    <loc>${baseUrl}${sitemap.url}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`
    )
    .join('');

  const totalUrls = sitemaps.reduce((sum, s) => sum + s.count, 0);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!--
    KontentFire Sitemap Index
    Total URLs: ${totalUrls}

    Sitemap Structure:
    - Core: Homepage, pricing, about, contact, free trial, legal (${sitemaps[0].count} URLs)
    - Features: Feature pages and sub-pages (${sitemaps[1].count} URLs)
    - Locations: 50 US States + 205 Cities (${sitemaps[2].count} URLs)
    - Industries: 25 trade verticals + industry-city combos (${sitemaps[3].count} URLs)
    - Comparisons: KontentFire vs 8 competitors (${sitemaps[4].count} URLs)
    - Platform Guides: Instagram, LinkedIn, Facebook, TikTok (${sitemaps[5].count} URLs)
    - Free Tools: LinkedIn post generator, caption generator, audit (${sitemaps[6].count} URLs)
    - Resources: Guides and strategy content (${sitemaps[7].count} URLs)
    - Blog: Blog listing and articles (${sitemaps[8].count} URLs)
    - Books: AI Apprentice book hub + 12 chapter pages (${sitemaps[9].count} URLs)
  -->
  ${sitemapEntries}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
