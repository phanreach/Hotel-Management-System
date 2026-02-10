import { LucideIcon } from "lucide-react";

export type Amenity = {
  id: string;
  name?: string;
  icon?: string;
  // description?: string;
};

export type RoomBooking = {
  bookingId: number;
  bookerName: string | null;
  roomResponse: {
    id: number;
    title: string;
    description: string | null;
    amenities: any[]; // you can replace `any` with a proper Amenity type if you have one
    pricePerNight: number;
    roomType: string | null;
    bedSize: string | null;
    bedType: string | null;
    rating: number | null;
    maxGuest: number | null;
    images: string[];
  };
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
  guest: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  nights: number;
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
  guests?: number;

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
