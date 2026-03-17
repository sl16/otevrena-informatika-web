# Otevrena Informatika Web

React + Vite web for https://otevrenainformatika.cz.

## Local development

Prerequisites:
- Node.js 20+

Commands:
1. Install dependencies:
   `npm install`
2. Start dev server:
   `npm run dev`
3. Build production bundle:
   `npm run build`

## GitHub Pages deployment (custom domain)

This repository is configured for GitHub Pages using GitHub Actions:
- Workflow: `.github/workflows/deploy-pages.yml`
- Output directory: `dist`
- SPA fallback: `public/404.html`
- Custom domain file in artifact: `public/CNAME`

### One-time GitHub setup

1. In GitHub repository settings, open `Pages`.
2. Set `Build and deployment` source to `GitHub Actions`.
3. In `Custom domain`, set `otevrenainformatika.cz` (if not auto-detected).
4. Enable `Enforce HTTPS` after DNS is propagated.

### DNS records required

At your DNS provider, configure:
- `A` record for apex `@` to GitHub Pages IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Optional `CNAME` for `www` to `<your-username>.github.io`

### Deploy flow

Any push to `main` or `master` triggers deployment.

You can also run deployment manually via `Actions` -> `Deploy to GitHub Pages` -> `Run workflow`.
