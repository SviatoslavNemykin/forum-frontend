export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  category?: { id: number; name: string } | string;
  author?: { id: number; email: string } | string;
}