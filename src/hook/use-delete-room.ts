import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../app/api/api";
import { QUERY_KEY_ENUM } from "../constant/query-key-enum";

const deleteRoom = async (roomId: number) => {
  const res = await api.delete(`/api/rooms/${roomId}`);
  return res.data;
};

export default function useDeleteRoom() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ENUM.ROOMS] });
    },
    onError: (error) => {
      console.error("Error deleting room:", error);
      alert("Failed to delete room");
    },
  });
}
