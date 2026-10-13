import { posts } from './data/posts';
import { PostCard } from './PostCard';

export function PostList() {
  return (
    <section className="post-list-section">
      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}