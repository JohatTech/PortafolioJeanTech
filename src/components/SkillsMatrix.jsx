import React from 'react';
import { getSkillDomains } from '../data/projects';
import { Cpu, Brain, Layers, Database } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

const iconMap = {
  Cpu: <Cpu size={18} color="#00E5FF" />,
  Brain: <Brain size={18} color="#7C3CFF" />,
  Layers: <Layers size={18} color="#00E5FF" />,
  Database: <Database size={18} color="#7C3CFF" />
};

export function SkillsMatrix() {
  const { language, t } = useLanguage();
  const skillDomains = getSkillDomains(language);

  return (
    <section id="skills" className="skills-matrix-section">
      <div className="section-header">
        <span className="micro-label">{t.skillsSection.microLabel}</span>
        <h2 className="section-title">{t.skillsSection.title}</h2>
        <p className="section-desc">
          {t.skillsSection.desc}
        </p>
      </div>

      <div className="skills-grid">
        {skillDomains.map((domain, idx) => (
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
