import { useMutation, useQueryClient } from "@tanstack/react-query";
import { udpateReservation } from "../../services/apiReservations";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useUpdateReservation() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ reservationId, newReservation }) =>
      udpateReservation(reservationId, newReservation),
    onSuccess: () => {
      toast.success("Booking successfully deleted");

      // queryClient.setQueryData(["reservation", Number(id)], data[0]);

      queryClient.invalidateQueries({
        queryKey: ["reservation", id],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
}
