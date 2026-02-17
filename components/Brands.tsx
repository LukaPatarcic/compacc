import { useTranslations } from 'next-intl';

const ZoomIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#2D8CFF"/>
    <path d="M12 17h18v14H12V17zm20 3l6-4v16l-6-4V20z" fill="white"/>
  </svg>
);

const SalesforceIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="28" rx="20" ry="12" fill="#00A1E0"/>
    <ellipse cx="16" cy="22" rx="10" ry="8" fill="#00A1E0"/>
    <ellipse cx="32" cy="22" rx="10" ry="8" fill="#00A1E0"/>
    <ellipse cx="24" cy="16" rx="8" ry="6" fill="#00A1E0"/>
  </svg>
);

const GoogleCalendarIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="4" fill="#4285F4"/>
    <rect x="12" y="16" width="24" height="20" fill="white"/>
    <rect x="12" y="8" width="24" height="8" fill="#EA4335"/>
    <line x1="20" y1="8" x2="20" y2="4" stroke="#4285F4" strokeWidth="2"/>
    <line x1="28" y1="8" x2="28" y2="4" stroke="#4285F4" strokeWidth="2"/>
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 30a4 4 0 11-8 0 4 4 0 018 0zm4 0a4 4 0 014-4h12a4 4 0 010 8H22a4 4 0 01-4-4z" fill="#E01E5A"/>
    <path d="M18 14a4 4 0 110-8 4 4 0 010 8zm0 4a4 4 0 01-4 4H2a4 4 0 010-8h12a4 4 0 014 4z" fill="#36C5F0"/>
    <path d="M34 18a4 4 0 118 0 4 4 0 01-8 0zm-4 0a4 4 0 00-4 4v12a4 4 0 008 0V22a4 4 0 00-4-4z" fill="#2EB67D"/>
    <path d="M30 34a4 4 0 110 8 4 4 0 010-8zm0-4a4 4 0 004-4V14a4 4 0 00-8 0v12a4 4 0 004 4z" fill="#ECB22E"/>
  </svg>
);

const TeamsIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#5059C9"/>
    <circle cx="32" cy="16" r="6" fill="#7B83EB"/>
    <path d="M14 20h20v18H14V20z" fill="white"/>
    <circle cx="24" cy="14" r="4" fill="white"/>
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12h32v24H8V12z" fill="#F2F2F2"/>
    <path d="M8 12l16 12 16-12v4L24 28 8 16v-4z" fill="#EA4335"/>
    <path d="M8 12v4l16 12V16L8 12z" fill="#C5221F"/>
    <path d="M40 12v4L24 28V16l16-4z" fill="#F2F2F2"/>
  </svg>
);

const OutlookIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="24" height="32" rx="2" fill="#0078D4"/>
    <ellipse cx="16" cy="24" rx="8" ry="10" fill="white"/>
    <ellipse cx="16" cy="24" rx="4" ry="6" fill="#0078D4"/>
    <path d="M28 14h16v20H28V14z" fill="#0078D4" opacity="0.8"/>
  </svg>
);

const ChromeIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="#4285F4"/>
    <circle cx="24" cy="24" r="8" fill="white"/>
    <path d="M24 16l12 20H12l12-20z" fill="#EA4335"/>
    <path d="M36 24a12 12 0 01-12 12l6-10.4L36 24z" fill="#FBBC05"/>
    <path d="M12 24a12 12 0 0112-12l6 10.4L12 24z" fill="#34A853"/>
  </svg>
);

const FirefoxIcon = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="#FF6611"/>
    <circle cx="24" cy="24" r="16" fill="#FFBD4F"/>
    <path d="M24 8c-9 0-16 7-16 16s7 16 16 16c0-5.5-4-10-10-12 6-2 10-6.5 10-12" fill="#FF6611"/>
  </svg>
);

const brands = [
  { id: 'zoom', Icon: ZoomIcon },
  { id: 'salesforce', Icon: SalesforceIcon },
  { id: 'gcalendar', Icon: GoogleCalendarIcon },
  { id: 'slack', Icon: SlackIcon },
  { id: 'teams', Icon: TeamsIcon },
  { id: 'gmail', Icon: GmailIcon },
  { id: 'outlook', Icon: OutlookIcon },
  { id: 'chrome', Icon: ChromeIcon },
  { id: 'firefox', Icon: FirefoxIcon },
];

export default function Brands() {
  const t = useTranslations('brands');

  return (
    <section className="section brands-section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <h2 className="section-title">{t('title')}</h2>
          </div>
          <div className="section-header-right">
            <p className="section-description">{t('description')}</p>
          </div>
        </div>
        <div className="brands-grid">
          {brands.map((brand) => {
            const IconComponent = brand.Icon;
            return (
              <div key={brand.id} className="brand-card">
                <IconComponent />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
