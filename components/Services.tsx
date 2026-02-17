import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="section section-alt services-section">
      <div className="container">
        <div className="services-layout">
          <div className="services-content">
            <h2>{t('title')}</h2>
            <p>{t('description')}</p>
          </div>
          <div className="services-image">
            <div className="services-image-wrapper">
              <img
                src="/images/services.webp"
                alt={t('imageAlt')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
