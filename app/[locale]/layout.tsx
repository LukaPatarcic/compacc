import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Roboto } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';

const roboto = Roboto({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

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
    icons: {
      icon: [
        { url: '/favicon.ico', type: 'image/x-icon' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
    manifest: '/site.webmanifest',
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N1G7940GCV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N1G7940GCV');
          `}
        </Script>
      </head>
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
