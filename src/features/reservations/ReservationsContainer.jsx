import { useQuery } from "@tanstack/react-query";
import { getReservations } from "../../services/apiReservations";
import Spinner from "../../ui/Spinner";
import ReservationItem from "./ReservationItem";

function ReservationsContainer() {
  const { data: reservations, isLoading } = useQuery({
    queryKey: ["reservations"],
    queryFn: getReservations,
  });

  if (isLoading) return <Spinner />;

  return (
    <>
      <h1 className="mb-8 text-3xl font-semibold leading-snug text-violet-700">
        All Reservations
      </h1>
      <div className="overflow-hidden rounded-lg border border-slate-300">
        <table className="w-full text-sm">
          <thead className="border-b border-b-slate-200 bg-slate-100 font-semibold uppercase tracking-widest text-slate-700">
            <tr className="grid-cols-table grid items-center gap-6 px-6 py-4">
              <th>country</th>
              <th>city</th>
              <th>dates</th>
              <th>guests</th>
              <th>rooms</th>
              <th>amount</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="py-1">
            {reservations.map((reservation) => (
              <ReservationItem reservation={reservation} key={reservation.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ReservationsContainer;
