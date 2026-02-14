import { useTranslations, useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="hero">
      <div className="container">
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
        <a href={`/${locale}#contact`} className="btn">
          {t('cta')}
        </a>
      </div>
    </section>
  );
}
