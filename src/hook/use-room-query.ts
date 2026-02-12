import { useQuery,keepPreviousData  } from "@tanstack/react-query";
import { RoomBase } from "../types/api";

type PaginatedRooms = {
  content: RoomBase[];
  totalPages: number;
  totalElements: number;
  number: number;     // current page (Spring)
  first: boolean;
  last: boolean;
};
export default function UseRoomQuery(page: number = 0, size: number = 6) {
  const apiFn = async (): Promise<PaginatedRooms> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/rooms?page=${page}&size=${size}`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch rooms");
    }

    return res.json();
  };
  return useQuery<PaginatedRooms>({
    queryKey: ["rooms", page, size],
    queryFn: apiFn,
    placeholderData: keepPreviousData, 
  });
}
