import { useQuery } from "@tanstack/react-query";
import { getHotelsByDestination } from "../../services/apiHotel";
import { useSearchParams } from "react-router-dom";

export function useHotelsByDestination() {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination");

  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hotels", destination],
    queryFn: () => getHotelsByDestination(destination),
  });

  return { hotels, isLoading, error };
}
