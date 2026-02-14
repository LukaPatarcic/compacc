import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://compacc.rs';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;

  const routes = [''];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      sitemap.push({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}${route}`])
          ),
        },
      });
      break; // Only add once per route since localePrefix is 'never'
    }
  }

  return sitemap;
}
