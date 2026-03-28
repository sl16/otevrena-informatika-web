
export enum Category {
  PROGRAMMING = 'Programování',
  HARDWARE = 'Hardware',
  AI = 'Umělá inteligence',
  CYBERSECURITY = 'Kyberbezpečnost',
  OFFICE = 'Kancelářské aplikace',
  ALGORITHMS = 'Algoritmizace',
  MEDIA_LITERACY = 'Mediální gramotnost'
}

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  links?: {
    web?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Material {
  id: string;
  title: string;
  description: string;
  longDescription: string; // Markdown content
  category: Category;
  author: string; // Keep for display/fallback
  authorId?: string;
  date: string;
  downloadUrl: string;
  iconName: string;
  tags: string[];
  supportingMaterials?: SupportingMaterial[];
  duration?: string;
  targetAudience?: 'ZŠ' | 'SŠ' | 'ZŠ/SŠ';
}

export interface SupportingMaterial {
  id: string;
  title: string;
  type: 'video' | 'presentation' | 'link' | 'file';
  url: string;
}

export interface AppInfo {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  url: string;
  iconName: string;
  category: Category;
  features: string[];
  authorId?: string;
  runnerType?: string;
  certificateTitle?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown content
  author: string; // Keep for display/fallback
  authorId?: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface CurriculumTopic {
  id: string;
  title: string;
  description?: string;
  materialId?: string;
  status: 'available' | 'planned';
}

export interface CurriculumBlock {
  id: string;
  title: string;
  iconName?: string;
  topics: CurriculumTopic[];
}

export interface CurriculumPlan {
  id: string;
  schoolType: 'ZŠ' | 'SŠ';
  title: string;
  description: string;
  blocks: CurriculumBlock[];
}
