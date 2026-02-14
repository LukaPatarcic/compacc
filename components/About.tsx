import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="section">
      <div className="container">
        <h2>{t('title')}</h2>
        <p>{t('description')}</p>
      </div>
    </section>
  );
}
