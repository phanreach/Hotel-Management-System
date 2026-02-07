import { useQuery } from "@tanstack/react-query";
import { Amenity } from "../types/api";

export default function useAmenitiesQuery() {
  const apiFn = async (): Promise<Amenity[]> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/amenities`
    );
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