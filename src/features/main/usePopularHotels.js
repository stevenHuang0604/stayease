import { useQuery } from "@tanstack/react-query";

import { getPopularHotels } from "../../services/apiHotel";

export function usePopularHotels() {
  const {
    data: popularHotels,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["popular-hotels"],
    queryFn: getPopularHotels,
  });

  return { popularHotels, isLoading, error };
}
