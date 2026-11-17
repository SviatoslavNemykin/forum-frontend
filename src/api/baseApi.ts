import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../types/post";
import type { AuthRequest, AuthResponse } from "../types/user";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    // 1. Получение постов
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
    
    // 2. Регистрация
    registerUser: builder.mutation<AuthResponse, AuthRequest>({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),

    // 3. Логин
    loginUser: builder.mutation<AuthResponse, AuthRequest>({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { 
  useGetPostsQuery, 
  useRegisterUserMutation, 
  useLoginUserMutation 
} = baseApi;