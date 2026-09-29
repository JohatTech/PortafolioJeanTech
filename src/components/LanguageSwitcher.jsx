import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div 
      className="lang-switcher-capsule" 
      role="group" 
      aria-label={t.langSwitcher.ariaLabel}
    >
      <div className="lang-switcher-icon-wrap" aria-hidden="true">
        <Languages size={14} className="lang-globe-icon" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`lang-option-btn ${language === 'en' ? 'active' : ''}`}
        aria-pressed={language === 'en'}
        title={t.langSwitcher.englishTitle}
      >
        <span>EN</span>
      </button>

      <span className="lang-divider" aria-hidden="true">/</span>

      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={`lang-option-btn ${language === 'es' ? 'active' : ''}`}
        aria-pressed={language === 'es'}
        title={t.langSwitcher.spanishTitle}
      >
        <span>ES</span>
      </button>
    </div>
  );
}
