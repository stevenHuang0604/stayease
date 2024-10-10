import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getHotelsByDestination } from "../../services/apiHotel";
import { useEffect } from "react";

export function useHotelsByDestination() {
  const queryClient = useQueryClient();
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

  // Remove query key from cache if there is no data in the database
  useEffect(() => {
    if (hotels && hotels.length === 0)
      queryClient.removeQueries({ queryKey: ["hotels", destination] });
  }, [hotels, destination, queryClient]);

  return { hotels, isLoading, error };
}
