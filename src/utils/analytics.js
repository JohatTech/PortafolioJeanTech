export function trackEvent(name, parameters = {}) {
  if (typeof window === 'undefined') return;
  const detail = { name, parameters };
  window.dispatchEvent(new CustomEvent('portfolio:analytics', { detail }));
  // Events flow to an analytics provider only when one is explicitly installed.
  if (typeof window.gtag === 'function') window.gtag('event', name, parameters);
}

