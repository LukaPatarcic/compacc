import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="hero">
      <div className="hero-background">
        <img
          src="/images/hero.webp"
          alt=""
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1>{t('title')}</h1>
        <p className="hero-subtitle">{t('subtitle')}</p>
        <a href="#contact" className="btn btn-lg">
          {t('cta')}
        </a>
      </div>
    </section>
  );
}
