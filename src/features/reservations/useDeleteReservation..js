import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReservationById } from "../../services/apiReservations";
import toast from "react-hot-toast";

export function useDeleteReservation() {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: deleteReservationById,
    onSuccess: () => {
      toast.success("Booking successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["reservations"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading, error };
}
