import React from 'react';
import { Mail, CheckCircle, Code, Server, Brain, ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="micro-label">
          FULL-STACK MACHINE LEARNING ENGINEER
        </div>
        
        <h1 className="hero-main-title">
          Hi, I'm <span className="hero-highlight">Jean Tech</span>
        </h1>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: '#F0F3F8', fontWeight: '600', marginBottom: '1rem' }}>
          Bridging Deep Learning Research & High-Performance Production Engineering
        </h2>

        <p className="hero-subtext">
          I design, train, and deploy enterprise-grade AI applications from scratch. Specialized in autonomous LLM agents, real-time computer vision streams, 3D geospatial analytics, and robust full-stack web platforms.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <a 
            href="#projects" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--accent-cyan)',
              color: '#07080A',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}
          >
            Explore 10 Featured Projects
          </a>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <a 
              href="mailto:contact@jeantech.ai" 
              title="Email Contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '6px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)'
              }}
            >
              <Mail size={18} />
            </a>
            
            {/* LinkedIn SVG */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              title="LinkedIn Profile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '6px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

            {/* GitHub SVG */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              title="GitHub Profile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '6px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-stats-row">
          <div className="hero-stat-card">
            <div className="stat-number">10</div>
            <div className="stat-label">Production AI Apps</div>
          </div>
          <div className="hero-stat-card">
            <div className="stat-number">Full-Stack</div>
            <div className="stat-label">Frontend to PyTorch</div>
          </div>
          <div className="hero-stat-card">
            <div className="stat-number">Edge & Cloud</div>
            <div className="stat-label">Real-Time ML Systems</div>
          </div>
        </div>
      </div>

      <div className="hero-side-card">
        <div className="side-card-title">
          <span>WHAT I BRING TO YOUR TEAM</span>
          <ExternalLink size={16} color="#00E5FF" />
        </div>
        
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <CheckCircle size={16} color="#00E5FF" style={{ minWidth: '16px', marginTop: '2px' }} />
            <span><strong>End-to-End Ownership:</strong> From data ingestion & model fine-tuning to web UI & API deployment.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <Brain size={16} color="#7C3CFF" style={{ minWidth: '16px', marginTop: '2px' }} />
            <span><strong>Applied GenAI & RAG:</strong> Building deterministic, hallucination-resistant LLM agents for technical domains.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <Server size={16} color="#00E5FF" style={{ minWidth: '16px', marginTop: '2px' }} />
            <span><strong>High-Throughput CV:</strong> Optimizing inference with TensorRT, ONNX, and hardware acceleration.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <Code size={16} color="#7C3CFF" style={{ minWidth: '16px', marginTop: '2px' }} />
            <span><strong>Modern Web Stack:</strong> React, FastAPI, Docker, Spatial GIS, and WebGL 3D rendering.</span>
          </li>
        </ul>

        <div style={{ marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          LOCATION: Remote / Hybrid | OPEN TO ROLES
        </div>
      </div>
    </section>
  );
}
