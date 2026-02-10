import { LucideIcon } from "lucide-react";

export type Amenity = {
  id: string;
  name?: string;
  icon?: string;
  // description?: string;
};

export type RoomBooking = {
  id: number;
  customerName: string;
  startDate: string;
  endDate: string;
  nights: number;
  taxes: number;
  discount: number;
  guests: number;
  address: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
};

export type RoomImage = {
  id: number;
  images: string;
};
export type RoomBase = {
  id: number;
  title: string;
  description: string;
  images: RoomImage[];
  pricePerNight: number;

  rating?: number;
  maxGuest?: number;
  amenities?: Amenity[];
  isAvailable?: boolean;
  roomType?: string;
  bedSize?: number;
  bedType?: string;

  serviceFee?: number;
  cleaningFee?: number;
  hotelName?: string;

  checkinDate?: string;
  checkoutDate?: string;
  bookings?: RoomBooking[];
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
};

export type RoomWithBooking = RoomBase & RoomBooking;

export type Payment = {
  id: number;
  detail: string;
};
export type BookingStatus = "upcoming" | "completed" | "cancelled";
