export const API_ENDPOINT = {
  ROOMS: "/api/rooms",
};
export type ApiEndpointProps = (typeof API_ENDPOINT)[keyof typeof API_ENDPOINT];
