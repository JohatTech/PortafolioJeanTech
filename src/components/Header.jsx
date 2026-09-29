import React from 'react';
import { Mail, FolderGit2, Cpu, ArrowUpRight, BookOpen } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import officialLogo from '../assets/official_logo.png';
import { getAllArticles } from '../utils/articleEngine';
import { useLanguage } from '../context/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header({ onNavigateHome, onOpenArticle, currentView }) {
  const { language, t } = useLanguage();
  const articles = getAllArticles(language);
  const featuredArticle = articles[0] || null;

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) onNavigateHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) onNavigateHome();
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleSkillsClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) onNavigateHome();
    setTimeout(() => {
      const el = document.getElementById('skills');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleCaseStudyClick = (e) => {
    if (featuredArticle && onOpenArticle) {
      e.preventDefault();
      onOpenArticle(featuredArticle.id);
    }
  };

  return (
    <header className="header-bar">
      <a href="#" onClick={handleLogoClick} className="brand-logo" aria-label="Johat Abrego Home">
        <div className="brand-logo-frame">
          <img 
            src={officialLogo} 
            alt="Johat Abrego Logo" 
            className="brand-logo-img" 
          />
        </div>
        <div className="brand-text">
          <span className="brand-name">{t.brand.name}</span>
          <span className="brand-role">{t.brand.role}</span>
        </div>
      </a>

      <nav className="nav-links">
        <a href="#projects" onClick={handleProjectsClick} className={`nav-link ${currentView === 'home' ? 'active-nav-item' : ''}`}>
          <FolderGit2 size={15} />
          <span>{t.nav.projects}</span>
        </a>
        <a href="#skills" onClick={handleSkillsClick} className="nav-link">
          <Cpu size={15} />
          <span>{t.nav.competencies}</span>
        </a>
        {featuredArticle ? (
          <a 
            href={`#article/${featuredArticle.id}`} 
            onClick={handleCaseStudyClick}
            className={`nav-link ${currentView === 'article' ? 'active-nav-item' : ''}`}
          >
            <BookOpen size={15} />
            <span>{t.nav.caseStudies}</span>
          </a>
        ) : SOCIAL_LINKS.medium ? (
          <a 
            href={SOCIAL_LINKS.medium} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link"
          >
            <span>{t.nav.articles}</span>
            <ArrowUpRight size={13} className="nav-external-icon" />
          </a>
        ) : null}
      </nav>

      <div className="sys-telemetry">
        <LanguageSwitcher />

        <div className="status-chip-live">
          <span className="status-dot-pulse"></span>
          <span>{t.nav.openToRoles}</span>
        </div>

        <a 
          href={SOCIAL_LINKS.email} 
          className="header-cta-btn" 
        >
          <Mail size={14} />
          <span>{t.nav.getInTouch}</span>
        </a>
      </div>
    </header>
  );
}

