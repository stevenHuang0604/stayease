import { useQuery } from "@tanstack/react-query";
import { getHotelById } from "../../services/apiHotel";

export function useHotelById(hotelId) {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookmarks-hotel", hotelId],
    queryFn: () => getHotelById(hotelId),
  });

  return { hotels, isLoading, error };
}
