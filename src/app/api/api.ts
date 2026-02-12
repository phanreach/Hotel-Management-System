import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { API_ENDPOINT } from "./endpoint";
import { RoomBooking } from "@/src/types/api";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://hotel-api.mockexamkh.com";

if (!BASE_URL) {
  throw new Error(
    "NEXT_PUBLIC_API_URL is not defined in environment variables.",
  );
}

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  if (config.method === "options") return config;

  const token = Cookies.get("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    toast.error(
      (error.response?.data as { message?: string })?.message ||
        "Something went wrong!",
    );

    return Promise.reject(error);
  },
);

export const loginApi = (username: string, password: string) =>
  api.post(API_ENDPOINT.LOGIN, { username, password });

export const meApi = () => api.get(API_ENDPOINT.PROFILE);

export const refreshToken = async (): Promise<string | null> => {
  try {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken) return null;

    const response = await axios.post(`${BASE_URL}/api/auth/refresh`, {
      refreshToken,
    });

    const newAccessToken = response.data?.accessToken;
    if (newAccessToken) {
      Cookies.set("accessToken", newAccessToken);
      return newAccessToken;
    }

    return null;
  } catch (err) {
    console.error("Failed to refresh token", err);
    return null;
  }
};

export const logoutApi = () =>
  api.post<{ message: string }>(API_ENDPOINT.LOGOUT);

export const getAmenitiesApi = () => api.get(API_ENDPOINT.AMENITIES);

export const fetchMyBookings = async (): Promise<RoomBooking[]> => {
  const token = Cookies.get("accessToken");

  if (!token) {
    throw new Error("Not authenticated,Please log in to view your bookings.");
  }

  const res = await fetch(`${BASE_URL}/api/bookings/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return res.json();
};

export default api;
