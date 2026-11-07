import React from 'react';
import { Image, Layers3 } from 'lucide-react';
import { getEvidenceImages } from '../utils/evidenceAssets';
import { useLanguage } from '../context/useLanguage';

export function EvidenceGallery({ project, compact = false }) {
  const { language } = useLanguage();
  const images = getEvidenceImages(project.id);
  const copy = language === 'es'
    ? { preview: 'Flujo del producto', add: 'Capturas de la app pendientes', screenshot: 'Captura de la aplicación' }
    : { preview: 'Product workflow', add: 'App screenshots to be added', screenshot: 'App screenshot' };

  if (images.length > 0) {
    return (
      <div className={`evidence-gallery ${compact ? 'evidence-gallery-compact' : ''}`}>
        {images.slice(0, compact ? 1 : 4).map((image, index) => (
          <figure className="evidence-image-frame" key={`${image.src}-${index}`}>
            <img src={image.src} alt={`${project.title} ${copy.screenshot}: ${image.name}`} loading="lazy" />
            {!compact && <figcaption>{image.name}</figcaption>}
          </figure>
        ))}
      </div>
    );
  }

  const steps = project.diagramSteps || [];
  return (
    <div className={`evidence-placeholder ${compact ? 'evidence-placeholder-compact' : ''}`} aria-label={`${copy.preview}: ${project.title}`}>
      <div className="evidence-placeholder-heading">
        <span className="evidence-placeholder-icon"><Layers3 size={16} /></span>
        <span>{copy.preview}</span>
        {!compact && <span className="evidence-placeholder-note"><Image size={13} /> {copy.add}</span>}
      </div>
      {steps.length > 0 ? (
        <ol className="workflow-preview">
          {steps.slice(0, compact ? 2 : 5).map((step, index) => (
            <li key={`${step}-${index}`}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>
          ))}
        </ol>
      ) : <p className="evidence-preview-copy">{project.tagline}</p>}
    </div>
  );
}

