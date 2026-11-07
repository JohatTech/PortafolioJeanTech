import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { hasArticle } from '../utils/articleEngine';
import { EvidenceGallery } from './EvidenceGallery';
import { useLanguage } from '../context/useLanguage';

export function ProjectCard({ project, onOpenProject, featured = false }) {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const articleAvailable = hasArticle(project.id);

  return (
    <article className={`project-card ${featured ? 'project-card-featured' : ''}`}>
      <EvidenceGallery project={project} compact={!featured} />
      <div className="project-card-content">
        <div className="project-card-topline">
          <span className="project-category">{project.category}</span>
          {featured && <span className="selected-label">{isSpanish ? 'SELECCIONADO' : 'SELECTED'}</span>}
        </div>
        <h3>{project.title}</h3>
        <p className="project-card-tagline">{project.tagline}</p>
        <p className="project-card-description">{project.description}</p>
        <ul className="project-tech-list" aria-label={isSpanish ? 'Tecnologías principales' : 'Key technologies'}>
          {project.techStack.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
        <div className="project-card-actions">
          <a href={`/projects/${encodeURIComponent(project.id)}`} onClick={(event) => { event.preventDefault(); onOpenProject(project.id); }} className="project-detail-link">
            {isSpanish ? 'Ver proyecto' : 'View project'} <ArrowRight size={16} />
          </a>
          {articleAvailable && <a className="project-case-link" href={`/projects/${encodeURIComponent(project.id)}`} onClick={(event) => { event.preventDefault(); onOpenProject(project.id); }}><BookOpen size={15} />{isSpanish ? 'Estudio de caso' : 'Case study'}</a>}
        </div>
      </div>
    </article>
  );
}
