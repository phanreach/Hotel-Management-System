export const API_ENDPOINT = {
  //auth admin
  LOGIN: "/api/auth/login",
  PROFILE: "auth/profile",
  LOGOUT: "auth/logout",
  REGISTER: "/api/auth/register",

  // room
  ROOMS: "/api/rooms",
  AMENITIES: "/api/amenities", 

};
export type ApiEndpointProps = (typeof API_ENDPOINT)[keyof typeof API_ENDPOINT];
