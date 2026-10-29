import { getCollection, type CollectionEntry } from 'astro:content';

type PresentationEntry = CollectionEntry<'presentations'>;

export async function getPresentations() {
  const items = await getCollection('presentations');
  return items
    .map((entry: PresentationEntry) => ({
      ...entry.data,
      entry,
      _dateSort: entry.data.date?.getTime() ?? 0,
    }))
    .sort((a, b) => b._dateSort - a._dateSort || a.title.localeCompare(b.title, 'cs'));
}
