import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../app/api/api";
import { API_ENDPOINT } from "../app/api/endpoint";
import { toast } from "sonner";

export default function useSyncRoomImages() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      roomId,
      keepImages,
    }: {
      roomId: number;
      keepImages: string[];
    }) => {
      return api.put(API_ENDPOINT.SYNC_ROOM_IMAGES(roomId), keepImages);
    },

    onMutate: () => {
      const toastId = toast.loading("Syncing images...");
      return { toastId };
    },

    onSuccess: (_data, _vars, ctx) => {
      toast.success("Images updated", { id: ctx?.toastId });
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },

    onError: (error: any, _vars, ctx) => {
      toast.error(error?.response?.data?.message || "Failed to sync images", {
        id: ctx?.toastId,
      });
    },
  });
}
