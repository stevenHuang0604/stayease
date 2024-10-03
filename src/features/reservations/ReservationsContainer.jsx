import { useQuery } from "@tanstack/react-query";
import { getReservations } from "../../services/apiReservations";
import Spinner from "../../ui/Spinner";
import ReservationItem from "./ReservationItem";
import { fake_data } from "../../fake_data/fake_data";
import { useMediaQuery } from "react-responsive";

function ReservationsContainer({ page = "reservations" }) {
  const md = useMediaQuery({
    query: "(min-width: 768px)",
  });
  let reservations;
  const { data, isLoading } = useQuery({
    queryKey: ["reservations"],
    queryFn: getReservations,
  });

  if (isLoading) return <Spinner />;

  console.log(data);

  if (page === "home") {
    reservations = fake_data;
  } else if (page === "app") {
    reservations = data.slice(-3);
  } else {
    reservations = data;
  }

  console.log(reservations);

  return (
    <div className="px-0 py-8 md:p-8">
      <h1 className="mb-8 text-3xl font-semibold leading-snug text-violet-700">
        {page === "app" ? "Recent Reservations" : "All Reservations"}
      </h1>
      <div className="overflow-hidden rounded-lg border border-slate-300">
        <table className="w-full text-sm">
          <thead className="border-b border-b-slate-200 bg-slate-100 font-semibold uppercase tracking-widest text-slate-700">
            <tr className="md:grid-cols-table grid-cols-md grid items-center gap-6 px-3 py-2 lg:px-6 lg:py-4">
              <th>country</th>
              <th>city</th>
              <th>dates</th>

              {md && (
                <>
                  <th>guests</th>
                  <th>rooms</th>
                  <th>amount</th>
                </>
              )}

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
