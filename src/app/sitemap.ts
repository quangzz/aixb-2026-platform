import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aix.vn';
  const locales = ['vi', 'en'];
  
  const staticRoutes = [
    '',
    '/5d-framework',
    '/ve-chung-toi',
    '/lien-he',
    '/dich-vu/quick-scan',
    '/tools',
    '/tools/maturity-check',
    '/tools/cost-calculator'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    staticRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
