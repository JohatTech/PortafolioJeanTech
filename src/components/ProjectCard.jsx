import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ProjectCard({ project, onSelect }) {
  return (
    <div 
      className={`project-panel ${project.featured ? 'featured-panel' : ''}`}
      onClick={() => onSelect(project)}
    >
      <div className="card-top">
        <div className="card-meta">
          <span className="micro-label" style={{ fontSize: '0.68rem' }}>
            {project.category}
          </span>
          <ArrowUpRight size={16} color="#949E9E" className="card-arrow" />
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
    </div>
  );
}
