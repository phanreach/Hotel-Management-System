import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import axios from "axios";
import api from "../app/api/api";
import { QUERY_KEY_ENUM } from "../constant/query-key-enum";
import { Amenity } from "../types/api";
import { API_ENDPOINT } from "../app/api/endpoint";

export type createRoomPayload = {
  title: string | null;
  description: string | null;
  pricePerNight: number;
  roomType: string;
  bedSize: number;
  bedType: string;
  rating: number;
  maxGuest: number;
  amenities: Amenity[];
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

    onSuccess: ({ toastId }) => {
      toast.dismiss(toastId);
      toast.success("Room added successfully", { id: toastId });
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
