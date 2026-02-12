import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import axios from "axios";
import api from "../app/api/api";
import { QUERY_KEY_ENUM } from "../constant/query-key-enum";
import { API_ENDPOINT } from "../app/api/endpoint";

export type createRoomPayload = {
  title: string;
  description: string;
  pricePerNight: number;
  roomType: string;
  bedSize: number;
  bedType: string;
  rating?: number;
  maxGuest: number;
  amenityIds?: number[];
};

export default function useRoomMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: createRoomPayload) => {
      const res = await api.post(API_ENDPOINT.ROOMS, payload);

      return res.data;
    },
    onMutate: () => {
      const toastId = toast.loading("Adding room...");
      return { toastId };
    },

    onSuccess: (_data, _variables, context) => {
      if (context?.toastId) {
        toast.dismiss(context.toastId);
        toast.success("Room added successfully");
      }

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_ENUM.ROOMS],
      });
    },

    onError: (error: unknown, _variables, context) => {
      let message = "Failed to add room";
      if (axios.isAxiosError(error))
        message = error.response?.data?.message || message;
      else if (error instanceof Error) message = error.message;
      if (context?.toastId) toast.dismiss(context.toastId);
      toast.error(message);
    },
  });
}
