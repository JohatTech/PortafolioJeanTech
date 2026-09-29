import React from 'react';
import { ArrowUpRight, BookOpen, Sparkles } from 'lucide-react';
import { hasArticle } from '../utils/articleEngine';
import { useLanguage } from '../context/useLanguage';

export function ProjectCard({ project, onSelect, onOpenArticle }) {
  const { t } = useLanguage();
  const articleAvailable = hasArticle(project.id);

  const handleCardClick = () => {
    if (articleAvailable && onOpenArticle) {
      onSelect(project);
    } else {
      onSelect(project);
    }
  };

  const handleArticleBtnClick = (e) => {
    e.stopPropagation();
    if (onOpenArticle) {
      onOpenArticle(project.id);
    }
  };

  return (
    <div 
      className={`project-panel ${project.featured ? 'featured-panel' : ''}`}
      onClick={handleCardClick}
    >
      <div className="card-top">
        <div className="card-meta">
          <span className="micro-label" style={{ fontSize: '0.68rem' }}>
            {project.category}
          </span>
          <div className="card-top-actions">
            {articleAvailable && (
              <button 
                onClick={handleArticleBtnClick}
                className="card-article-pill-btn"
                title={t.projectCard.caseStudyTitle}
              >
                <Sparkles size={11} color="#00E5FF" />
                <span>{t.projectCard.caseStudyBtn}</span>
              </button>
            )}
            <ArrowUpRight size={16} color="#949E9E" className="card-arrow" />
          </div>
        </div>

        <h3 className="card-title">
          {project.title}
        </h3>

        <div className="card-tagline">
          {project.tagline}
        </div>

        <p className="card-description">
          {project.description}
        </p>
      </div>

      {project.diagramSteps && (
        <div className="card-pipeline-viz">
          {project.diagramSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <span className="viz-step">{step}</span>
              {idx < project.diagramSteps.length - 1 && (
                <span className="viz-arrow">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      <div className="card-metrics-grid">
        {project.metrics.map((m, idx) => (
          <div className="metric-item" key={idx}>
            <span className="metric-val">{m.value}</span>
            <span className="metric-lbl">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="card-tech-stack">
        {project.techStack.map((tech, idx) => (
          <span className="tech-pill" key={idx}>{tech}</span>
        ))}
      </div>

      {articleAvailable && (
        <div className="card-article-cta-row">
          <button 
            className="card-read-article-action"
            onClick={handleArticleBtnClick}
          >
            <BookOpen size={14} />
            <span>{t.projectCard.readCaseStudyCta}</span>
            <span className="card-cta-arrow">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
