import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import { useLanguage } from '../context/useLanguage';

export function Footer() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div><a href="/" className="footer-name">Johat Abrego<span>.</span></a><p>{isSpanish ? 'Full-stack · Aplicaciones · IA aplicada' : 'Full-stack · Applications · Applied AI'}</p></div>
        <nav className="footer-links" aria-label={isSpanish ? 'Enlaces profesionales' : 'Professional links'}>
          {SOCIAL_LINKS.linkedin && <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"><span className="footer-link-mark">in</span>LinkedIn<ArrowUpRight size={12} /></a>}
          {SOCIAL_LINKS.github && <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"><span className="footer-link-mark">GH</span>GitHub<ArrowUpRight size={12} /></a>}
          <a href={SOCIAL_LINKS.email}><Mail size={15} />Email</a>
        </nav>
      </div>
      <div className="footer-legal"><span>© {new Date().getFullYear()} Johat Abrego</span><span>{isSpanish ? 'Detalles de proyectos compartidos con el cuidado de la confidencialidad.' : 'Project details are shared with confidentiality in mind.'}</span></div>
    </footer>
  );
}
