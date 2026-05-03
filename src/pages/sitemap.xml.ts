import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

type Url = { loc: string; lastmod?: string };

const isoDate = (value?: string) => {
  if (!value) return undefined;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
};

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://otevrenainformatika.cz';

  const [materials, apps, posts, authors] = await Promise.all([
    getCollection('materials'),
    getCollection('apps'),
    getCollection('blog'),
    getCollection('authors'),
  ]);

  const urls: Url[] = [
    { loc: `${base}/` },
    { loc: `${base}/materialy/` },
    { loc: `${base}/aplikace/` },
    { loc: `${base}/tematicke-plany/` },
    { loc: `${base}/blog/` },
  ];

  for (const m of materials) {
    urls.push({ loc: `${base}/materialy/${m.data.id}/`, lastmod: isoDate(m.data.date) });
  }
  for (const a of apps) {
    urls.push({ loc: `${base}/aplikace/${a.data.id}/` });
    if (a.data.url?.startsWith('/app/')) {
      urls.push({ loc: `${base}${a.data.url.replace(/\/$/, '')}/` });
    }
  }
  for (const p of posts) {
    urls.push({ loc: `${base}/blog/${p.data.id}/`, lastmod: isoDate(p.data.date) });
  }
  for (const au of authors) {
    urls.push({ loc: `${base}/autori/${au.data.id}/` });
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => {
    const lastmod = u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : '';
    return `  <url><loc>${u.loc}</loc>${lastmod}</url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
