import { useQuery } from "@tanstack/react-query";
import { getHotels } from "../../services/apiHotel";

export function useHotels() {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: getHotels,
  });

  return { hotels, isLoading, error };
}
