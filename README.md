# Johat Abrego portfolio

Bilingual React and Vite portfolio for product engineering, full-stack applications, and applied AI work.

## Run locally

```powershell
npm install
npm run dev
```

Build the production site and generate static, shareable project pages with:

```powershell
npm run build
```

The build creates `/projects/<project-id>/` pages, page-specific metadata, and a sitemap when `VITE_SITE_URL` is configured. Add the final canonical site URL as a build environment variable before publishing. Static project routes are generated from `src/data/projects.js`.

## Project evidence images

Place real app screenshots in `evidence_assets/<project-folder>/`. The portfolio imports PNG, JPG/JPEG, WebP, AVIF, and GIF files automatically. Use descriptive filenames and avoid including customer data, credentials, or private account information.

Current folders include `SiriFruit/`, `NaraApp/`, `Enterprise Vision Suite/`, `EcoVision Spatial AI/`, `TenderAnalyzes/`, and `SuperLearn/`. Existing folders under the legacy `evidences_assets/` spelling are also supported. If a project has no images yet, its project page shows an explicitly labeled workflow preview instead of a fabricated screenshot.

## Contact and deployment settings

Set these Vite variables in the production build environment:

- `VITE_EMAIL`
- `VITE_LINKEDIN_URL`
- `VITE_GITHUB_URL`
- `VITE_MEDIUM_URL` (optional)
- `VITE_SITE_URL` (public canonical site origin; enables canonical metadata and `sitemap.xml`)

See `.env.example` for the expected format. Build-time variables are public in the shipped site and should not contain secrets.

## Optional analytics

The UI emits `portfolio:analytics` browser events for project views, category filters, and contact clicks. If a privacy-reviewed analytics provider is added later, the same events are also forwarded to a configured `gtag` function. No analytics provider or tracking script is loaded by default, and search terms are not recorded.
