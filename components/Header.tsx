'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Locale } from '@/i18n/routing';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="logo">
          Compacc
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">{t('about')}</a>
          </li>
          <li>
            <a href="#services">{t('services')}</a>
          </li>
          <li>
            <a href="#contact">{t('contact')}</a>
          </li>
        </ul>
        <div className="lang-switcher">
          <button
            className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
            onClick={() => switchLocale('en')}
            disabled={isPending}
          >
            EN
          </button>
          <button
            className={`lang-btn ${locale === 'sr' ? 'active' : ''}`}
            onClick={() => switchLocale('sr')}
            disabled={isPending}
          >
            SR
          </button>
        </div>
      </nav>
    </header>
  );
}
