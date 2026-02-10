import { useQuery } from "@tanstack/react-query";
import { Amenity } from "../types/api";
import { API_ENDPOINT } from "../app/api/endpoint";

export default function useAmenitiesQuery() {
  const apiFn = async (): Promise<Amenity[]> => {
    const res = await fetch(API_ENDPOINT.AMENITIES);
    if (!res.ok) {
      throw new Error("Failed to fetch amenities");
    }
    return res.json();
  };

  return useQuery<Amenity[]>({
    queryKey: ["amenities"],
    queryFn: apiFn,
  });
}
