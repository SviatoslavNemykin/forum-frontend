import type { Post } from './data/posts';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <div className="post-meta">
        <span className="post-category">{post.category}</span>
        <span className="post-date">{post.createdAt}</span>
      </div>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <div className="post-footer">
        <span className="post-author">Автор: {post.author}</span>
      </div>
    </article>
  );
}