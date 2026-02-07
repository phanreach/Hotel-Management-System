import { useMutation } from "@tanstack/react-query";
import api from "@/src/app/api/api";
import { API_ENDPOINT } from "@/src/app/api/endpoint";

export type RegisterPayload = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user_id: number;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
};

export default function useRegister() {
  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: async (payload) => {
      const res = await api.post<RegisterResponse>(
        API_ENDPOINT.REGISTER,
        payload,
      );
      return res.data;
    },
    onSuccess: (data) => {
      console.log("Registration success:", data);
    },
    onError: (error) => {
      console.error("Registration error:", error.message);
    },
  });
}
