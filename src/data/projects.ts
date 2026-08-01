export interface Project {
  title: string;
  description: string;
  image: string;
  repoUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export const projects: Project[] = [];
