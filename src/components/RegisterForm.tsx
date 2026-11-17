import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../api/baseApi";
import type { AuthRequest } from "../types/user";

export function RegisterForm() {
  const { register, handleSubmit, reset } = useForm<AuthRequest>();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const onSubmit = async (data: AuthRequest) => {
    try {
      const result = await registerUser(data).unwrap();
      alert(`Успішна реєстрація! Користувач: ${result.email || data.email}`);
      reset();
    } catch (error: any) {
      alert(`Помилка реєстрації: ${error?.data?.message || "Спробуйте ще раз"}`);
    }
  };

  return (
    <div className="auth-card">
      <h3>Реєстрація</h3>
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
          {isLoading ? "Реєстрація..." : "Зареєструватися"}
        </button>
      </form>
    </div>
  );
}