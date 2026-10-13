import { Header } from './Header';
import { PostList } from './PostList';
import './App.css';

export function App() {
  return (
    <div className="app">
      <Header 
        title="World IT Forum" 
        subtitle="Сучасна платформа для обговорення веб-розробки, архітектури та технологій" 
      />
      <main className="main-content">
        <PostList />
      </main>
    </div>
  );
}

export default App;