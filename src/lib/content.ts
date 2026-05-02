import { getCollection, type CollectionEntry } from 'astro:content';
import { formatCzDate, parseDate } from './date';

async function buildAuthorIndex() {
  const authors = await getCollection('authors');
  const byId = new Map<string, CollectionEntry<'authors'>>();
  for (const a of authors) {
    byId.set(a.data.id, a);
  }
  return byId;
}

export async function getMaterials() {
  const [items, authorsById] = await Promise.all([getCollection('materials'), buildAuthorIndex()]);
  return items
    .map((entry) => ({
      ...entry.data,
      body: entry.body,
      entry,
      dateCz: formatCzDate(entry.data.date),
      _dateSort: parseDate(entry.data.date)?.getTime() ?? 0,
      authorName: entry.data.authorId ? authorsById.get(entry.data.authorId)?.data.name ?? entry.data.author : entry.data.author,
      authorRole: entry.data.authorId ? authorsById.get(entry.data.authorId)?.data.role : undefined,
    }))
    .sort((a, b) => b._dateSort - a._dateSort);
}

export async function getApps() {
  const [items, authorsById] = await Promise.all([getCollection('apps'), buildAuthorIndex()]);
  return items
    .map((entry) => ({
      ...entry.data,
      body: entry.body,
      entry,
      authorName: entry.data.authorId ? authorsById.get(entry.data.authorId)?.data.name ?? entry.data.authorId : undefined,
      authorRole: entry.data.authorId ? authorsById.get(entry.data.authorId)?.data.role : undefined,
    }))
    .sort((a, b) => (a.name.localeCompare(b.name, 'cs')));
}

export async function getBlogPosts() {
  const [items, authorsById] = await Promise.all([getCollection('blog'), buildAuthorIndex()]);
  return items
    .map((entry) => ({
      ...entry.data,
      body: entry.body,
      entry,
      dateCz: formatCzDate(entry.data.date),
      _dateSort: parseDate(entry.data.date)?.getTime() ?? 0,
      authorName: entry.data.authorId ? authorsById.get(entry.data.authorId)?.data.name ?? entry.data.author : entry.data.author,
      authorRole: entry.data.authorId ? authorsById.get(entry.data.authorId)?.data.role : undefined,
    }))
    .sort((a, b) => b._dateSort - a._dateSort);
}

export async function getAuthors() {
  const items = await getCollection('authors');
  return items
    .map((entry) => ({
      ...entry.data,
      body: entry.body,
      entry,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, 'cs'));
}

export async function getCurriculumPlans() {
  const items = await getCollection('curriculum');
  return items
    .map((entry) => ({
      ...entry.data,
      body: entry.body,
      entry,
    }))
    .sort((a, b) => {
      if (a.schoolType === b.schoolType) {
        return 0;
      }
      return a.schoolType === 'SŠ' ? -1 : 1;
    });
}
