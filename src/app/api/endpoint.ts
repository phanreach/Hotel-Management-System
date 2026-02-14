export const API_ENDPOINT = {
  //auth admin
  LOGIN: "/api/auth/login",
  PROFILE: "auth/profile",
  LOGOUT: "auth/logout",
  REGISTER: "/api/auth/register",

  // room
  ROOMS: "/api/rooms",
  UPDATE_ROOM: (Id: number) => `/api/rooms/${Id}`,
  UPDATE_ROOM_IMAGE: (roomId: number) => `/api/rooms/${roomId}/update-images`,
  SYNC_ROOM_IMAGES: (roomId: number) => `/api/rooms/${roomId}/sync-images`,
  AMENITIES: "/api/amenities",
  CHECK_AVAILABILITY: "/api/bookings/availability",
  // src/app/api/endpoint.ts
  MY_BOOKINGS: "/api/bookings/me",
  CANCEL_BOOKING: (bookingId: number) => `/api/bookings/${bookingId}/cancel`,
  //booking
  BOOKINGS: "/api/bookings",
};
export type ApiEndpointProps = (typeof API_ENDPOINT)[keyof typeof API_ENDPOINT];
