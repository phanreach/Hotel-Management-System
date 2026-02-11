import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../app/api/api";
import { API_ENDPOINT } from "../app/api/endpoint";
import { toast } from "sonner";
import { RoomImage } from "../types/api";

export type UpdateRoomPayload = {
  id: number;
  payload: UpdateRoom;
};

export type UpdateRoom = {
  title: string;
  description: string;
  pricePerNight: number;
  roomType: string;
  bedSize: number;
  bedType: string;
  rating: number;
  maxGuest: number;
  amenityIds: number[];
};

export const updateRoom = async ({ id, payload }: UpdateRoomPayload) => {
  const res = await api.put(API_ENDPOINT.UPDATE_ROOM(id), payload);
  return res.data;
};

export default function useRoomUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRoom,

    onMutate: () => {
      const toastId = toast.loading("Updating room...");
      return { toastId };
    },

    onSuccess: (_data, _variables, context) => {
      toast.success("Room updated successfully", {
        id: context?.toastId,
      });

      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },

    onError: (error: any, _variables, context) => {
      toast.error(error?.response?.data?.message || "Failed to update room", {
        id: context?.toastId,
      });
    },
  });
}
