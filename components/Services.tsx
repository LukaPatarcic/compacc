import { useTranslations } from 'next-intl';
import Image from 'next/image';

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
              <Image
                src="/images/services.webp"
                alt={t('imageAlt')}
                width={588}
                height={400}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
