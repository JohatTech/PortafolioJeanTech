import React, { useState, useEffect, useCallback } from 'react';
import { getProjects } from './data/projects';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Footer } from './components/Footer';
import { ArticlePage } from './components/ArticlePage';
import { getArticleById, getArticleForProject } from './utils/articleEngine';
import { useLanguage } from './context/useLanguage';

export function App() {
  const { language, t } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [filterCategory, setFilterCategory] = useState('ALL');
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'article'
  const [activeArticleId, setActiveArticleId] = useState(null);

  const projects = getProjects(language);

  const categoryKeys = [
    'ALL',
    'NLP & LLM Agents',
    'Computer Vision & Edge',
    'Geospatial & 3D Analytics',
    'MLOps & Data Engine'
  ];

  // Map category key to project filter matcher
  const filteredProjects = filterCategory === 'ALL'
    ? projects
    : projects.filter(p => {
        // Match by English or Spanish category or keywords
        const cat = p.category.toLowerCase();
        if (filterCategory === 'NLP & LLM Agents') {
          return cat.includes('nlp') || cat.includes('llm') || cat.includes('agente');
        }
        if (filterCategory === 'Computer Vision & Edge') {
          return cat.includes('vision') || cat.includes('visión') || cat.includes('edge') || cat.includes('thermal') || cat.includes('vector');
        }
        if (filterCategory === 'Geospatial & 3D Analytics') {
          return cat.includes('geo') || cat.includes('3d') || cat.includes('spatial') || cat.includes('lidar');
        }
        if (filterCategory === 'MLOps & Data Engine') {
          return cat.includes('mlops') || cat.includes('data') || cat.includes('datos') || cat.includes('cloud') || cat.includes('etl');
        }
        return cat.includes(filterCategory.toLowerCase());
      });

  // Parse URL hash on mount and hash changes
  const handleHashRouting = useCallback(() => {
    const hash = window.location.hash;
    
    if (hash.startsWith('#article/') || hash.startsWith('#case-study/')) {
      const slug = hash.replace(/^#(article|case-study)\//, '').trim();
      const article = getArticleById(slug, language) || getArticleForProject(slug, language);
      
      if (article) {
        setActiveArticleId(article.id);
        setCurrentView('article');
        setSelectedProjectId(null);
        return;
      }
    }

    // Default to home view if not an article route
    if (!hash.startsWith('#article/') && !hash.startsWith('#case-study/')) {
      setCurrentView('home');
      setActiveArticleId(null);
    }
  }, [language]);

  useEffect(() => {
    handleHashRouting();
    window.addEventListener('hashchange', handleHashRouting);
    return () => window.removeEventListener('hashchange', handleHashRouting);
  }, [handleHashRouting]);

  // Navigate to dedicated article / case study page
  const handleOpenArticle = (idOrSlug) => {
    const targetArticle = getArticleById(idOrSlug, language) || getArticleForProject(idOrSlug, language);
    const targetId = targetArticle ? targetArticle.id : idOrSlug;

    window.location.hash = `article/${targetId}`;
    setActiveArticleId(targetId);
    setCurrentView('article');
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate back to home portfolio
  const handleBackToPortfolio = () => {
    window.location.hash = 'projects';
    setCurrentView('home');
    setActiveArticleId(null);
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const activeArticle = activeArticleId 
    ? (getArticleById(activeArticleId, language) || getArticleForProject(activeArticleId, language))
    : null;

  const selectedProject = selectedProjectId
    ? projects.find(p => p.id === selectedProjectId)
    : null;

  return (
    <div className="app-container">
      <Header 
        onNavigateHome={handleBackToPortfolio}
        onOpenArticle={handleOpenArticle}
        currentView={currentView}
      />

      {currentView === 'article' && activeArticle ? (
        <ArticlePage 
          article={activeArticle} 
          onBack={handleBackToPortfolio}
          onSelectProject={(proj) => {
            handleBackToPortfolio();
            setSelectedProjectId(proj?.id || null);
          }}
        />
      ) : (
        <>
          <Hero />

          <main>
            <section id="projects" className="section-header">
              <div className="section-title-row">
                <div>
                  <span className="micro-label">{t.projectsSection.microLabel}</span>
                  <h2 className="section-title">{t.projectsSection.title}</h2>
                </div>

                <div className="category-filter-bar">
                  {categoryKeys.map((catKey, idx) => {
                    const label = t.projectsSection.categories[catKey] || catKey;
                    return (
                      <button
                        key={idx}
                        onClick={() => setFilterCategory(catKey)}
                        className={`category-btn ${filterCategory === catKey ? 'active' : ''}`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="section-desc">
                {t.projectsSection.desc}
              </p>
            </section>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onSelect={(proj) => setSelectedProjectId(proj.id)}
                  onOpenArticle={handleOpenArticle}
                />
              ))}
            </div>

            <SkillsMatrix />
          </main>
        </>
      )}

      <Footer />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProjectId(null)}
          onOpenArticle={handleOpenArticle}
        />
      )}
    </div>
  );
}

export default App;
