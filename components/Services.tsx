import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <h2>{t('title')}</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>{t('consulting.title')}</h3>
            <p>{t('consulting.description')}</p>
          </div>
          <div className="service-card">
            <h3>{t('development.title')}</h3>
            <p>{t('development.description')}</p>
          </div>
          <div className="service-card">
            <h3>{t('support.title')}</h3>
            <p>{t('support.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
