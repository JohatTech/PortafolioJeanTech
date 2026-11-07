import React from 'react';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import { useLanguage } from '../context/useLanguage';

export function PortfolioHero() {
  const { language } = useLanguage();
  const copy = language === 'es' ? {
    eyebrow: 'INGENIERÍA DE PRODUCTO · IA APLICADA · FULL-STACK',
    greeting: 'Hola, soy',
    title: 'Construyo software que convierte necesidades reales en productos útiles.',
    body: 'Desarrollo aplicaciones web y móviles, flujos de negocio y soluciones de IA aplicada. Puedo integrarme a un equipo de producto o acompañar un proyecto freelance desde el alcance hasta la entrega.',
    projects: 'Ver proyectos destacados',
    hire: 'Perfil profesional',
    email: 'Escríbeme',
    availability: 'Disponible para roles de ingeniería y proyectos freelance',
    location: 'Remoto · Panamá',
  } : {
    eyebrow: 'PRODUCT ENGINEERING · APPLIED AI · FULL-STACK',
    greeting: "Hi, I'm",
    title: 'I build software that turns real needs into useful products.',
    body: 'I develop web and mobile applications, business workflows, and applied AI solutions. I can join a product team or help deliver a freelance project from scope through handoff.',
    projects: 'Explore selected work',
    hire: 'Professional profile',
    email: 'Email me',
    availability: 'Open to engineering roles and freelance projects',
    location: 'Remote · Panama',
  };

  return (
    <section className="portfolio-hero" aria-labelledby="hero-title">
      <div className="hero-copy-block">
        <div className="hero-eyebrow"><span className="availability-dot" />{copy.eyebrow}</div>
        <p className="hero-greeting">{copy.greeting} <strong>Johat Abrego</strong></p>
        <h1 id="hero-title">{copy.title}</h1>
        <p className="hero-intro">{copy.body}</p>
        <p className="hero-availability">{copy.availability} <span>· {copy.location}</span></p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">{copy.projects}<ArrowDown size={16} /></a>
          {SOCIAL_LINKS.linkedin && <a className="button button-secondary" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">{copy.hire}<ArrowUpRight size={16} /></a>}
          <a className="hero-email-link" href={SOCIAL_LINKS.email}><Mail size={16} />{copy.email}</a>
        </div>
      </div>
      <div className="hero-side-note" aria-hidden="true">
        <span className="hero-orbit orbit-one" />
        <span className="hero-orbit orbit-two" />
        <span className="hero-mark">JA<span>.</span></span>
        <span className="hero-side-caption">Software · Data · AI</span>
      </div>
    </section>
  );
}

