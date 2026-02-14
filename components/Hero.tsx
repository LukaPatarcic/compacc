import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="hero">
      <div className="container">
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
        <a href="#contact" className="btn">
          {t('cta')}
        </a>
      </div>
    </section>
  );
}
