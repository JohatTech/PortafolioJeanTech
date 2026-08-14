import React from 'react';
import { SKILL_DOMAINS } from '../data/projects';
import { Cpu, Brain, Layers, Database } from 'lucide-react';

const iconMap = {
  Cpu: <Cpu size={18} color="#00E5FF" />,
  Brain: <Brain size={18} color="#7C3CFF" />,
  Layers: <Layers size={18} color="#00E5FF" />,
  Database: <Database size={18} color="#7C3CFF" />
};

export function SkillsMatrix() {
  return (
    <section style={{ marginTop: '5rem' }}>
      <div className="section-header">
        <span className="micro-label">SYSTEM CAPABILITIES</span>
        <h2 className="section-title">Engineering Competencies</h2>
        <p className="section-desc">
          Full-stack capabilities designed for end-to-end ML product lifecycle—from raw data engineering and model training to high-availability deployment and responsive UI integrations.
        </p>
      </div>

      <div className="skills-grid">
        {SKILL_DOMAINS.map((domain, idx) => (
          <div className="skill-domain-card" key={idx}>
            <div className="domain-header">
              {iconMap[domain.icon]}
              <span>{domain.title}</span>
            </div>
            
            <ul className="skill-list">
              {domain.skills.map((skill, sIdx) => (
                <li className="skill-item" key={sIdx}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
