import React from 'react';
import { Mail, FolderGit2, Cpu, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import officialLogo from '../assets/official_logo.png';

export function Header() {
  return (
    <header className="header-bar">
      <a href="#" className="brand-logo" aria-label="Johat Abrego Home">
        <div className="brand-logo-frame">
          <img 
            src={officialLogo} 
            alt="Johat Abrego Logo" 
            className="brand-logo-img" 
          />
        </div>
        <div className="brand-text">
          <span className="brand-name">JOHAT ABREGO</span>
          <span className="brand-role">FULL-STACK ML ENGINEER</span>
        </div>
      </a>

      <nav className="nav-links">
        <a href="#projects" className="nav-link">
          <FolderGit2 size={15} />
          <span>Projects</span>
        </a>
        <a href="#skills" className="nav-link">
          <Cpu size={15} />
          <span>Competencies</span>
        </a>
        {SOCIAL_LINKS.medium && (
          <a 
            href={SOCIAL_LINKS.medium} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link"
          >
            <span>Articles</span>
            <ArrowUpRight size={13} className="nav-external-icon" />
          </a>
        )}
      </nav>

      <div className="sys-telemetry">
        <div className="status-chip-live">
          <span className="status-dot-pulse"></span>
          <span>OPEN TO ROLES</span>
        </div>
        <a 
          href={SOCIAL_LINKS.email} 
          className="header-cta-btn" 
        >
          <Mail size={14} />
          <span>Get in Touch</span>
        </a>
      </div>
    </header>
  );
}
