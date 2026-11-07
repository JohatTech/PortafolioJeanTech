import React from 'react';
import { Blocks, BrainCircuit, CloudCog, Workflow } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

const icons = [Blocks, BrainCircuit, Workflow, CloudCog];

export function ServicesSection() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const cards = isSpanish ? [
    ['Productos web y móviles', 'Aplicaciones multiplataforma con flujos claros, datos conectados y una experiencia coherente entre dispositivos.'],
    ['IA aplicada y visión computacional', 'Reconocimiento visual y automatización con revisión humana cuando el resultado necesita criterio.'],
    ['Backend y reglas de negocio', 'APIs, modelos de datos y validaciones para operaciones fiables, mantenibles y fáciles de ampliar.'],
    ['Integraciones y evolución de producto', 'Conexión de calendarios, almacenamiento y servicios externos; mejoras enfocadas en necesidades concretas.'],
  ] : [
    ['Web and mobile products', 'Cross-platform applications with clear workflows, connected data, and a consistent experience across devices.'],
    ['Applied AI and computer vision', 'Visual recognition and automation with human review when a result needs judgment.'],
    ['Backend and business rules', 'APIs, data models, and validation for reliable operations that are easier to maintain and extend.'],
    ['Integrations and product improvement', 'Calendar, storage, and service integrations; focused improvements tied to real needs.'],
  ];
  const heading = isSpanish ? 'En qué puedo ayudar' : 'Ways I can help';
  const intro = isSpanish
    ? 'Capacidades respaldadas por los productos y flujos de trabajo de esta selección.'
    : 'Capabilities grounded in the products and workflows shown in this portfolio.';

  return (
    <section className="content-section services-section" id="services" aria-labelledby="services-title">
      <div className="section-heading-block">
        <p className="section-kicker">{isSpanish ? 'SERVICIOS' : 'SERVICES'}</p>
        <h2 id="services-title">{heading}</h2>
        <p>{intro}</p>
      </div>
      <div className="services-grid">
        {cards.map(([title, description], index) => {
          const Icon = icons[index];
          return <article className="service-card" key={title}>
            <span className="service-icon"><Icon size={20} /></span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>;
        })}
      </div>
    </section>
  );
}

