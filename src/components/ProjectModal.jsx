import React from 'react';
import { X, CheckCircle2, Cpu, Activity, Server, FileText } from 'lucide-react';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        <div>
          <span className="micro-label" style={{ marginBottom: '0.5rem' }}>
            SYSTEM DEEP DIVE // {project.category}
          </span>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>
            {project.title}
          </h2>
          <p style={{ color: '#00E5FF', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
            {project.tagline}
          </p>
        </div>

        <div style={{ background: 'var(--bg-elevated)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#949E9E', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Activity size={14} color="#00E5FF" /> IMPACT & PERFORMANCE METRIC
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '700', color: '#F0F3F8' }}>
            {project.impactMetric}
          </div>
        </div>

        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={16} color="#00E5FF" /> OVERVIEW & ARCHITECTURE
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.65', fontSize: '0.95rem' }}>
            {project.description}
          </p>
        </div>

        {project.architecture && (
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Server size={16} color="#7C3CFF" /> PIPELINE BREAKDOWN
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {Object.entries(project.architecture).map(([key, val]) => (
                <div key={key} style={{ background: 'var(--bg-base)', padding: '0.85rem 1rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#00E5FF', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>
                    // {key}
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={16} color="#00E5FF" /> KEY TECHNICAL HIGHLIGHTS
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.highlights.map((item, idx) => (
              <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: '#00E5FF', fontWeight: 'bold' }}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={16} color="#00E5FF" /> PRODUCTION STACK
          </h3>
          <div className="card-tech-stack">
            {project.techStack.map((tech, idx) => (
              <span className="tech-pill" key={idx} style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
