import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('blog');

  return rss({
    title: 'Otevřená informatika | Blog',
    description: 'Novinky a články k projektu Otevřená informatika.',
    site: context.site,
    items: posts
      .map((p) => ({
        title: p.data.title,
        pubDate: new Date(p.data.date),
        description: p.data.excerpt,
        link: `/blog/${p.data.id}/`,
      }))
      .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()),
  });
}
