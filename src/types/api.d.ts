import { LucideIcon } from "lucide-react";

export type Amenity = {
  id: string;
  name?: string;
  icon?: string;
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
  imageUrl: string;
};

export type RoomBase = {
  id: number;
  title: string;
  description: string;
  images: string[];
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

  checkIn?: string;
  checkOut?: string;
  bookings?: RoomBooking[];
  guests?: number;
};

export type Amenity = {
  id: number;
  name: string;
  icon: string;
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

export type RoomWithBooking = RoomBase & Partial<RoomBooking> & {
   checkIn: string | null;
  checkOut: string | null;
  nights: number;
  guests: number;
  taxes: number;
  discount: number;
};

export type Payment = {
  id: number;
  detail: string;
};
export type BookingStatus = "PENDING" | "CONFIRMED" | "CANCELLED";

export type BookingPreview = {
  roomId: number;

  title: string;
  hotelName?: string;
  address: string;
  roomType?: string;
  images: string[];

  pricePerNight: number;
  nights: number;
  guests?: number;

  taxes: number;
  discount: number;
  total: number;
};
export type Guest = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequest: string;
};

export type BookingPayload = {
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
  guest: Guest;
};
