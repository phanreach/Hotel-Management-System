import { useMutation } from "@tanstack/react-query";
import api from "../app/api/api";

export type UploadRoomImageRequest = {
  roomId: string | number;
  images: File[];
};

export default function useRoomImageMutation() {
  return useMutation({
    mutationFn: async (payload: UploadRoomImageRequest) => {
      const formData = new FormData();
      payload.images.forEach((file) => formData.append("images", file));
      console.log("room id", payload.roomId);
      const res = await api.post(
        `/api/rooms/upload-images/${payload.roomId}`,
        formData,
      );

      return res.data;
    },
  });
}
