import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { getProjects } from './data/projects';
import { Header } from './components/Header';
import { PortfolioHero } from './components/PortfolioHero';
import { ProjectCard } from './components/ProjectCard';
import { EvidenceGallery } from './components/EvidenceGallery';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArticlePage } from './components/ArticlePage';
import { getArticleById, getArticleForProject, hasArticle } from './utils/articleEngine';
import { SOCIAL_LINKS } from './data/socials';
import { trackEvent } from './utils/analytics';
import { useLanguage } from './context/useLanguage';

const FEATURED_PROJECT_IDS = ['sirifruit', 'nara-operations', 'enterprise-vision-suite'];

function readRoute() {
  const projectMatch = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
  if (projectMatch) return { type: 'project', id: decodeURIComponent(projectMatch[1]) };
  const articleMatch = window.location.hash.match(/^#(?:article|case-study)\/(.+)$/);
  if (articleMatch) return { type: 'project', id: decodeURIComponent(articleMatch[1]) };
  return { type: 'home', id: null };
}

function setMeta(name, content, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    if (property) element.setAttribute('property', name);
    else element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function ProjectDetailPage({ project, onBack, language }) {
  const isSpanish = language === 'es';
  const architecture = Object.entries(project.architecture || {});
  const highlights = project.highlights || [];
  return (
    <main id="main-content" className="detail-page">
      <a className="back-link" href="/#work" onClick={(event) => { event.preventDefault(); onBack(); }}><ArrowLeft size={16} />{isSpanish ? 'Volver a proyectos' : 'Back to projects'}</a>
      <header className="detail-header">
        <p className="section-kicker">{project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.tagline}</p>
      </header>
      <EvidenceGallery project={project} />
      <section className="detail-section">
        <p className="section-kicker">{isSpanish ? 'RESUMEN' : 'OVERVIEW'}</p>
        <h2>{isSpanish ? 'El problema y la solución' : 'The problem and solution'}</h2>
        <p>{project.description}</p>
      </section>
      {architecture.length > 0 && <section className="detail-section">
        <p className="section-kicker">{isSpanish ? 'DECISIONES TÉCNICAS' : 'TECHNICAL APPROACH'}</p>
        <div className="detail-architecture-grid">{architecture.map(([title, description]) => <article className="detail-architecture-card" key={title}><h3>{title.replace(/([A-Z])/g, ' $1').replace(/[-_]/g, ' ')}</h3><p>{description}</p></article>)}</div>
      </section>}
      {highlights.length > 0 && <section className="detail-section">
        <p className="section-kicker">{isSpanish ? 'ALCANCE' : 'DELIVERED CAPABILITIES'}</p>
        <ul className="detail-highlights">{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>}
      <section className="detail-section">
        <p className="section-kicker">{isSpanish ? 'TECNOLOGÍAS' : 'TECHNOLOGIES'}</p>
        <ul className="project-tech-list detail-tech-list">{project.techStack.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <section className="detail-contact-strip"><div><h2>{isSpanish ? '¿Tienes un reto parecido?' : 'Working on a similar problem?'}</h2><p>{isSpanish ? 'Conversemos sobre el usuario, el alcance y el resultado esperado.' : 'Let’s talk about the user, scope, and outcome you need.'}</p></div><a className="button button-primary" href={SOCIAL_LINKS.email}>{isSpanish ? 'Hablemos' : 'Let’s talk'}<ArrowUpRight size={16} /></a></section>
    </main>
  );
}

function NotFound({ onBack, language }) {
  const isSpanish = language === 'es';
  return <main id="main-content" className="not-found-page"><p className="section-kicker">404</p><h1>{isSpanish ? 'No encontramos ese proyecto.' : 'We couldn’t find that project.'}</h1><a className="button button-primary" href="/#work" onClick={(event) => { event.preventDefault(); onBack(); }}><ArrowLeft size={16} />{isSpanish ? 'Volver a proyectos' : 'Back to projects'}</a></main>;
}

export function App() {
  const { language } = useLanguage();
  const [route, setRoute] = useState(readRoute);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [filterCategory, setFilterCategory] = useState('ALL');
  const [query, setQuery] = useState('');
  const isSpanish = language === 'es';
  const projects = useMemo(() => [...getProjects(language)].sort((a, b) => (b.priority || 0) - (a.priority || 0)), [language]);
  const project = route.type === 'project' ? projects.find((item) => item.id === route.id) : null;
  const article = project && hasArticle(project.id) ? getArticleForProject(project.id, language) || getArticleById(project.id, language) : null;
  const selectedProjects = FEATURED_PROJECT_IDS.map((id) => projects.find((item) => item.id === id)).filter(Boolean);
  const remainingProjects = projects.filter((item) => !FEATURED_PROJECT_IDS.includes(item.id));
  const categories = [
    ['ALL', isSpanish ? 'Todos' : 'All'],
    ['NLP & LLM Agents', isSpanish ? 'IA y agentes' : 'AI & agents'],
    ['Computer Vision & Edge', isSpanish ? 'Visión computacional' : 'Computer vision'],
    ['Geospatial & 3D Analytics', isSpanish ? 'Geoespacial y 3D' : 'Geospatial & 3D'],
    ['MLOps & Data Engine', isSpanish ? 'Datos y MLOps' : 'Data & MLOps'],
    ['Full-Stack Business Apps', isSpanish ? 'Software de negocio' : 'Business software'],
  ];

  const handleRouteChange = useCallback(() => setRoute(readRoute()), []);
  useEffect(() => {
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, [handleRouteChange]);

  const openProject = (id) => {
    const hasCaseStudy = hasArticle(id);
    trackEvent(hasCaseStudy ? 'view_case_study' : 'view_project', { project_id: id, language });
    const url = `/projects/${encodeURIComponent(id)}`;
    window.history.pushState({}, '', url);
    setRoute({ type: 'project', id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const backToHome = () => {
    window.history.pushState({}, '', '/#work');
    setRoute({ type: 'home', id: null });
    requestAnimationFrame(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }));
  };
  const navigateToSection = (sectionId) => {
    window.history.pushState({}, '', `/#${sectionId}`);
    setRoute({ type: 'home', id: null });
    requestAnimationFrame(() => requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })));
  };

  useEffect(() => {
    document.documentElement.lang = language;
    const title = project
      ? `${article?.title || project.title} · Johat Abrego`
      : (language === 'es' ? 'Johat Abrego · Full-stack e IA aplicada' : 'Johat Abrego · Full-stack & applied AI engineer');
    const description = project
      ? (article?.subtitle || project.description)
      : (language === 'es'
        ? 'Ingeniería de producto, aplicaciones web y móviles, flujos de negocio e IA aplicada.'
        : 'Product engineering, web and mobile applications, business workflows, and applied AI.');
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', project ? 'article' : 'website', true);
    setMeta('og:url', window.location.href, true);
    setMeta('twitter:card', 'summary', false);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${project ? `/projects/${encodeURIComponent(project.id)}` : '/'}`;
  }, [article, language, project]);

  const visibleProjects = remainingProjects.filter((item) => {
    const category = item.category.toLowerCase();
    let matchesCategory = filterCategory === 'ALL';
    if (filterCategory === 'NLP & LLM Agents') matchesCategory = /nlp|llm|agent|agente/i.test(category);
    if (filterCategory === 'Computer Vision & Edge') matchesCategory = /vision|visión|edge|thermal|vector/i.test(category);
    if (filterCategory === 'Geospatial & 3D Analytics') matchesCategory = /geo|3d|spatial|lidar/i.test(category);
    if (filterCategory === 'MLOps & Data Engine') matchesCategory = /mlops|data|datos|cloud|etl/i.test(category);
    if (filterCategory === 'Full-Stack Business Apps') matchesCategory = /full-stack|full stack|aplicaciones de negocio/i.test(category);
    const searchable = `${item.title} ${item.tagline} ${item.description} ${item.techStack.join(' ')}`.toLowerCase();
    return matchesCategory && searchable.includes(query.trim().toLowerCase());
  });

  if (route.type === 'project') {
    const page = !project ? <NotFound onBack={backToHome} language={language} /> : article
      ? <ArticlePage article={article} project={project} onBack={backToHome} />
      : <ProjectDetailPage project={project} onBack={backToHome} language={language} />;
    return <div className="site-shell"><a className="skip-link" href="#main-content">{isSpanish ? 'Saltar al contenido' : 'Skip to content'}</a><Header onNavigateSection={navigateToSection} /><div className="page-wrap">{page}</div><Footer /></div>;
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{isSpanish ? 'Saltar al contenido' : 'Skip to content'}</a>
      <Header onNavigateSection={navigateToSection} />
      <div className="page-wrap">
        <PortfolioHero />
        <main id="main-content">
          <section className="content-section selected-work-section" id="work" aria-labelledby="work-title">
            <div className="section-heading-block section-heading-row">
              <div><p className="section-kicker">{isSpanish ? 'TRABAJO SELECCIONADO' : 'SELECTED WORK'}</p><h2 id="work-title">{isSpanish ? 'Productos para problemas reales' : 'Products built around real problems'}</h2></div>
              <p>{isSpanish ? 'Explora el problema, el flujo del producto y las decisiones técnicas.' : 'Explore the user problem, product workflow, and engineering decisions.'}</p>
            </div>
            <div className="featured-project-grid">{selectedProjects.map((item) => <ProjectCard key={item.id} project={item} featured onOpenProject={openProject} />)}</div>
          </section>

          <section className="project-catalog-section" aria-labelledby="catalog-title">
            <div className="catalog-heading">
              <div><p className="section-kicker">{isSpanish ? 'CATÁLOGO' : 'PROJECT CATALOG'}</p><h2 id="catalog-title">{isSpanish ? 'Más proyectos' : 'More projects'}</h2></div>
              <button className="button button-secondary" type="button" aria-expanded={showAllProjects} aria-controls="additional-projects" onClick={() => setShowAllProjects(!showAllProjects)}>{showAllProjects ? (isSpanish ? 'Mostrar menos' : 'Show fewer') : (isSpanish ? `Explorar ${remainingProjects.length} proyectos más` : `Explore ${remainingProjects.length} more projects`)}<ArrowRight size={16} /></button>
            </div>
            {showAllProjects && <div id="additional-projects">
              <div className="catalog-controls">
                <label className="project-search-label" htmlFor="project-search">{isSpanish ? 'Buscar por proyecto o tecnología' : 'Search projects or technologies'}</label>
                <input id="project-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={isSpanish ? 'Ej. FastAPI, visión, geoespacial' : 'e.g. FastAPI, vision, geospatial'} />
                <div className="category-filter-bar" role="group" aria-label={isSpanish ? 'Filtrar proyectos por categoría' : 'Filter projects by category'}>
                  {categories.map(([key, label]) => <button type="button" key={key} aria-pressed={filterCategory === key} onClick={() => { setFilterCategory(key); trackEvent('filter_projects', { category: key, language }); }} className={`category-filter ${filterCategory === key ? 'is-active' : ''}`}>{label}</button>)}
                </div>
              </div>
              {visibleProjects.length > 0 ? <div className="catalog-project-grid">{visibleProjects.map((item) => <ProjectCard key={item.id} project={item} onOpenProject={openProject} />)}</div> : <p className="empty-results">{isSpanish ? 'No hay proyectos que coincidan con esa búsqueda.' : 'No projects match that search.'}</p>}
            </div>}
          </section>

          <ServicesSection />
          <div id="capabilities"><SkillsMatrix /></div>
          <section className="about-section" id="about" aria-labelledby="about-title">
            <div><p className="section-kicker">{isSpanish ? 'CÓMO TRABAJO' : 'HOW I WORK'}</p><h2 id="about-title">{isSpanish ? 'Del problema al producto que se puede usar y mantener.' : 'From a problem to software people can use and maintain.'}</h2></div>
            <div className="about-copy"><p>{isSpanish ? 'Empiezo por entender quién usará el producto y qué tarea necesita resolver. Después conecto interfaz, reglas de negocio, datos e integraciones en una solución que el equipo pueda operar y evolucionar.' : 'I start by understanding who will use the product and what they need to get done. Then I connect interface, business rules, data, and integrations into a solution a team can operate and extend.'}</p><p>{isSpanish ? 'Me interesa el trabajo colaborativo, la comunicación clara y entregar incrementos que se puedan revisar durante el desarrollo.' : 'I value collaborative work, clear communication, and delivering increments that can be reviewed throughout development.'}</p></div>
          </section>
          <ContactSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
