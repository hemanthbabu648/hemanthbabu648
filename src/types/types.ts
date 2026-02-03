export interface Blog {
  author: string;
  coverImage: string;
  date: string;
  excerpt: string;
  readTime: string;
  slug: string;
  tags: string[];
  title: string;
  url: string;
}
export interface Project {
  id: string;
  name: string;
  description: string;
  category: string[];
  image: string;
  tags: string[];
  sourceCodeLink?: string;
  liveUrl?: string;
  projectUrl?: string;
  position?: number;
}

export interface ProjectsResponseData {
  projects: Project[];
  total: number;
  count: number;
}

export interface ProjectsAPIResponse {
  data: ProjectsResponseData;
  message: string;
  status: number;
}
