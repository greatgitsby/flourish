export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage?: string;
  tags?: string[];
  content: string;
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  featuredImage?: string;
  tags?: string[];
}
