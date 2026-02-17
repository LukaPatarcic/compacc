import { useTranslations } from 'next-intl';

const TradeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      stroke="#00adee"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22V12H15V22"
      stroke="#00adee"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ConsultingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
      stroke="#ee1c25"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
      stroke="#ee1c25"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
      stroke="#ee1c25"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
      stroke="#ee1c25"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EngineeringIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.7 6.3C14.5168 6.48693 14.4141 6.73825 14.4141 7C14.4141 7.26175 14.5168 7.51307 14.7 7.7L16.3 9.3C16.4869 9.48324 16.7383 9.58588 17 9.58588C17.2617 9.58588 17.5131 9.48324 17.7 9.3L21.47 5.53C21.9728 6.64106 22.1251 7.87403 21.9065 9.07131C21.6878 10.2686 21.1087 11.3728 20.2435 12.2381C19.3783 13.1033 18.274 13.6823 17.0767 13.901C15.8795 14.1197 14.6465 13.9674 13.5354 13.4646L6.51843 20.4815C6.08584 20.9141 5.50009 21.1568 4.89043 21.1568C4.28076 21.1568 3.69502 20.9141 3.26243 20.4815C2.82983 20.049 2.58716 19.4632 2.58716 18.8535C2.58716 18.2439 2.82983 17.6581 3.26243 17.2255L10.2794 10.2086C9.77654 9.09749 9.62427 7.86452 9.84296 6.66724C10.0616 5.46996 10.6407 4.36568 11.5059 3.50046C12.3711 2.63524 13.4754 2.05616 14.6727 1.83747C15.8699 1.61878 17.1029 1.77105 18.214 2.27395L14.454 6.03395L14.7 6.3Z"
      stroke="#ffc107"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const features = [
  {
    id: 'engineering',
    icon: EngineeringIcon,
    color: 'yellow',
    titleKey: 'engineering.title',
    descriptionKey: 'engineering.description',
  },
  {
    id: 'consulting',
    icon: ConsultingIcon,
    color: 'red',
    titleKey: 'consulting.title',
    descriptionKey: 'consulting.description',
  },
  {
    id: 'trade',
    icon: TradeIcon,
    color: 'blue',
    titleKey: 'trade.title',
    descriptionKey: 'trade.description',
  },
];

export default function Features() {
  const t = useTranslations('features');

  return (
    <section className="section section-alt features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="feature-item">
                <div className="feature-header">
                  <div className={`feature-icon ${feature.color}`}>
                    <IconComponent />
                  </div>
                  <h3 className="feature-title">{t(feature.titleKey)}</h3>
                </div>
                <p className="feature-description">{t(feature.descriptionKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
