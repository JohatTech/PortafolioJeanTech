import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import officialLogo from '../assets/official_logo.png';
import { useLanguage } from '../context/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header({ onNavigateSection }) {
  const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const isSpanish = language === 'es';
  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);
  const links = [
    ['work', isSpanish ? 'Proyectos' : 'Work'],
    ['services', isSpanish ? 'Servicios' : 'Services'],
    ['capabilities', isSpanish ? 'Capacidades' : 'Capabilities'],
    ['about', isSpanish ? 'Perfil' : 'About'],
  ];
  const navigate = (event, sectionId) => {
    setMenuOpen(false);
    if (onNavigateSection) {
      event.preventDefault();
      onNavigateSection(sectionId);
    }
  };

  return (
    <header className="site-header">
      <a className="site-brand brand-logo" href="/" aria-label="Johat Abrego home">
        <span className="brand-logo-frame"><img className="brand-logo-img" src={officialLogo} alt="" /></span>
        <span className="brand-text"><span className="brand-name">{isSpanish ? 'JOHAT ABREGO' : 'JOHAT ABREGO'}</span><span className="brand-role">{isSpanish ? 'INGENIERO FULL-STACK' : 'FULL-STACK ML ENGINEER'}</span></span>
      </a>
      <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? (isSpanish ? 'Cerrar menú' : 'Close menu') : (isSpanish ? 'Abrir menú' : 'Open menu')} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav id="primary-navigation" className={`primary-navigation ${menuOpen ? 'is-open' : ''}`} aria-label={isSpanish ? 'Navegación principal' : 'Primary navigation'}>
        {links.map(([sectionId, label]) => <a href={`/#${sectionId}`} key={sectionId} onClick={(event) => navigate(event, sectionId)}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <LanguageSwitcher />
        <a className="header-contact-link" href="/#contact" onClick={(event) => navigate(event, 'contact')}>{isSpanish ? 'Hablemos' : 'Let’s talk'}<ArrowUpRight size={15} /></a>
      </div>
    </header>
  );
}

