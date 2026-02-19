import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="hero">
      <div className="hero-background">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          quality={100}
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
