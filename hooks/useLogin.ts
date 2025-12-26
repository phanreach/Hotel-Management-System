"use client";

import { addToast } from "@heroui/toast";
import { useMutation } from "@tanstack/react-query";

interface LoginResponse {
  success: boolean;
  user?: { id: string; name: string; email: string };
  token?: string;
}

export const useLogin = () => {
  const loginMutation = useMutation<LoginResponse, Error, any>({
    mutationFn: async (credentials) => {
      // Simulate API Call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Logging in with:", credentials);
      
      // Returning Dummy Data as requested
      return {
        success: true,
        user: { id: "1", name: "John Doe", email: credentials.email },
        token: "dummy-jwt-token",
      };
    },
    onSuccess: (data) => {
      addToast({
        title: "Login Successful",
        description: "Welcome back",
        color: "success"
      })
      console.log("Login Successful", data);
    },
  });

  return {
    login: loginMutation.mutate,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
    data: loginMutation.data,
  };
};