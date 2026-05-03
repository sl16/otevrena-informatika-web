import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function wrapText(text: string, maxChars: number) {
  const words = text.trim().split(/\s+/);
  const lines: string[] = [];
  let current = '';
  for (const w of words) {
    const next = current ? `${current} ${w}` : w;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = w;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function renderSvg(opts: { title: string; subtitle: string; kicker?: string }) {
  const siteName = 'Otevřená informatika';
  const titleLines = wrapText(opts.title, 22);
  const subtitleLines = wrapText(opts.subtitle, 45);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0f1a" />
      <stop offset="1" stop-color="#0b1428" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="0%" r="75%">
      <stop offset="0" stop-color="#0066ff" stop-opacity="0.35" />
      <stop offset="1" stop-color="#0066ff" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />
  <rect width="1200" height="630" fill="url(#glow)" />

  <g transform="translate(80, 92)">
    <rect x="0" y="0" width="1040" height="446" rx="40" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />

    ${opts.kicker ? `<text x="56" y="86" font-family="JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace" font-size="18" letter-spacing="3" fill="#00e5ff" opacity="0.95">${esc(opts.kicker.toUpperCase())}</text>` : ''}

    ${titleLines
      .map((line, idx) => {
        const y = 150 + idx * 72;
        return `<text x="56" y="${y}" font-family="Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" font-weight="800" font-size="64" fill="#ffffff">${esc(line)}</text>`;
      })
      .join('')}

    ${subtitleLines
      .map((line, idx) => {
        const y = 320 + idx * 40;
        return `<text x="56" y="${y}" font-family="Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" font-weight="500" font-size="28" fill="#b4c0d3" opacity="0.95">${esc(line)}</text>`;
      })
      .join('')}

    <g transform="translate(56, 358)">
      <g transform="translate(0, 140)">
        <path d="M14 8.5C10.3333 10.5 8 14.5 8 19C8 25.6274 13.3726 31 20 31C26.6274 31 32 25.6274 32 19C32 14.5 29.6667 10.5 26 8.5" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none" />
        <path d="M20 5V19" stroke="#0066ff" stroke-width="4" stroke-linecap="round" />
      </g>
      <text x="54" y="176" font-family="Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" font-weight="800" font-size="26" fill="#ffffff">${esc(siteName)}</text>
      <text x="54" y="206" font-family="JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace" font-weight="600" font-size="14" fill="#6b7a93">otevrenainformatika.cz</text>
    </g>
  </g>
</svg>`;
}

export async function getStaticPaths() {
  const [materials, apps, posts, authors] = await Promise.all([
    getCollection('materials'),
    getCollection('apps'),
    getCollection('blog'),
    getCollection('authors'),
  ]);

  return [
    ...materials.map((m) => ({ params: { type: 'material', id: m.data.id } })),
    ...apps.map((a) => ({ params: { type: 'app', id: a.data.id } })),
    ...posts.map((p) => ({ params: { type: 'blog', id: p.data.id } })),
    ...authors.map((au) => ({ params: { type: 'author', id: au.data.id } })),
  ];
}

export const GET: APIRoute = async ({ params }) => {
  const type = params.type;
  const id = params.id;

  if (!type || !id) {
    return new Response('Bad Request', { status: 400 });
  }

  let title = 'Otevřená informatika';
  let subtitle = 'Bezplatné materiály a aplikace pro výuku informatiky.';
  let kicker = '';

  if (type === 'material') {
    const mats = await getCollection('materials');
    const m = mats.find((e) => e.data.id === id);
    if (m) {
      title = m.data.title;
      subtitle = m.data.description;
      kicker = m.data.category;
    }
  } else if (type === 'app') {
    const apps = await getCollection('apps');
    const a = apps.find((e) => e.data.id === id);
    if (a) {
      title = a.data.name;
      subtitle = a.data.description;
      kicker = a.data.category;
    }
  } else if (type === 'blog') {
    const posts = await getCollection('blog');
    const p = posts.find((e) => e.data.id === id);
    if (p) {
      title = p.data.title;
      subtitle = p.data.excerpt;
      kicker = p.data.category;
    }
  } else if (type === 'author') {
    const authors = await getCollection('authors');
    const a = authors.find((e) => e.data.id === id);
    if (a) {
      title = a.data.name;
      subtitle = a.data.role;
      kicker = 'Autor';
    }
  } else {
    return new Response('Not Found', { status: 404 });
  }

  const svg = renderSvg({ title, subtitle, kicker });
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
