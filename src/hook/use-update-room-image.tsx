import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_ENDPOINT } from "../app/api/endpoint";
import api from "../app/api/api";
import { toast } from "sonner";

export type UpdateRoomImagePayload = {
  imageId: number;
  image: File;
};

export default function useUpdateRoomImage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ imageId, image }: UpdateRoomImagePayload) => {
      const formData = new FormData();
      formData.append("image", image);

      const res = await api.put(
        API_ENDPOINT.UPDATE_ROOM_IMAGE(imageId),
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      return res.data;
    },

    onMutate: () => {
      const toastId = toast.loading("Updating image...");
      return { toastId };
    },

    onSuccess: (_data, _variables, context) => {
      toast.success("Image updated successfully", {
        id: context?.toastId,
      });

      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },

    onError: (error: any, _variables, context) => {
      toast.error(error?.response?.data?.message || "Failed to update image", {
        id: context?.toastId,
      });
    },
  });
}
