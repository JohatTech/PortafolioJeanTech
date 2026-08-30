import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import officialLogo from '../assets/official_logo.png';

export function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-brand-section">
        <div className="footer-brand-header">
          <div className="footer-logo-frame">
            <img src={officialLogo} alt="Johat Abrego Logo" className="footer-logo-img" />
          </div>
          <div>
            <div className="footer-brand-name">JOHAT ABREGO</div>
            <div className="footer-brand-desc">Full-Stack Machine Learning Engineer</div>
          </div>
        </div>
        <p className="footer-summary-note">
          Engineering production-grade AI systems, real-time vision pipelines, and resilient cloud & web architectures.
        </p>
      </div>

      <div className="footer-links-section">
        <div className="footer-links-title">Connect & Explore</div>
        <div className="footer-links-row">
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-link"
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={13} />
          </a>

          {SOCIAL_LINKS.medium && (
            <a 
              href={SOCIAL_LINKS.medium} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
            >
              <span>Medium Articles</span>
              <ArrowUpRight size={13} />
            </a>
          )}

          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-link"
          >
            <span>GitHub Code</span>
            <ArrowUpRight size={13} />
          </a>

          <a 
            href={SOCIAL_LINKS.email} 
            className="footer-social-link"
          >
            <span>Email</span>
            <Mail size={13} />
          </a>
        </div>
      </div>

      <div className="footer-bottom-row">
        <span>© {new Date().getFullYear()} JOHAT ABREGO. ALL RIGHTS RESERVED.</span>
        <span className="footer-ip-note">PROJECT NAMES & METRICS SANITIZED FOR IP PROTECTION</span>
      </div>
    </footer>
  );
}
