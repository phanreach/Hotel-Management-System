import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/src/app/api/api";
import { API_ENDPOINT } from "@/src/app/api/endpoint";

export function useCancelBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (bookingId: number) => {
      const res = await api.put(API_ENDPOINT.CANCEL_BOOKING(bookingId));
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-bookings"] });
      alert("Booking cancelled successfully");
    },
    onError: (err) => {
      console.error("Failed to cancel booking:", err);
      alert("Failed to cancel booking. Please try again.");
    },
  });
}
