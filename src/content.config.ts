import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const urlOrPath = z.union([
  z.string().url(),
  z.string().regex(/^\//, 'Expected an absolute URL or a path starting with /'),
]);

const categoryEnum = z.enum([
  'Programování',
  'Hardware',
  'Umělá inteligence',
  'Kyberbezpečnost',
  'Kancelářský balík',
  'Algoritmizace',
  'Mediální gramotnost',
]);

const materials = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/materials' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    category: categoryEnum,
    author: z.string(),
    authorId: z.string().optional(),
    date: z.coerce.string(),
    duration: z.string().optional(),
    targetAudience: z.enum(['ZŠ', 'SŠ', 'ZŠ/SŠ']).optional(),
    downloadUrl: urlOrPath,
    iconName: z.string(),
    tags: z.array(z.string()).default([]),
    supportingMaterials: z
      .array(
        z.object({
          id: z.string(),
          title: z.string(),
          type: z.enum(['video', 'presentation', 'link', 'file']),
          url: urlOrPath,
        })
      )
      .optional(),
  }),
});

const presentations = defineCollection({
  loader: glob({ pattern: '**/deck.md', base: './src/content/presentations' }),
  schema: z
    .object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
    })
    // Allow Marp frontmatter fields like `marp`, `theme`, `paginate`, ...
    .passthrough(),
});

const apps = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/apps' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    url: z.string(),
    iconName: z.string(),
    category: categoryEnum,
    features: z.array(z.string()).default([]),
    authorId: z.string().optional(),
    runnerType: z.string().optional(),
    certificateTitle: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    excerpt: z.string(),
    author: z.string(),
    authorId: z.string().optional(),
    date: z.coerce.string(),
    imageUrl: z.string(),
    category: z.string(),
  }),
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

const curriculum = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/curriculum' }),
  schema: z.object({
    id: z.string(),
    schoolType: z.enum(['ZŠ', 'SŠ']),
    title: z.string(),
    description: z.string(),
    blocks: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        iconName: z.string().optional(),
        topics: z.array(
          z.object({
            id: z.string(),
            title: z.string(),
            description: z.string().optional(),
            materialId: z.string().optional(),
            status: z.enum(['available', 'planned']),
          })
        ),
      })
    ),
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
  materials,
  apps,
  blog,
  authors,
  curriculum,
  prompts,
  presentations,
};
