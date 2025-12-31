import type { LucideIcon } from "lucide-react";
export type Room = {
  id: string;
  title: string;
  description: string;
  images: string[];
  pricePerNight: number;
  rating?: number;
  maxGuests: number;
  amenities: string[];
  isAvailable: boolean;
  roomType: string;
  size?: number;
  bedType?: string;
};
export type categories = {
  id: number;
  rooType: string;
};

export type Amenity = {
  id: string;
  label: string;
  icon: LucideIcon;
};
export type Payment = {
  id: number;
  detail: string;
};
// types/booking.ts
export type BookingSummary = {
  id: string;
  hotelName: string;
  imageUrl: string;
  roomType: string;
  address: string;
  checkIn: {
    date: string;
    time: string;
  };
  checkOut: {
    date: string;
    time: string;
  };
  nights: number;
  guests: number;
  pricePerNight: number;
  taxes: number;
  discount: number;
  status: BookingStatus;
};
export type BookingStatus = "upcoming" | "completed" | "cancelled";
