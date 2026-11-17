import type { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const categoryName = typeof post.category === 'object' && post.category !== null
    ? post.category.name
    : (post.category || 'General');

  const authorName = typeof post.author === 'object' && post.author !== null
    ? post.author.email
    : (post.author || 'Анонім');

  return (
    <article className="post-card">
      <div className="post-meta">
        <span className="post-category">{categoryName}</span>
        <span className="post-date">{post.createdAt}</span>
      </div>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <div className="post-footer">
        <span className="post-author">Автор: {authorName}</span>
      </div>
    </article>
  );
}