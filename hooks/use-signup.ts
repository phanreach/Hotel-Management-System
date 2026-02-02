"use client";

import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "@/src/app/api/endpoint";
import api from "@/src/app/api/api";
import axios from "axios";
import { toast } from "sonner";

interface SignUpPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export default function useSignUp() {
  return useMutation({
    mutationFn: async (payload: SignUpPayload) => {
      console.log("REGISTER URL", API_ENDPOINT.REGISTER);

      console.log("register", payload);
      const res = await api.post(API_ENDPOINT.REGISTER, payload);
      return res.data;
    },
    onSuccess: () => {
      const messages = "Signup successful";
      toast.success(messages);
    },
    onError: (error: unknown) => {
      let message = "Failed to signup";
      if (axios.isAxiosError(error))
        message = error.response?.data?.message || message;
      else if (error instanceof Error) message = error.message;
      toast.error(message);
    },
  });
}
