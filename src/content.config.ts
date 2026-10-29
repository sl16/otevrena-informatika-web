import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { curriculumCategories } from './lib/curriculumCategories';

const presentations = defineCollection({
  loader: glob({ pattern: '**/deck.md', base: './src/content/presentations' }),
  schema: z
    .object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      category: z.enum(curriculumCategories),
      date: z.coerce.date().optional(),
    })
    // Allow Marp frontmatter fields like `marp`, `theme`, `paginate`, ...
    .passthrough(),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/authors' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    avatarUrl: z.string(),
    links: z
      .object({
        web: z.string().optional(),
        github: z.string().optional(),
        twitter: z.string().optional(),
      })
      .optional(),
  }),
});

const prompts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/prompts' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  authors,
  prompts,
  presentations,
};
