/**
 * ============================================================================
 * SOCIAL MEDIA & CONTACT CONFIGURATION (Environment Driven)
 * ============================================================================
 * 
 * 📌 HOW TO CONFIGURE YOUR URLS:
 * 1. Set your values in the `.env` file at the project root (see `.env.example`).
 * 2. Restart Vite dev server (`npm run dev`) or build after changing `.env`.
 * 
 * 🛡️ NOTE: In Vite, env variables MUST be accessed directly via `import.meta.env.VITE_*`
 * so Vite's compiler can statically replace them during bundling.
 */

function formatEmail(emailValue) {
  if (!emailValue) return "mailto:johat.abrego24@gmail.com";
  const trimmed = String(emailValue).trim();
  return trimmed.startsWith('mailto:') ? trimmed : `mailto:${trimmed}`;
}

export const SOCIAL_LINKS = {
  // ✉️ Email contact address
  email: formatEmail(import.meta.env.VITE_EMAIL || import.meta.env.VITE_SOCIAL_EMAIL),

  // 💼 LinkedIn profile URL
  linkedin: import.meta.env.VITE_LINKEDIN_URL || import.meta.env.VITE_SOCIAL_LINKEDIN || "https://linkedin.com",

  // 🐙 GitHub profile URL
  github: import.meta.env.VITE_GITHUB_URL || import.meta.env.VITE_SOCIAL_GITHUB || "https://github.com",

  // ✍️ Medium profile / publications URL
  medium: import.meta.env.VITE_MEDIUM_URL || import.meta.env.VITE_SOCIAL_MEDIUM || "https://medium.com",
};



