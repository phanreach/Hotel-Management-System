export const API_ENDPOINT = {
  //auth admin
  LOGIN: "/api/auth/login",
  PROFILE: "auth/profile",
  LOGOUT: "auth/logout",
  REGISTER: "/api/auth/register",

  // room
  ROOMS: "/api/rooms",
  AMENITIES: "/api/amenities", 

  //booking
  BOOKINGS: "/api/bookings",
  MY_BOOKINGS: "/api/bookings/me",

};
export type ApiEndpointProps = (typeof API_ENDPOINT)[keyof typeof API_ENDPOINT];
