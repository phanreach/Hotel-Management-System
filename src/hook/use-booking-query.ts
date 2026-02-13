import { useQuery } from "@tanstack/react-query";
import api from "../app/api/api";
import { API_ENDPOINT } from "../app/api/endpoint";
import { Booking } from "../types/api";

export default function useBookingQuery() {
  const apiFn = async (): Promise<Booking[]> => {
    const res = await api.get<Booking[]>(API_ENDPOINT.BOOKINGS);

    if (!res.data) {
      throw new Error("Failed to fetch bookings");
    }

    return res.data;
  };

  return useQuery<Booking[]>({
    queryKey: ["bookings"],
    queryFn: apiFn,
  });
}
