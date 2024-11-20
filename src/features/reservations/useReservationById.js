import { useParams } from "react-router-dom";
import { getReservationById } from "../../services/apiReservations";
import { useQuery } from "@tanstack/react-query";

export function useReservationById() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["reservation", id],
    queryFn: () => getReservationById(id),
  });

  return { data, isLoading, error };
}
