'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href={`/${locale}`} className="logo">
          Compacc
        </a>
        <ul className="nav-links">
          <li>
            <a href={`/${locale}#about`}>{t('about')}</a>
          </li>
          <li>
            <a href={`/${locale}#services`}>{t('services')}</a>
          </li>
          <li>
            <a href={`/${locale}#contact`}>{t('contact')}</a>
          </li>
        </ul>
        <div className="lang-switcher">
          <button
            className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
            onClick={() => switchLocale('en')}
          >
            EN
          </button>
          <button
            className={`lang-btn ${locale === 'sr' ? 'active' : ''}`}
            onClick={() => switchLocale('sr')}
          >
            SR
          </button>
        </div>
      </nav>
    </header>
  );
}
