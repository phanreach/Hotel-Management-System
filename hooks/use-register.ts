import { useMutation } from "@tanstack/react-query";
import api from "@/src/app/api/api";

export type RegisterPayload = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
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
  phone: string;
};

export default function useRegister() {
  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: async (payload: RegisterPayload) => {
      const res = await api.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
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
