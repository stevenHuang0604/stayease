import { useQuery } from "@tanstack/react-query";
import { getReservations } from "../../services/apiReservations";

export function useReservations() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["reservations"],
    queryFn: getReservations,
  });

  return { data, isLoading, isError, error };
}
