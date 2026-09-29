import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Share2, 
  Check, 
  Clock, 
  Cpu, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  FileText, 
  Sparkles,
  Mail
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import { useLanguage } from '../context/useLanguage';

export function ArticlePage({ article, onBack }) {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article?.id]);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>{t.articlePage.notFoundTitle}</h2>
        <p>{t.articlePage.notFoundDesc}</p>
        <button onClick={onBack} className="article-back-btn">
          <ArrowLeft size={16} />
          <span>{t.articlePage.returnToPortfolio}</span>
        </button>
      </div>
    );
  }

  // Helper to pick section icons
  const getSectionIcon = (num, title) => {
    const text = title.toLowerCase();
    if (text.includes('problem') || text.includes('proyecto') || text.includes('problema') || text.includes('project')) {
      return <Zap size={18} className="sec-icon-cyan" />;
    }
    if (text.includes('role') || text.includes('rol')) {
      return <ShieldCheck size={18} className="sec-icon-violet" />;
    }
    if (text.includes('approach') || text.includes('technical') || text.includes('architecture') || text.includes('enfoque') || text.includes('técnico')) {
      return <Layers size={18} className="sec-icon-cyan" />;
    }
    if (text.includes('result') || text.includes('impact') || text.includes('resultado')) {
      return <Award size={18} className="sec-icon-emerald" />;
    }
    return <FileText size={18} className="sec-icon-cyan" />;
  };

  return (
    <article className="article-container">
      {/* Top Floating Navigation Bar */}
      <nav className="article-top-nav">
        <button onClick={onBack} className="article-back-btn" aria-label={t.articlePage.backToPortfolio}>
          <ArrowLeft size={16} />
          <span>{t.articlePage.backToPortfolio}</span>
        </button>

        <div className="article-nav-meta">
          <div className="article-meta-pill">
            <Clock size={13} />
            <span>{article.readTime || t.articlePage.readTimeFallback}</span>
          </div>

          <button onClick={handleShare} className="article-share-btn" title={t.articlePage.shareTooltip}>
            {copied ? (
              <>
                <Check size={14} color="#10B981" />
                <span style={{ color: '#10B981' }}>{t.articlePage.linkCopied}</span>
              </>
            ) : (
              <>
                <Share2 size={14} />
                <span>{t.articlePage.share}</span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Article Header & Title */}
      <header className="article-header">
        <div className="article-category-badge">
          <span className="badge-pulse"></span>
          <span>{t.articlePage.caseStudyPrefix} {article.domain?.toUpperCase() || t.articlePage.deepDiveFallback}</span>
        </div>

        <h1 className="article-main-title">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="article-subtitle-lead">
            {article.subtitle}
          </p>
        )}

        {/* Key Metadata Grid */}
        <div className="article-meta-grid">
          <div className="article-meta-item">
            <span className="article-meta-label">{t.articlePage.domainLabel}</span>
            <span className="article-meta-value">{article.domain}</span>
          </div>

          <div className="article-meta-item">
            <span className="article-meta-label">{t.articlePage.roleLabel}</span>
            <span className="article-meta-value highlight-violet">{article.role}</span>
          </div>

          <div className="article-meta-item">
            <span className="article-meta-label">{t.articlePage.impactLabel}</span>
            <span className="article-meta-value highlight-cyan">{article.impact}</span>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="article-stack-container">
          <span className="article-stack-label">{t.articlePage.stackLabel}</span>
          <div className="article-stack-pills">
            {article.stack.map((item, idx) => (
              <span key={idx} className="tech-pill article-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Executive Summary of Value Callout */}
      {(article.summary?.speed || article.summary?.accuracy || article.summary?.compliance) && (
        <section className="article-exec-summary-card">
          <div className="exec-summary-header">
            <div className="exec-badge">
              <Sparkles size={16} color="#00E5FF" />
              <span>{t.articlePage.execSummaryTitle}</span>
            </div>
            <div className="exec-turnaround-badge">
              <span className="before-metric">60 min</span>
              <span className="arrow-metric">➔</span>
              <span className="after-metric">5 min / mission</span>
            </div>
          </div>

          <div className="exec-value-grid">
            {article.summary.speed && (
              <div className="exec-value-item">
                <div className="exec-item-title">
                  <Zap size={15} color="#00E5FF" />
                  <span>{t.articlePage.speedLabel}</span>
                </div>
                <p className="exec-item-desc">{article.summary.speed}</p>
              </div>
            )}

            {article.summary.accuracy && (
              <div className="exec-value-item">
                <div className="exec-item-title">
                  <ShieldCheck size={15} color="#8247FF" />
                  <span>{t.articlePage.accuracyLabel}</span>
                </div>
                <p className="exec-item-desc">{article.summary.accuracy}</p>
              </div>
            )}

            {article.summary.compliance && (
              <div className="exec-value-item">
                <div className="exec-item-title">
                  <Award size={15} color="#10B981" />
                  <span>{t.articlePage.complianceLabel}</span>
                </div>
                <p className="exec-item-desc">{article.summary.compliance}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Structured Sections */}
      <div className="article-body-content">
        {article.sections.map((sec, idx) => (
          <section key={idx} className="article-section-block">
            <div className="article-section-header">
              <div className="section-number-badge">0{sec.number || idx + 1}</div>
              <h2 className="article-section-title">
                {getSectionIcon(sec.number, sec.title)}
                <span>{sec.title}</span>
              </h2>
            </div>

            <div className="article-section-body">
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="article-paragraph">
                  {p}
                </p>
              ))}

              {/* Special interactive architecture diagram for Technical Approach section */}
              {(sec.title.toLowerCase().includes('approach') || sec.title.toLowerCase().includes('enfoque')) && (
                <div className="article-pipeline-box">
                  <div className="pipeline-box-title">
                    <Cpu size={14} color="#00E5FF" />
                    <span>{t.articlePage.pipelineBoxTitle}</span>
                  </div>
                  
                  <div className="article-pipeline-stages">
                    {t.articlePage.pipelineStages.map((stage, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <div className="pipe-stage">
                          <div className="pipe-stage-num">{stage.num}</div>
                          <div className="pipe-stage-name">{stage.name}</div>
                          <div className="pipe-stage-sub">{stage.sub}</div>
                        </div>
                        {sIdx < t.articlePage.pipelineStages.length - 1 && (
                          <div className="pipe-connector">➔</div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Key Takeaways & Impact Callout Card */}
      <div className="article-impact-summary-card">
        <div className="impact-summary-content">
          <div className="impact-badge">
            <TrendingUp size={16} color="#10B981" />
            <span>{t.articlePage.impactOutcomeBadge}</span>
          </div>
          <h3 className="impact-summary-heading">
            {t.articlePage.impactOutcomeHeading}
          </h3>
          <p className="impact-summary-text">
            {t.articlePage.impactOutcomeText}
          </p>
        </div>
      </div>

      {/* Article Footer & Action Hub */}
      <footer className="article-footer-section">
        <div className="article-footer-card">
          <div className="footer-card-left">
            <span className="micro-label">{t.articlePage.authorLabel}</span>
            <h4 className="footer-author-name">Johat Abrego</h4>
            <p className="footer-author-role">{t.articlePage.authorRole}</p>
            <p className="footer-author-bio">
              {t.articlePage.authorBio}
            </p>
          </div>

          <div className="footer-card-actions">
            <a href={SOCIAL_LINKS.email} className="hero-primary-btn article-contact-btn">
              <Mail size={15} />
              <span>{t.articlePage.discussBtn}</span>
            </a>
            <button onClick={onBack} className="hero-secondary-btn article-return-btn">
              <ArrowLeft size={15} />
              <span>{t.articlePage.backToAllProjects}</span>
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
}
