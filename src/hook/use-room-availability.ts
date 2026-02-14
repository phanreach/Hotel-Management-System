import { useQuery } from "@tanstack/react-query";
import api from "@/src/app/api/api";
import { API_ENDPOINT } from "../app/api/endpoint";

export type RoomAvailabilityResponse = {
  available: boolean;
  bookedDates: string[]; // always present
};

export function useRoomAvailability(roomId?: number) {
  return useQuery<RoomAvailabilityResponse>({
    queryKey: ["room-availability", roomId],
    enabled: !!roomId,
    queryFn: async () => {
      const res = await api.get(API_ENDPOINT.CHECK_AVAILABILITY, {
        params: { roomId },
      });
      return {
        available: res.data.available ?? false,
        bookedDates: res.data.bookedDates ?? [],
      };
    },
  });
}
