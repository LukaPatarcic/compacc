import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('about');
  const yearsSince1993 = new Date().getFullYear() - 1993;

  const paragraphs = [
    t('paragraphs.0'),
    t('paragraphs.1', { years: yearsSince1993 }),
    t('paragraphs.2'),
    t('paragraphs.3'),
  ];

  return (
    <section id="about" className="section section-alt about-section">
      <div className="container">
        <div className="about-layout">
          <div className="about-image">
            <div className="about-image-wrapper">
              <Image
                src="/images/about.webp"
                alt={t('title')}
                width={588}
                height={400}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="about-content">
            <h2>{t('title')}</h2>
            <div className="about-paragraphs">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
