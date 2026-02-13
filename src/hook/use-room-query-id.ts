import { useQuery } from "@tanstack/react-query";
import { RoomBase } from "@/src/types/api";

export function useRoomByIdQuery(id: number) {
  return useQuery<RoomBase, Error>({
    queryKey: ["room", id],
    queryFn: async (): Promise<RoomBase> => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rooms/${id}`,
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch room with id ${id}`);
      }
      return (await res.json()) as RoomBase;
    },
    enabled: !!id,
  });
}
