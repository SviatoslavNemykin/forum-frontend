// Данные, которые мы отправляем при регистрации и логине
export interface AuthRequest {
  email: string;
  password: string;
}

// Ответ от сервера после успешной регистрации или логина
export interface AuthResponse {
  id: number;
  email: string;
  token?: string; // Если бэкенд возвращает JWT токен
}   