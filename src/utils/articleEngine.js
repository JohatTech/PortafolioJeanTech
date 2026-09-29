/**
 * ============================================================================
 * MODULAR ARTICLE & CASE STUDY ENGINE (Multi-Language Supported)
 * ============================================================================
 * 
 * Automatically loads, parses, and structures markdown articles from
 * `/src/content/articles/*.md` using Vite's eager raw glob import.
 * 
 * Supports language-specific files:
 *   - English: `[slug].md` or `[slug].en.md`
 *   - Spanish: `[slug].es.md`
 */

// Eagerly load all markdown files in src/content/articles
const rawArticleFiles = import.meta.glob('/src/content/articles/*.md', { 
  query: '?raw', 
  eager: true,
  import: 'default'
});

/**
 * Parses frontmatter YAML-like block from markdown text
 */
function parseFrontmatter(rawText) {
  const frontmatter = {};
  let content = rawText;

  // Match --- frontmatter block at beginning of file
  const fmMatch = rawText.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (fmMatch) {
    const yamlBlock = fmMatch[1];
    content = fmMatch[2];

    const lines = yamlBlock.split(/\r?\n/);
    let currentKey = null;
    let currentObject = null;

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;

      // Check for nested key (indented, e.g. inside summary:)
      if (line.startsWith('  ') && currentKey && currentObject) {
        const colonIdx = trimmed.indexOf(':');
        if (colonIdx > 0) {
          const subKey = trimmed.slice(0, colonIdx).trim();
          let subVal = trimmed.slice(colonIdx + 1).trim();
          if ((subVal.startsWith('"') && subVal.endsWith('"')) || (subVal.startsWith("'") && subVal.endsWith("'"))) {
            subVal = subVal.slice(1, -1);
          }
          currentObject[subKey] = subVal;
        }
        continue;
      }

      const colonIdx = line.indexOf(':');
      if (colonIdx > 0) {
        const key = line.slice(0, colonIdx).trim();
        let value = line.slice(colonIdx + 1).trim();

        if (value === '') {
          // Might be start of an object (e.g. summary:)
          currentKey = key;
          currentObject = {};
          frontmatter[key] = currentObject;
        } else {
          currentKey = null;
          currentObject = null;

          // Parse arrays like ["a", "b"] or [a, b]
          if (value.startsWith('[') && value.endsWith(']')) {
            try {
              frontmatter[key] = JSON.parse(value.replace(/'/g, '"'));
            } catch {
              frontmatter[key] = value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
            }
          } else {
            // Strip surrounding quotes
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
              value = value.slice(1, -1);
            }
            frontmatter[key] = value;
          }
        }
      }
    }
  }

  return { frontmatter, content };
}

/**
 * Extracts structured metadata, executive summary, and sections from markdown
 */
function parseArticle(filePath, rawContent) {
  // Detect language and base slug from filename:
  // e.g. /src/content/articles/enterprise-vision-suite.es.md -> baseSlug: 'enterprise-vision-suite', lang: 'es'
  // e.g. /src/content/articles/enterprise-vision-suite.md -> baseSlug: 'enterprise-vision-suite', lang: 'en'
  let baseSlug = 'article';
  let lang = 'en';

  const baseMatch = filePath.match(/\/([^/]+?)(?:\.(es|en))?\.md$/i);
  if (baseMatch) {
    baseSlug = baseMatch[1];
    if (baseMatch[2]) {
      lang = baseMatch[2].toLowerCase();
    }
  }

  const { frontmatter, content } = parseFrontmatter(rawContent);

  const articleId = frontmatter.id || frontmatter.projectId || baseSlug;
  const projectId = frontmatter.projectId || frontmatter.id || baseSlug;
  const articleLang = frontmatter.lang || lang || 'en';

  // Extract inline blockquotes if frontmatter didn't specify them
  let domain = frontmatter.domain;
  let role = frontmatter.role;
  let stack = frontmatter.stack;
  let impact = frontmatter.impact;

  if (typeof stack === 'string') {
    stack = stack.split(/[·,]/).map(s => s.trim()).filter(Boolean);
  }

  // Look for inline metadata block if missing: > **Project Overview Domain:** ...
  if (!domain) {
    const domainMatch = content.match(/>\s*\*\*Project Overview\s*Domain:\*\*\s*([^\n\r]+)/i) ||
                        content.match(/>\s*\*\*Domain:\*\*\s*([^\n\r]+)/i);
    if (domainMatch) domain = domainMatch[1].trim();
  }
  if (!role) {
    const roleMatch = content.match(/>\s*\*\*Role:\*\*\s*([^\n\r]+)/i);
    if (roleMatch) role = roleMatch[1].trim();
  }
  if (!stack || stack.length === 0) {
    const stackMatch = content.match(/>\s*\*\*Stack:\*\*\s*([^\n\r]+)/i);
    if (stackMatch) {
      stack = stackMatch[1].split(/[·,]/).map(s => s.trim()).filter(Boolean);
    }
  }
  if (!impact) {
    const impactMatch = content.match(/>\s*\*\*Impact:\*\*\s*([^\n\r]+)/i);
    if (impactMatch) impact = impactMatch[1].trim();
  }

  // Extract Executive Summary of Value block
  const execSummary = {
    speed: frontmatter.summary?.speed || '',
    accuracy: frontmatter.summary?.accuracy || '',
    compliance: frontmatter.summary?.compliance || ''
  };

  const execMatch = content.match(/>\s*🎯\s*\*\*Executive Summary of Value:\*\*([\s\S]*?)(?:---|##|$)/i);
  if (execMatch) {
    const lines = execMatch[1].split(/\r?\n/);
    for (const l of lines) {
      const cleanLine = l.replace(/^>\s*/, '').trim();
      const speedM = cleanLine.match(/[-*]\s*\*\*Speed:\*\*\s*(.*)/i);
      const accM = cleanLine.match(/[-*]\s*\*\*Accuracy:\*\*\s*(.*)/i);
      const compM = cleanLine.match(/[-*]\s*\*\*Compliance:\*\*\s*(.*)/i);

      if (speedM) execSummary.speed = speedM[1].trim();
      if (accM) execSummary.accuracy = accM[1].trim();
      if (compM) execSummary.compliance = compM[1].trim();
    }
  }

  // Parse numbered sections (e.g. ## 1. Project / Problem or ## 1. Proyecto / Problema)
  const sections = [];
  const sectionRegex = /##\s+(\d+)\.\s+([^\r\n]+)\r?\n([\s\S]*?)(?=(?:##\s+\d+\.|\r?\n---|$))/gi;
  let match;

  while ((match = sectionRegex.exec(content)) !== null) {
    const num = match[1];
    const heading = match[2].trim();
    const bodyRaw = match[3].trim();

    // Clean any trailing summary quote if attached
    const cleanBody = bodyRaw
      .replace(/>\s*🎯\s*\*\*Executive Summary of Value:[\s\S]*$/, '')
      .trim();

    sections.push({
      number: num,
      title: heading,
      rawContent: cleanBody,
      paragraphs: cleanBody.split(/\r?\n\r?\n/).map(p => p.trim()).filter(Boolean)
    });
  }

  return {
    id: articleId,
    projectId,
    lang: articleLang,
    title: frontmatter.title || `Case Study: ${domain || projectId}`,
    subtitle: frontmatter.subtitle || '',
    domain: domain || 'Enterprise Infrastructure',
    role: role || 'Lead AI Engineer',
    stack: stack || ['Python', 'PyTorch', 'OpenCV'],
    impact: impact || 'High Business & Operational Impact',
    readTime: frontmatter.readTime || (articleLang === 'es' ? '4 min de lectura' : '4 min read'),
    date: frontmatter.date || '2024',
    summary: execSummary,
    sections,
    rawContent: content
  };
}

// Map of all parsed articles by language: { en: { [id]: article }, es: { [id]: article } }
const articlesCache = {
  en: {},
  es: {},
};

for (const [path, content] of Object.entries(rawArticleFiles)) {
  const article = parseArticle(path, content);
  const langKey = article.lang === 'es' ? 'es' : 'en';
  
  articlesCache[langKey][article.id] = article;
  if (article.projectId && article.projectId !== article.id) {
    articlesCache[langKey][article.projectId] = article;
  }
}

/**
 * Returns an array of all available articles for a given language
 */
export function getAllArticles(lang = 'en') {
  const targetLang = lang === 'es' ? 'es' : 'en';
  const fallbackLang = targetLang === 'es' ? 'en' : 'es';

  const uniqueArticles = [];
  const seen = new Set();
  
  // First include articles in requested language
  for (const art of Object.values(articlesCache[targetLang] || {})) {
    if (!seen.has(art.id)) {
      seen.add(art.id);
      uniqueArticles.push(art);
    }
  }

  // Fallback to other language if some articles are only in that language
  for (const art of Object.values(articlesCache[fallbackLang] || {})) {
    if (!seen.has(art.id)) {
      seen.add(art.id);
      uniqueArticles.push(art);
    }
  }

  return uniqueArticles;
}

/**
 * Get article by article ID or filename slug and language
 */
export function getArticleById(id, lang = 'en') {
  if (!id) return null;
  const targetLang = lang === 'es' ? 'es' : 'en';
  const fallbackLang = targetLang === 'es' ? 'en' : 'es';

  return articlesCache[targetLang]?.[id] || articlesCache[fallbackLang]?.[id] || null;
}

/**
 * Get article associated with a project ID and language
 */
export function getArticleForProject(projectId, lang = 'en') {
  if (!projectId) return null;
  const targetLang = lang === 'es' ? 'es' : 'en';
  const fallbackLang = targetLang === 'es' ? 'en' : 'es';

  return articlesCache[targetLang]?.[projectId] || articlesCache[fallbackLang]?.[projectId] || null;
}

/**
 * Check if a project has an associated markdown article in any language
 */
export function hasArticle(projectId) {
  if (!projectId) return false;
  return Boolean(articlesCache.en[projectId] || articlesCache.es[projectId]);
}
