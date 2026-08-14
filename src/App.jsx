import React, { useState } from 'react';
import { PROJECTS } from './data/projects';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Footer } from './components/Footer';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('ALL');

  const categories = ['ALL', 'NLP & LLM Agents', 'Computer Vision & Edge', 'Geospatial & 3D Analytics', 'MLOps & Data Engine'];

  const filteredProjects = filterCategory === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.toLowerCase().includes(filterCategory.toLowerCase()) || filterCategory.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <div className="app-container">
      <Header />
      <Hero />

      <main>
        <section id="projects" className="section-header">
          <div className="section-title-row">
            <div>
              <span className="micro-label">FEATURED SYSTEMS & ARCHITECTURES</span>
              <h2 className="section-title">Top 10 Engineering Projects</h2>
            </div>

            <div className="category-filter-bar">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setFilterCategory(cat)}
                  className={`category-btn ${filterCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <p className="section-desc">
            An editorial selection of enterprise-grade AI applications, autonomous agents, computer vision platforms, and cloud infrastructure pipelines engineered for high throughput and technical precision.
          </p>
        </section>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onSelect={setSelectedProject} 
            />
          ))}
        </div>

        <SkillsMatrix />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

export default App;
