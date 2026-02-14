// src/hook/useMyBookings.ts
import { useQuery } from "@tanstack/react-query";
import api from "@/src/app/api/api";
import { API_ENDPOINT } from "@/src/app/api/endpoint";
import type { RoomBooking } from "@/src/types/api";

export default function useMyBookingsQuery() {
  return useQuery<RoomBooking[]>({
    queryKey: ["my-bookings"], // make sure this matches invalidateQueries
    queryFn: async () => {
      const res = await api.get(API_ENDPOINT.MY_BOOKINGS);
      return res.data as RoomBooking[];
    },
  });
}
