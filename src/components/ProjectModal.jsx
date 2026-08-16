import React from 'react';
import { X, CheckCircle2, Cpu, Activity, Server, FileText } from 'lucide-react';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
          <X size={18} />
        </button>

        <div className="modal-header-section">
          <span className="micro-label">
            SYSTEM DEEP DIVE // {project.category}
          </span>
          <h2 className="modal-title">
            {project.title}
          </h2>
          <p className="modal-tagline">
            {project.tagline}
          </p>
        </div>

        <div className="modal-metric-card">
          <div className="modal-metric-header">
            <Activity size={14} color="#00E5FF" /> IMPACT & PERFORMANCE METRIC
          </div>
          <div className="modal-metric-value">
            {project.impactMetric}
          </div>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">
            <FileText size={16} color="#00E5FF" /> OVERVIEW & ARCHITECTURE
          </h3>
          <p className="modal-desc-text">
            {project.description}
          </p>
        </div>

        {project.architecture && (
          <div className="modal-section">
            <h3 className="modal-section-title">
              <Server size={16} color="#7C3CFF" /> PIPELINE BREAKDOWN
            </h3>
            <div className="modal-pipeline-grid">
              {Object.entries(project.architecture).map(([key, val]) => (
                <div key={key} className="modal-pipeline-card">
                  <span className="modal-pipeline-key">
                    // {key}
                  </span>
                  <span className="modal-pipeline-val">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="modal-section">
          <h3 className="modal-section-title">
            <CheckCircle2 size={16} color="#00E5FF" /> KEY TECHNICAL HIGHLIGHTS
          </h3>
          <ul className="modal-highlights-list">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="modal-highlight-item">
                <span className="modal-bullet">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">
            <Cpu size={16} color="#00E5FF" /> PRODUCTION STACK
          </h3>
          <div className="card-tech-stack">
            {project.techStack.map((tech, idx) => (
              <span className="tech-pill modal-tech-pill" key={idx}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

