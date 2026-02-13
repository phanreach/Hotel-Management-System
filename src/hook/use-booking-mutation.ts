import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { API_ENDPOINT } from "../app/api/endpoint";
import { BookingPayload, RoomBooking } from "../types/api";

export const useBookingMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bookRoom = async (
    payload: BookingPayload,
  ): Promise<RoomBooking | null> => {
    setLoading(true);
    setError(null);
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
      const token = Cookies.get("accessToken"); // read JWT token from cookie
      const response = await axios.post<RoomBooking>(
        `${BASE_URL}${API_ENDPOINT.BOOKINGS}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`, // send JWT to backend
          },
          withCredentials: true, // required if backend uses cookies
        },
      );
      return response.data;
    } catch (err: any) {
      setError(err?.response?.data?.message || err.message || "Booking failed");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { bookRoom, loading, error };
};
