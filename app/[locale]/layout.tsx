import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://compacc.rs';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Compacc - Your Trusted Partner for Innovative Solutions',
    sr: 'Compacc - Vaš pouzdan partner za inovativna rešenja',
  };

  const descriptions: Record<string, string> = {
    en: 'Compacc provides innovative solutions and services to help your business grow. Contact us today to learn more.',
    sr: 'Compacc pruža inovativna rešenja i usluge koje pomažu vašem poslovanju da raste. Kontaktirajte nas danas.',
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

  return {
    title: {
      default: title,
      template: '%s | Compacc',
    },
    description,
    keywords: ['compacc', 'solutions', 'services', 'business', 'innovation'],
    authors: [{ name: 'Compacc' }],
    creator: 'Compacc',
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        sr: '/sr',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: siteUrl,
      siteName: 'Compacc',
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'sr')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
