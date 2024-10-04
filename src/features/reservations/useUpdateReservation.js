import { useMutation, useQueryClient } from "@tanstack/react-query";
import { udpateReservation } from "../../services/apiReservations";
import toast from "react-hot-toast";

export function useUpdateReservation(reservation) {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ id, newReservation }) =>
      udpateReservation(id, newReservation),
    onSuccess: (data) => {
      toast.success("Booking successfully deleted");

      queryClient.setQueryData(["reservation", reservation.id], data[0]);

      queryClient.invalidateQueries({
        queryKey: ["reservations"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
}
