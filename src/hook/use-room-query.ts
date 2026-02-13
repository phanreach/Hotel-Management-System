import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { RoomBase } from "../types/api";
import { API_ENDPOINT } from "../app/api/endpoint";
import api from "../app/api/api";

type PaginatedRooms = {
  content: RoomBase[];
  totalPages: number;
  totalElements: number;
  number: number;
  first: boolean;
  last: boolean;
};
export default function UseRoomQuery(page: number = 0, size: number = 6) {
  const apiFn = async (): Promise<PaginatedRooms> => {
    const res = await api.get(API_ENDPOINT.ROOMS, {
      params: { page, size },
    });

    if (!res.data) {
      throw new Error("Failed to fetch rooms");
    }
    return res.data;
  };
  return useQuery<PaginatedRooms>({
    queryKey: ["rooms", page, size],
    queryFn: apiFn,
    placeholderData: keepPreviousData,
  });
}
