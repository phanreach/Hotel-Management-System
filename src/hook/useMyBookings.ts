import { useQuery } from "@tanstack/react-query";
import { RoomBooking } from "../types/api";
import { fetchMyBookings } from "../app/api/api";


export default function useMyBookingsQuery() {
  return useQuery<RoomBooking[]>({
    queryKey: ["my-bookings"],
    queryFn: fetchMyBookings,
    enabled: typeof window !== "undefined", // avoid SSR crash
  });
}
