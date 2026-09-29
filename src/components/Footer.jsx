import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import officialLogo from '../assets/official_logo.png';
import { useLanguage } from '../context/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer-bar">
      <div className="footer-brand-section">
        <div className="footer-brand-header">
          <div className="footer-logo-frame">
            <img src={officialLogo} alt="Johat Abrego Logo" className="footer-logo-img" />
          </div>
          <div>
            <div className="footer-brand-name">{t.brand.name}</div>
            <div className="footer-brand-desc">{t.footer.brandDesc}</div>
          </div>
        </div>
        <p className="footer-summary-note">
          {t.footer.summaryNote}
        </p>
      </div>

      <div className="footer-links-section">
        <div className="footer-links-title">{t.footer.connectTitle}</div>
        <div className="footer-links-row">
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-link"
          >
            <span>{t.footer.links.linkedin}</span>
            <ArrowUpRight size={13} />
          </a>

          {SOCIAL_LINKS.medium && (
            <a 
              href={SOCIAL_LINKS.medium} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
            >
              <span>{t.footer.links.medium}</span>
              <ArrowUpRight size={13} />
            </a>
          )}

          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-link"
          >
            <span>{t.footer.links.github}</span>
            <ArrowUpRight size={13} />
          </a>

          <a 
            href={SOCIAL_LINKS.email} 
            className="footer-social-link"
          >
            <span>{t.footer.links.email}</span>
            <Mail size={13} />
          </a>
        </div>
      </div>

      <div className="footer-bottom-row">
        <span>© {new Date().getFullYear()} JOHAT ABREGO. {t.footer.allRights}</span>
        <span className="footer-ip-note">{t.footer.ipNote}</span>
      </div>
    </footer>
  );
}
