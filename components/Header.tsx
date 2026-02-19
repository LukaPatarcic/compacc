'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Locale } from '@/i18n/routing';
import Image from 'next/image';

export default function Header() {
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
          <Image src="/images/logo.png" alt="Compacc" className="logo-image" width={150} height={40} quality={100} />
        </a>
        <div className="nav-right">
          <div className="lang-switcher">
            <button
              className={`lang-btn ${locale === 'sr' ? 'active' : ''}`}
              onClick={() => switchLocale('sr')}
              disabled={isPending}
            >
              SR
            </button>
            <button
              className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
              onClick={() => switchLocale('en')}
              disabled={isPending}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
