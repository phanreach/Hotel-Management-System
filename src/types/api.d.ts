import { LucideIcon } from "lucide-react";

export type Amenity = {
  id: string;
  name?: string;
  icon?: string;
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

// src/types/api.ts

export type BookingStatus = "pending" | "confirmed" | "cancelled" | "completed";

export type RoomBooking = {
  bookingId?: number;
  bookerName?: string | null;
  bookerEmail?: string | null;
  bookerPhone?: string | null;
  bookerSpecialRequest?: string | null;

  roomResponse: {
    id?: number;
    title?: string;
    description?: string | null;
    amenities?: string[];
    pricePerNight?: number;
    roomType?: string;
    bedSize?: string | null;
    bedType?: string | null;
    rating?: number | null;
    maxGuest?: number | null;
    images?: string[];
  };

  checkInDate: string;
  checkOutDate: string;
  totalPrice?: number;
  nights: number;

  status?: BookingStatus;
};

export interface BookingRoom {
  id: number;
  title: string;
  images: string[];
  roomType: string;
  bedType: string | null;
}

export interface Booking {
  bookingId: number;
  checkInDate: string;
  checkOutDate: string;
  nights: number;
  totalPrice: number;
  bookerName?: string;
  roomResponse: BookingRoom;
}

export type BookingPayload = {
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
};

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

export type RoomWithBooking = Omit<RoomBase, "checkIn" | "checkOut"> & {
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

export type BookingSummary = {
  id: string;
  hotelName: string;
  imageUrl: string;
  roomType: string;
};
