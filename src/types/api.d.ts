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
