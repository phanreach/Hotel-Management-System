import { useState } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../app/api/endpoint";

export type BookingPayload = {
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
  guest: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    specialRequest: string;
  };
};

export const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bookRoom = async (payload: BookingPayload) => {
    setLoading(true);
    setError(null);
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await axios.post(BASE_URL + API_ENDPOINT.BOOKINGS, payload);
      return response.data;
    } catch (err: any) {
      setError(err?.response?.data?.message || "Booking failed");
      return null; // 👈 no throw
    } finally {
      setLoading(false);
    }
  };

  return { bookRoom, loading, error };
};
