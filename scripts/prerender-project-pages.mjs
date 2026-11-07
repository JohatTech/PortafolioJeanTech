import { copyFile, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';
import { PROJECTS_EN } from '../src/data/projects.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const env = loadEnv('production', root, 'VITE_');
const siteUrl = (env.VITE_SITE_URL || '').replace(/\/$/, '');
const baseHtml = await readFile(path.join(dist, 'index.html'), 'utf8');
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const xmlEscape = (value = '') => escapeHtml(value).replace(/&#39;/g, '&apos;');
const routes = [];
const imageFolders = {
  sirifruit: ['SiriFruit', 'SiriFruitApp'],
  'nara-operations': ['NaraApp', 'Nara'],
  'enterprise-vision-suite': ['Enterprise Vision Suite'],
  'eco-vision': ['EcoVision Spatial AI'],
  'tender-analyzer': ['TenderAnalyzes', 'TenderAnalyzer'],
  superlearn: ['SuperLearn'],
};

async function findEvidenceImage(project) {
  const folders = imageFolders[project.id] || [project.id];
  for (const rootName of ['evidence_assets', 'evidences_assets']) {
    for (const folder of folders) {
      const folderPath = path.join(root, rootName, folder);
      try {
        const files = await readdir(folderPath, { withFileTypes: true });
        const image = files.find((item) => item.isFile() && /\.(avif|gif|jpe?g|png|webp)$/i.test(item.name));
        if (image) return path.join(folderPath, image.name);
      } catch {
        // This project has no evidence folder yet.
      }
    }
  }
  return null;
}

for (const project of PROJECTS_EN) {
  const route = `/projects/${encodeURIComponent(project.id)}`;
  const canonical = siteUrl ? `${siteUrl}${route}` : '';
  const title = `${project.title} · Johat Abrego`;
  const description = project.tagline;
  const evidenceImage = await findEvidenceImage(project);
  let html = baseHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:type" content="[^"]*"\s*\/>/, '<meta property="og:type" content="article" />');

  if (canonical) {
    html = html.replace('</head>', `<link rel="canonical" href="${escapeHtml(canonical)}" /><meta property="og:url" content="${escapeHtml(canonical)}" /></head>`);
    routes.push(canonical);
  }
  if (evidenceImage) {
    const extension = path.extname(evidenceImage).toLowerCase();
    const relativeImage = `/evidence_assets/previews/${project.id}${extension}`;
    const outputImage = path.join(dist, relativeImage.replace(/^\//, ''));
    await mkdir(path.dirname(outputImage), { recursive: true });
    await copyFile(evidenceImage, outputImage);
    const absoluteImage = siteUrl ? `${siteUrl}${relativeImage}` : relativeImage;
    html = html.replace('</head>', `<meta property="og:image" content="${escapeHtml(absoluteImage)}" /><meta name="twitter:card" content="summary_large_image" /></head>`);
  }

  const fallbackContent = `<main><p>${escapeHtml(project.category)}</p><h1>${escapeHtml(project.title)}</h1><p>${escapeHtml(project.tagline)}</p><p>${escapeHtml(project.description)}</p><p><a href="/">Johat Abrego · Portfolio</a></p></main>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${fallbackContent}</div>`);
  const outputDir = path.join(dist, 'projects', project.id);
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), html, 'utf8');
}

if (siteUrl) {
  const homeUrl = `${siteUrl}/`;
  let homeHtml = baseHtml.replace('</head>', `<link rel="canonical" href="${escapeHtml(homeUrl)}" /><meta property="og:url" content="${escapeHtml(homeUrl)}" /></head>`);
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Johat Abrego',
    jobTitle: 'Full-stack and Applied AI Engineer',
    url: homeUrl,
  };
  homeHtml = homeHtml.replace('</head>', `<script type="application/ld+json">${JSON.stringify(personSchema)}</script></head>`);
  await writeFile(path.join(dist, 'index.html'), homeHtml, 'utf8');
  const sitemapEntries = [siteUrl, ...routes].map((url) => `<url><loc>${xmlEscape(url)}</loc></url>`).join('');
  await writeFile(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapEntries}</urlset>`, 'utf8');
  await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`, 'utf8');
} else {
  await writeFile(path.join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\n', 'utf8');
}

console.log(`Prepared ${PROJECTS_EN.length} shareable project routes${siteUrl ? ' and sitemap' : ''}.`);
