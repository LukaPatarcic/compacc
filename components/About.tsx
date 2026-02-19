import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  const paragraphs = [
    t('paragraphs.0'),
    t('paragraphs.1'),
    t('paragraphs.2'),
    t('paragraphs.3'),
  ];

  return (
    <section id="about" className="section section-alt about-section">
      <div className="container">
        <div className="about-layout">
          <div className="about-image">
            <div className="about-image-wrapper">
              <img
                src="/images/about.webp"
                alt={t('title')}
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
