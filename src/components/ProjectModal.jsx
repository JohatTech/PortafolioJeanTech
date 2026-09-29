import React from 'react';
import { X, CheckCircle2, Cpu, Activity, Server, FileText, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { hasArticle } from '../utils/articleEngine';
import { useLanguage } from '../context/useLanguage';

export function ProjectModal({ project, onClose, onOpenArticle }) {
  const { t } = useLanguage();
  if (!project) return null;

  const articleAvailable = hasArticle(project.id);

  const handleReadArticle = () => {
    if (onOpenArticle) {
      onClose();
      onOpenArticle(project.id);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label={t.projectModal.closeAria}>
          <X size={18} />
        </button>

        <div className="modal-header-section">
          <span className="micro-label">
            {t.projectModal.deepDive} {project.category}
          </span>
          <h2 className="modal-title">
            {project.title}
          </h2>
          <p className="modal-tagline">
            {project.tagline}
          </p>
        </div>

        {articleAvailable && (
          <div className="modal-article-callout-banner">
            <div className="modal-article-banner-text">
              <Sparkles size={16} color="#00E5FF" />
              <div>
                <strong>{t.projectModal.caseStudyBannerTitle}</strong>
                <span>{t.projectModal.caseStudyBannerDesc}</span>
              </div>
            </div>
            <button onClick={handleReadArticle} className="modal-read-article-btn">
              <BookOpen size={15} />
              <span>{t.projectModal.readCaseStudyBtn}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}

        <div className="modal-metric-card">
          <div className="modal-metric-header">
            <Activity size={14} color="#00E5FF" /> {t.projectModal.impactMetricHeader}
          </div>
          <div className="modal-metric-value">
            {project.impactMetric}
          </div>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">
            <FileText size={16} color="#00E5FF" /> {t.projectModal.overviewHeader}
          </h3>
          <p className="modal-desc-text">
            {project.description}
          </p>
        </div>

        {project.architecture && (
          <div className="modal-section">
            <h3 className="modal-section-title">
              <Server size={16} color="#7C3CFF" /> {t.projectModal.pipelineHeader}
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
            <CheckCircle2 size={16} color="#00E5FF" /> {t.projectModal.highlightsHeader}
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
            <Cpu size={16} color="#00E5FF" /> {t.projectModal.stackHeader}
          </h3>
          <div className="card-tech-stack">
            {project.techStack.map((tech, idx) => (
              <span className="tech-pill modal-tech-pill" key={idx}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {articleAvailable && (
          <div className="modal-footer-article-action">
            <button onClick={handleReadArticle} className="modal-bottom-article-btn">
              <BookOpen size={16} />
              <span>{t.projectModal.bottomCaseStudyBtn}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
