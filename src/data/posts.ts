export interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  createdAt: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Початок роботи з TypeScript у React",
    content: "Привіт усім! Хотів би обговорити, чому TypeScript став стандартом для розробки на React. Які ваші улюблені фічі типизації?",
    category: "TypeScript",
    author: "Олександр",
    createdAt: "2026-10-12"
  },
  {
    id: 2,
    title: "Як налаштувати Prisma ORM з PostgreSQL?",
    content: "Зіткнувся з міграціями в Prisma 8. Хто вже використовував Prisma Postgres у продакшені, які є підводні камені?",
    category: "Backend",
    author: "Святослав",
    createdAt: "2026-10-13"
  },
  {
    id: 3,
    title: "Найкращі практики побудови архітектури API",
    content: "Розглядаємо поділ на DTO, сервіси та репозиторії. Як ви реалізуєте Dependency Injection у Node.js додатках?",
    category: "Architecture",
    author: "Максим",
    createdAt: "2026-10-14"
  },
  {
    id: 4,
    title: "Поради щодо створення телеграм-ботів на aiogram",
    content: "Пишу бота для обробки відео через yt-dlp та FFmpeg. Зіткнувся з асинхронністю при завантаженні великих файлів, є питання.",
    category: "Python",
    author: "Іван",
    createdAt: "2026-10-14"
  },
  {
    id: 5,
    title: "Вітаємо на нашому технічному форумі!",
    content: "Це головна гілка для нових учасників. Розповідайте про свої проєкти, технології, які вивчаєте, та знаходьте однодумців.",
    category: "General",
    author: "Адміністрація",
    createdAt: "2026-10-01"
  }
];