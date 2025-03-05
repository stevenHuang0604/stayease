import Spinner from "../../ui/Spinner";
import ReservationItem from "./ReservationItem";
import { fake_data } from "../../fake_data/fake_data";
import { useReservations } from "./useReservations";
import ErrorFetch from "../../ui/ErrorFetch";

function ReservationsContainer({ page = "reservations" }) {
  const { data, isLoading, isError, error } = useReservations();
  let reservations;

  if (isError) return <ErrorFetch error={error} />;

  if (isLoading) return <Spinner />;

  if (page === "home") {
    reservations = fake_data;
  } else if (page === "app") {
    reservations = data.slice(-3);
  } else {
    reservations = data;
  }

  return (
    <div className="px-0 py-8 md:p-8">
      <h1 className="mb-8 text-3xl font-semibold leading-snug text-violet-700 dark:text-violet-300">
        {page === "app" ? "Recent Reservations" : "All Reservations"}
      </h1>
      <div className="rounded-lg border border-slate-300 dark:border-slate-700">
        <table className="w-full text-sm">
          <thead className="border-b border-b-slate-200 bg-slate-100 font-semibold uppercase tracking-widest text-slate-700 dark:border-b-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <tr className="grid grid-cols-md items-center gap-6 px-3 py-2 md:grid-cols-table lg:px-6 lg:py-4">
              <th>country</th>
              <th>city</th>
              <th>dates</th>

              <th className="hidden md:block">guests</th>
              <th className="hidden md:block">rooms</th>
              <th className="hidden md:block">amount</th>

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
    </div>
  );
}

export default ReservationsContainer;
