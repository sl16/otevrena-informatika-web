# Migrace webu na Astro (GitHub Pages)

## Cíle
- Plně indexovatelný web i bez vykreslení JS (SSR/SSG HTML pro každou stránku).
- Zachovat současný vizuál a URL strukturu.
- Nechat interaktivní aplikace běžet jako client-side islandy.
- Doplnit SEO/AI vrstvy: metadata, JSON-LD, sitemap, robots, RSS, llms.txt.

## To-do (pořadí)

1. Astro základ
- ✅ Přidat Astro do projektu a přepnout build na `astro build` (výstup `dist/`).
- ✅ Přidat Tailwind přes `@astrojs/tailwind` a převést současný Tailwind config (brand barvy, fonty).
- ✅ Vytvořit `src/layouts/BaseLayout.astro` (head, nav, footer, globální styly).

2. Content collections
- ✅ Zavést `src/content/config.ts` a definovat kolekce: `materials`, `apps`, `blog`, `authors`, `curriculum`.
- ✅ Ověřit schémata (Zod) a migraci frontmatter polí.
- ✅ Přidat helpery pro načtení a třídění obsahu (např. podle data).

3. Routing (SSG stránky)
- ✅ `src/pages/index.astro` (home, poslední materiály/aplikace/články).
- ✅ `src/pages/materialy/index.astro` + `src/pages/materialy/[id].astro`.
- ✅ `src/pages/aplikace/index.astro` + `src/pages/aplikace/[id].astro`.
- ✅ `src/pages/blog/index.astro` + `src/pages/blog/[id].astro`.
- ✅ `src/pages/tematicke-plany/index.astro`.
- ✅ `src/pages/autori/[id].astro`.
- ✅ `src/pages/404.astro`.

4. Interaktivní aplikace (islands)
- ✅ Vytvořit `src/pages/app/[id].astro`.
- ✅ Převést phishing simulátor na React island (bez React Router) + zachovat generování certifikátu PDF.
- ✅ Zajistit, že ostatní aplikace fungují jako externí odkazy.

5. SEO metadata (per-page)
- ✅ Per-page `<title>`, `meta description`, canonical.
- ✅ OG/Twitter tags + per-item `og:image` (lokálně generované SVG, bez `picsum`).

6. Strukturovaná data (JSON-LD)
- ⬜ `Organization` + `WebSite` (globálně).
- ⬜ `Article` (blog detail), `LearningResource/CreativeWork` (materiál), `SoftwareApplication` (aplikace), `Person` (autor).

7. Crawl infrastrukturní věci
- ✅ `public/robots.txt` + `sitemap.xml` (generované v buildu).
- ✅ RSS/Atom feed pro blog.

8. AI-friendly doplňky
- ✅ `public/llms.txt` (popis webu, licence, klíčové URL, kontakty, doporučená citace).
- ⬜ Volitelně `public/content-index.json` (strojově čitelný katalog položek).

9. Cleanup
- ✅ Odstranit staré SPA entrypointy (`index.tsx`, `App.tsx`, root `pages/`), pokud už nejsou potřeba.
- ✅ Zkontrolovat deploy workflow na GitHub Pages (stále `dist/`).

## Akceptační kritéria
- `npm run build` vytvoří statické HTML pro všechny výše uvedené stránky.
- Každá detail stránka (materiál/článek/aplikace/autor) má unikátní title+description+canonical a JSON-LD.
- `robots.txt` a `sitemap.xml` existují a odkazují na všechny veřejné URL.
- `/app/phishing-simulator` funguje (interaktivita + PDF certifikát).
