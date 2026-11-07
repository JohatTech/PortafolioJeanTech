import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import { useLanguage } from '../context/useLanguage';
import { trackEvent } from '../utils/analytics';

export function ContactSection() {
  const { language } = useLanguage();
  const visibleEmail = SOCIAL_LINKS.email.replace(/^mailto:/i, '').split('?')[0];
  const copy = language === 'es' ? {
    kicker: 'SIGUIENTE PASO', title: '¿Hablamos de lo que necesitas construir?',
    intro: 'Si estás formando un equipo o tienes un producto que necesita avanzar, cuéntame el contexto y el objetivo.',
    recruiting: 'Para equipos de contratación', recruitingText: 'Experiencia, perfil y colaboración profesional.',
    freelance: 'Para proyectos freelance', freelanceText: 'Alcance, prioridades y el resultado que buscas.',
    email: 'Escribir por correo', profile: 'Ver perfil profesional',
  } : {
    kicker: 'NEXT STEP', title: 'Let’s talk about what you need to build.',
    intro: 'If you are building a team or have a product that needs to move forward, share the context and the outcome you need.',
    recruiting: 'For hiring teams', recruitingText: 'Background, fit, and professional collaboration.',
    freelance: 'For freelance projects', freelanceText: 'Scope, priorities, and the outcome you want.',
    email: 'Start an email', profile: 'View professional profile',
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <p className="section-kicker">{copy.kicker}</p>
      <h2 id="contact-title">{copy.title}</h2>
      <p className="contact-intro">{copy.intro}</p>
      <div className="contact-actions">
        <a className="contact-option" href={SOCIAL_LINKS.linkedin || SOCIAL_LINKS.email} target={SOCIAL_LINKS.linkedin ? '_blank' : undefined} rel={SOCIAL_LINKS.linkedin ? 'noopener noreferrer' : undefined} onClick={() => trackEvent('contact_click', { audience: 'recruiting', language })}>
          <BriefcaseBusiness size={19} />
          <span><strong>{copy.recruiting}</strong><small>{copy.recruitingText}</small></span>
          <ArrowUpRight size={16} />
        </a>
        <a className="contact-option contact-option-primary" href={SOCIAL_LINKS.email} onClick={() => trackEvent('contact_click', { audience: 'freelance', language })}>
          <Mail size={19} />
          <span><strong>{copy.freelance}</strong><small>{copy.freelanceText}</small></span>
          <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="contact-text-links">
        <a href={SOCIAL_LINKS.email}>{copy.email}: {visibleEmail}</a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">{copy.profile}</a>
      </div>
    </section>
  );
}

