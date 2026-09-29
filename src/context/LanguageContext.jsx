import React, { useState, useEffect } from 'react';
import { UI_TRANSLATIONS } from '../data/translations';
import { LanguageContext } from './languageContextInstance';

const STORAGE_KEY = 'portafolio_lang';

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY);
      if (savedLang === 'es' || savedLang === 'en') {
        return savedLang;
      }
      // Check browser language preference
      if (typeof navigator !== 'undefined' && navigator.language) {
        if (navigator.language.toLowerCase().startsWith('es')) {
          return 'es';
        }
      }
    } catch {
      // Ignore localStorage access errors
    }
    return 'en';
  });

  const setLanguage = (lang) => {
    const targetLang = lang === 'es' ? 'es' : 'en';
    setLanguageState(targetLang);
    try {
      localStorage.setItem(STORAGE_KEY, targetLang);
    } catch {
      // Ignore localStorage access errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isSpanish: language === 'es',
    isEnglish: language === 'en',
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
