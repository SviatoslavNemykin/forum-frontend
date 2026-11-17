import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { RegisterForm } from './components/RegisterForm';
import { LoginForm } from './components/LoginForm';
import { useGetPostsQuery } from './api/baseApi';
import './App.css';

export function App() {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  return (
    <div className="app">
      <Header 
        title="World IT Forum" 
        subtitle="Сучасна платформа для обговорення веб-розробки, архітектури та технологій" 
      />
      
      {/* Убрали inline-стили, теперь всё управляется через CSS */}
      <div className="auth-section">
        <RegisterForm />
        <LoginForm />
      </div>

      <main className="main-content">
        {isLoading && <p className="loading-state">Завантаження постів з сервера...</p>}
        {isError && <p className="error-state">Помилка завантаження даних. Перевірте, чи запущено бекенд.</p>}
        
        {!isLoading && !isError && posts && posts.length === 0 && (
          <p className="empty-state">Постів поки немає.</p>
        )}

        {!isLoading && !isError && posts && posts.length > 0 && (
          <PostList posts={posts} />
        )}
      </main>
    </div>
  );
}

export default App;