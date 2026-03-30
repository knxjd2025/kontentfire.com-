import { NextResponse } from 'next/server';
import { getAllIndustries } from '@/data/industries';
import { getAllCities } from '@/data/locations';

export async function GET() {
  const baseUrl = 'https://kontentfire.com';
  const lastmod = new Date().toISOString();
  const industries = getAllIndustries();
  const cities = getAllCities();

  // Industries hub page
  const urls: string[] = [
    `
  <url>
    <loc>${baseUrl}/industries</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`,
  ];

  // Individual industry pages
  for (const industry of industries) {
    urls.push(`
  <url>
    <loc>${baseUrl}/industries/${industry.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
  }

  // Top 20 industries x top 50 cities (by population)
  const topIndustries = industries
    .sort((a, b) => b.stats.avgMonthlySearches - a.stats.avgMonthlySearches)
    .slice(0, 20);
  const topCities = cities
    .sort((a, b) => b.population - a.population)
    .slice(0, 50);

  for (const industry of topIndustries) {
    for (const city of topCities) {
      urls.push(`
  <url>
    <loc>${baseUrl}/industries/${industry.slug}/${city.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Industries Sitemap - ${urls.length} URLs (${industries.length} industries + ${topIndustries.length * topCities.length} industry-city combos) -->
  ${urls.join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
