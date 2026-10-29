export const curriculumCategories = [
  'Umělá inteligence',
  'Mediální gramotnost',
  'Kyberbezpečnost',
  'Kancelářský balík',
  'Informace a data',
  'Algoritmizace a programování',
  'Digitální technologie',
  'Počítače a operační systémy',
  'Jiné',
] as const;

export type CurriculumCategory = (typeof curriculumCategories)[number];
