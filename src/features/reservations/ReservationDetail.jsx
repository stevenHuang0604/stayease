import { Link, useLoaderData } from "react-router-dom";
import {
  HiOutlineBuildingStorefront,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import { getReservationById } from "../../services/apiReservations";
import { useHotelById } from "../hotels/useHotelById";
import Spinner from "../../ui/Spinner";
import { formatTime, formatDate } from "../../helpers/formatDate";

function ReservationDetail() {
  const [reservation] = useLoaderData();
  const { hotels, isLoading } = useHotelById(reservation.hotelId);

  if (isLoading) return <Spinner />;
  const hotel = hotels[0];

  return (
    <main className="px-14 py-14 md:px-16 md:py-16">
      <div className="mx-auto flex w-[80%] flex-col gap-8">
        <div className="overflow-hidden rounded-lg shadow-md">
          <div className="flex items-center justify-between bg-violet-500 px-10 py-5 text-lg font-medium text-slate-200">
            <div className="flex items-center gap-4 text-xl font-semibold">
              <HiOutlineHomeModern className="h-8 w-8" />
              <p>10 nights in {hotel.name}</p>
            </div>

            <p>
              {formatDate(new Date(reservation.check_in_date).toISOString())}{" "}
              &mdash;{" "}
              {formatDate(new Date(reservation.check_out_date).toISOString())}
            </p>
          </div>

          <section className="px-10 pb-3 pt-8">
            <div className="flex items-center gap-4 py-2 text-base text-blue-600">
              <FaLocationDot className="flex h-5 w-5 items-center justify-center" />
              <span>{`${hotel.city}, ${hotel.country}`}</span>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-xl font-medium">{hotel.name}</h1>
            </div>

            <div className="flex items-center gap-4 py-2 text-lg font-medium">
              <HiOutlineUsers className="h-5 w-5 text-violet-500" />
              <p>{reservation.guests} guests</p>
            </div>

            <div className="font-base flex items-center gap-4 py-2 text-lg font-medium">
              <HiOutlineBuildingStorefront className="h-5 w-5 text-violet-500" />
              <p>
                {Object.values(reservation.rooms).reduce(
                  (acc, cur) => acc + cur,
                  0,
                )}{" "}
                rooms
              </p>
            </div>

            <div className="mb-auto mt-5 flex items-center gap-4 pb-4 text-base text-zinc-600">
              <FaLocationArrow className="h-5 w-5" />
              <span className="border-b border-b-slate-800">
                {hotel.address}
              </span>
            </div>

            <div className="mt-6 rounded bg-green-100 px-8 py-4 text-green-700">
              <div className="flex items-center gap-4 text-xl">
                <span className="flex items-center gap-2 font-medium">
                  <HiOutlineCurrencyDollar className="h-6 w-6" />
                  Total price
                </span>
                $
                {Object.entries(reservation.rooms)
                  .map(
                    ([roomType, order]) =>
                      hotel.room_types[roomType].price * order,
                  )
                  .reduce((acc, cur) => acc + cur, 0)}
              </div>

              <div className="flex flex-col gap-1 py-2">
                {Object.entries(reservation.rooms).map(([roomType, detail]) => (
                  <div className="font-medium" key={roomType}>
                    <span>
                      {roomType} (${hotel.room_types[roomType].price}/room):{" "}
                      {detail} room ordered
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className="px-10 py-4 text-right text-xs text-slate-400">
            <p>Booked {formatTime(reservation.createdAt)}</p>
          </footer>
        </div>

        <div className="ml-auto">
          <Link
            to={`/app/hotels/${hotel.id}`}
            className="rounded-md bg-violet-600 px-4 py-3 text-right font-medium text-slate-50"
          >
            Hotel details
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ReservationDetail;

export async function loader({ params }) {
  const reservation = await getReservationById(params.id);

  return reservation;
}
