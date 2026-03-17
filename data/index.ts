import matter from 'gray-matter';
import { Buffer } from 'buffer';
import { BlogPost, Material, AppInfo, Author, CurriculumPlan } from '../types';

// Polyfill Buffer for gray-matter
if (typeof window !== 'undefined') {
  (window as any).Buffer = Buffer;
}

function parseMarkdown<T>(content: string): T {
  const { data, content: body } = matter(content);
  
  // Convert any Date objects in frontmatter to strings
  const processedData = { ...data };
  for (const key in processedData) {
    if (processedData[key] instanceof Date) {
      processedData[key] = (processedData[key] as Date).toISOString().split('T')[0];
    }
  }

  return { 
    ...processedData, 
    content: body,
    longDescription: body,
    bio: body 
  } as T;
}

// Eagerly load all markdown files as raw strings
// @ts-ignore - Vite feature
const blogGlob = import.meta.glob('../src/content/blog/*.md', { eager: true, as: 'raw' });
// @ts-ignore
const materialGlob = import.meta.glob('../src/content/materials/*.md', { eager: true, as: 'raw' });
// @ts-ignore
const appGlob = import.meta.glob('../src/content/apps/*.md', { eager: true, as: 'raw' });
// @ts-ignore
const authorGlob = import.meta.glob('../src/content/authors/*.md', { eager: true, as: 'raw' });
// @ts-ignore
const curriculumGlob = import.meta.glob('../src/content/curriculum/*.md', { eager: true, as: 'raw' });

export const blogPosts: BlogPost[] = Object.values(blogGlob).map(content => parseMarkdown<BlogPost>(content as string));
export const materials: Material[] = Object.values(materialGlob).map(content => parseMarkdown<Material>(content as string));
export const apps: AppInfo[] = Object.values(appGlob).map(content => parseMarkdown<AppInfo>(content as string));
export const authors: Author[] = Object.values(authorGlob).map(content => parseMarkdown<Author>(content as string));
export const curriculumPlans: CurriculumPlan[] = Object.values(curriculumGlob).map(content => parseMarkdown<CurriculumPlan>(content as string));
