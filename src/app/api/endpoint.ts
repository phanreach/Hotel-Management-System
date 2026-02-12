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

  //booking
  BOOKINGS: "/api/bookings",
  MY_BOOKINGS: "/api/bookings/me",
};
export type ApiEndpointProps = (typeof API_ENDPOINT)[keyof typeof API_ENDPOINT];
