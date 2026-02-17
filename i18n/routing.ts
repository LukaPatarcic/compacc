import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['sr', 'en'],
  defaultLocale: 'sr',
  localePrefix: 'never',
});

export const locales = ['en', 'sr'] as const;
export type Locale = (typeof locales)[number];
