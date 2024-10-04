import { useParams } from "react-router-dom";
import { getReservationById } from "../../services/apiReservations";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useReservationById() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["reservation", id],
    queryFn: () => getReservationById(id),
    initialData: () => {
      // Try to get the data from the existing cache
      return queryClient
        .getQueryData(["reservations"])
        ?.find((r) => r.id === id);
    },
  });

  return { data, isLoading, error };
}
