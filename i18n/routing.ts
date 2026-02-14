import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'sr'],
  defaultLocale: 'en',
  localePrefix: 'never',
});

export const locales = ['en', 'sr'] as const;
export type Locale = (typeof locales)[number];
