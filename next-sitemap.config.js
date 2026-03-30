/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kontentfire.com',
  // Disable automatic generation - we use custom route handlers for sitemaps
  // and a manually maintained public/robots.txt
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  exclude: ['/**'],
};
