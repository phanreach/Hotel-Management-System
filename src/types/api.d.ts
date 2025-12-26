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
