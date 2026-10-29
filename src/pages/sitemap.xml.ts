import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

type Url = { loc: string; lastmod?: string };

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://otevrenainformatika.cz';

  const [authors, presentations] = await Promise.all([
    getCollection('authors'),
    getCollection('presentations'),
  ]);

  const urls: Url[] = [
    { loc: `${base}/` },
    { loc: `${base}/nastroje/` },
    { loc: `${base}/tematicke-plany/` },
    { loc: `${base}/prezentace/` },
  ];

  for (const au of authors) {
    urls.push({ loc: `${base}/autori/${au.data.id}/` });
  }

  for (const p of presentations) {
    urls.push({ loc: `${base}/prezentace/${p.data.id}/` });
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
