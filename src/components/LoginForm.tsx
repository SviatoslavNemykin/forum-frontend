import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../api/baseApi";
import type { AuthRequest } from "../types/user";

export function LoginForm() {
  const { register, handleSubmit, reset } = useForm<AuthRequest>();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const onSubmit = async (data: AuthRequest) => {
    try {
      const result = await loginUser(data).unwrap();
      if (result.token) {
        localStorage.setItem("token", result.token);
      }
      alert(`Успішний вхід! Вітаємо, ${data.email}`);
      reset();
    } catch (error: any) {
      alert(`Помилка входу: ${error?.data?.message || "Перевірте email та пароль"}`);
    }
  };

  return (
    <div className="auth-card">
      <h3>Вхід</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        <input 
          type="email" 
          placeholder="Введіть email" 
          {...register("email", { required: true })} 
        />
        <input 
          type="password" 
          placeholder="Введіть пароль" 
          {...register("password", { required: true })} 
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Вхід..." : "Увійти"}
        </button>
      </form>
    </div>
  );
}