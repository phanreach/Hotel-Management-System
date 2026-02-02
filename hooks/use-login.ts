import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import axios from "axios";
import api from "@/src/app/api/api";
import { API_ENDPOINT } from "@/src/app/api/endpoint";

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user_id: number;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
};

export default function useLogin() {
  return useMutation({
    mutationFn: async ({ email, password }: LoginPayload) => {
      console.log("REGISTER URL", API_ENDPOINT.LOGIN);

      const res = await api.post<LoginResponse>(API_ENDPOINT.LOGIN, {
        email,
        password,
      });
      return res.data;
    },

    onSuccess: (data) => {
      Cookies.set("accessToken", data.accessToken);
      Cookies.set("refreshToken", data.refreshToken);
      Cookies.set("expiration", String(data.expiresIn));
      Cookies.set("role", data.role);
      Cookies.set("email", data.email);
      Cookies.set("user_id", String(data.user_id));
      Cookies.set("first_name", data.first_name);
      Cookies.set("last_name", data.last_name);
      console.log("Login success", data);
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        console.error("Login error:", error.response?.data || "Login failed");
      }
    },
  });
}
