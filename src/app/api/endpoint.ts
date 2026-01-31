export const API_ENDPOINT = {
  //auth admin
  LOGIN: "/api/auth/login",
  PROFILE: "auth/profile",
  LOGOUT: "auth/logout",

  ROOMS: "/api/rooms",
};
export type ApiEndpointProps = (typeof API_ENDPOINT)[keyof typeof API_ENDPOINT];
