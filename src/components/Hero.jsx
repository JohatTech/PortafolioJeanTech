import React from 'react';
import { 
  Mail, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Brain, 
  Zap, 
  Terminal, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import officialLogo from '../assets/official_logo.png';
import { useLanguage } from '../context/useLanguage';

export function Hero() {
  const { t } = useLanguage();

  const valueIcons = [
    <CheckCircle2 key="check" size={20} className="value-icon-cyan" />,
    <Brain key="brain" size={20} className="value-icon-violet" />,
    <Zap key="zap" size={20} className="value-icon-cyan" />,
    <Terminal key="terminal" size={20} className="value-icon-violet" />
  ];

  return (
    <section className="hero-section">
      {/* Upper Grid: Left Narrative + Right Social Hub & Logo */}
      <div className="hero-main-grid">
        
        {/* Left Column: Developer Story & Core Value Proposition */}
        <div className="hero-narrative">
          <div className="hero-status-pill">
            <span className="pill-dot"></span>
            <span>{t.hero.statusPill}</span>
          </div>
          
          <h1 className="hero-main-title">
            {t.hero.greetingPrefix} <span className="hero-highlight-gradient">Johat Abrego</span>
          </h1>

          <h2 className="hero-subtitle">
            {t.hero.subtitle}
          </h2>

          <p className="hero-subtext">
            {t.hero.subtext}
          </p>

          {/* Scannable Skill Highlight Badges */}
          <div className="hero-skill-badges">
            <span className="skill-badge">
              <Brain size={14} className="badge-icon badge-icon-violet" />
              <span>{t.hero.skillBadges.rag}</span>
            </span>
            <span className="skill-badge">
              <Zap size={14} className="badge-icon badge-icon-cyan" />
              <span>{t.hero.skillBadges.cv}</span>
            </span>
            <span className="skill-badge">
              <Terminal size={14} className="badge-icon badge-icon-violet" />
              <span>{t.hero.skillBadges.web}</span>
            </span>
            <span className="skill-badge">
              <Layers size={14} className="badge-icon badge-icon-cyan" />
              <span>{t.hero.skillBadges.spatial}</span>
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="hero-actions-row">
            <a href="#projects" className="hero-primary-btn">
              <Sparkles size={16} />
              <span>{t.hero.exploreBtn}</span>
              <ArrowRight size={16} className="btn-arrow" />
            </a>

            <a href={SOCIAL_LINKS.email} className="hero-secondary-btn">
              <Mail size={16} />
              <span>{t.hero.contactBtn}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Official Logo Showcase + Prominent Social Media Hub */}
        <div className="hero-brand-card">
          <div className="brand-showcase-header">
            <div className="logo-halo-container">
              <div className="logo-halo-glow"></div>
              <div className="logo-frame">
                <img 
                  src={officialLogo} 
                  alt="Johat Abrego - Laptop Brain Official Logo" 
                  className="official-brand-logo"
                />
              </div>
            </div>
            <div className="brand-identity-meta">
              <div className="brand-identity-name">{t.hero.brandCard.name}</div>
              <div className="brand-identity-tag">{t.hero.brandCard.tag}</div>
              <div className="brand-location-badge">{t.hero.brandCard.location}</div>
            </div>
          </div>

          <div className="social-hub-divider">
            <span>{t.hero.brandCard.socialHubTitle}</span>
          </div>

          {/* Prominent, Fully-Readable Social Profile Cards */}
          <div className="social-profiles-grid">
            {/* LinkedIn Profile */}
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-profile-card linkedin-card"
              title={t.hero.brandCard.linkedin.title}
            >
              <div className="social-card-icon-wrap linkedin-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div className="social-card-text">
                <div className="social-card-label">{t.hero.brandCard.linkedin.label}</div>
                <div className="social-card-desc">{t.hero.brandCard.linkedin.desc}</div>
              </div>
              <ExternalLink size={15} className="social-card-arrow" />
            </a>

            {/* Medium / Tech & Space Exploration Articles */}
            {SOCIAL_LINKS.medium && (
              <a 
                href={SOCIAL_LINKS.medium} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-profile-card medium-card"
                title={t.hero.brandCard.medium.title}
              >
                <div className="social-card-icon-wrap medium-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </div>
                <div className="social-card-text">
                  <div className="social-card-label">{t.hero.brandCard.medium.label}</div>
                  <div className="social-card-desc">{t.hero.brandCard.medium.desc}</div>
                </div>
                <ExternalLink size={15} className="social-card-arrow" />
              </a>
            )}

            {/* GitHub Profile */}
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-profile-card github-card"
              title={t.hero.brandCard.github.title}
            >
              <div className="social-card-icon-wrap github-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </div>
              <div className="social-card-text">
                <div className="social-card-label">{t.hero.brandCard.github.label}</div>
                <div className="social-card-desc">{t.hero.brandCard.github.desc}</div>
              </div>
              <ExternalLink size={15} className="social-card-arrow" />
            </a>

            {/* Direct Email */}
            <a 
              href={SOCIAL_LINKS.email} 
              className="social-profile-card email-card"
              title={t.hero.brandCard.email.title}
            >
              <div className="social-card-icon-wrap email-icon-wrap">
                <Mail size={20} />
              </div>
              <div className="social-card-text">
                <div className="social-card-label">{t.hero.brandCard.email.label}</div>
                <div className="social-card-desc">johat.abrego24@gmail.com</div>
              </div>
              <ArrowRight size={15} className="social-card-arrow" />
            </a>
          </div>
        </div>
      </div>

      {/* Numerical Stats Row */}
      <div className="hero-stats-strip">
        <div className="hero-stat-box">
          <div className="stat-value-highlight">{t.hero.stats.stat1.val}</div>
          <div className="stat-label-title">{t.hero.stats.stat1.label}</div>
          <div className="stat-subdetail">{t.hero.stats.stat1.sub}</div>
        </div>
        <div className="hero-stat-box">
          <div className="stat-value-highlight">{t.hero.stats.stat2.val}</div>
          <div className="stat-label-title">{t.hero.stats.stat2.label}</div>
          <div className="stat-subdetail">{t.hero.stats.stat2.sub}</div>
        </div>
        <div className="hero-stat-box">
          <div className="stat-value-highlight">{t.hero.stats.stat3.val}</div>
          <div className="stat-label-title">{t.hero.stats.stat3.label}</div>
          <div className="stat-subdetail">{t.hero.stats.stat3.sub}</div>
        </div>
        <div className="hero-stat-box">
          <div className="stat-value-highlight">{t.hero.stats.stat4.val}</div>
          <div className="stat-label-title">{t.hero.stats.stat4.label}</div>
          <div className="stat-subdetail">{t.hero.stats.stat4.sub}</div>
        </div>
      </div>

      {/* "What I Bring To Your Team" - 4-Column Feature Grid */}
      <div className="hero-value-section">
        <div className="value-section-header">
          <span className="value-mini-label">{t.hero.valueSection.miniLabel}</span>
          <h3 className="value-section-title">{t.hero.valueSection.title}</h3>
        </div>

        <div className="hero-value-grid">
          {t.hero.valueSection.cards.map((card, idx) => (
            <div className="value-card" key={idx}>
              <div className="value-card-icon-halo">
                {valueIcons[idx % valueIcons.length]}
              </div>
              <h4 className="value-card-title">{card.title}</h4>
              <p className="value-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
