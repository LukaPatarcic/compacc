import { useTranslations } from 'next-intl';
import Image from 'next/image';

const partners = [
  {
    id: 'hp',
    logo: '/images/hp.webp',
    nameKey: 'hp',
  },
  {
    id: 'kyocera',
    logo: '/images/kyocera.webp',
    nameKey: 'kyocera',
  },
  {
    id: 'dell',
    logo: '/images/dell.webp',
    nameKey: 'dell',
  },
  {
    id: 'hytera',
    logo: '/images/hytera.webp',
    nameKey: 'hytera',
  },
];

export default function Partners() {
  const t = useTranslations('partners');

  return (
    <section id="partners" className="section partners-section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <h2 className="section-title">{t('title')}</h2>
          </div>
          {t('description') && (
            <div className="section-header-right">
              <p className="section-description">{t('description')}</p>
            </div>
          )}
        </div>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <div className="partner-logo">
                <Image
                  src={partner.logo}
                  alt={t(`${partner.nameKey}.name`)}
                  width={180}
                  height={88}
                  quality={100}
                  style={{ objectFit: 'contain', width: 'auto', height: '100%', maxWidth: '180px' }}
                />
              </div>
              <p className="partner-name">{t(`${partner.nameKey}.type`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
