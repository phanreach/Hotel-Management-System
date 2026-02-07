export const QUERY_KEY_ENUM = {
  ROOMS: "rooms",
} as const;

export type QUERY_KEY_ENUM = keyof typeof QUERY_KEY_ENUM;
