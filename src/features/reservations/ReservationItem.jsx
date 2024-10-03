import { formatDate, subtractDates } from "../../helpers/formatDate";
import { useHotelById } from "../hotels/useHotelById";
import Spinner from "../../ui/Spinner";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { useMediaQuery } from "react-responsive";

function ReservationItem({ reservation }) {
  const { hotels, isLoading } = useHotelById(reservation.hotelId);
  const md = useMediaQuery({
    query: "(min-width: 768px)",
  });
  // wrap Spinner inside the tr to fix '<div> cannot appear as a child of <tbody>' error
  if (isLoading)
    return (
      <tr>
        <td>
          <Spinner />
        </td>
      </tr>
    );
  const hotel = hotels[0];

  return (
    <tr className="md:grid-cols-table grid-cols-md grid items-center gap-6 border-b border-b-slate-200 px-3 py-3 text-center text-base font-medium text-slate-600 last:border-b-0 lg:px-6">
      <td>{hotel.country}</td>
      <td>{hotel.city}</td>
      <td className="flex flex-col gap-[]">
        <span>
          {subtractDates(reservation.check_in_date, reservation.check_out_date)}{" "}
          nights stay
        </span>
        <span className="text-xs text-slate-400">
          {formatDate(new Date(reservation.check_in_date).toISOString())}{" "}
          &mdash;{" "}
          {formatDate(new Date(reservation.check_out_date).toISOString())}
        </span>
      </td>
      {md && (
        <>
          <td>{reservation.guests} guests</td>
          <td>
            {Object.values(reservation.rooms).reduce(
              (acc, cur) => acc + Number(cur),
              0,
            )}{" "}
            rooms
          </td>
          <td>
            $
            {Object.entries(reservation.rooms)
              .map(
                ([roomType, order]) => hotel.room_types[roomType].price * order,
              )
              .reduce((acc, cur) => acc + cur, 0)}
          </td>
        </>
      )}

      <td>
        <Link
          to={`reservations/${reservation.id}`}
          className="flex items-center justify-center gap-1 text-violet-500"
        >
          <span>See details</span>
          <span className="hidden lg:block">
            <HiOutlineArrowRight />
          </span>
        </Link>
      </td>
    </tr>
  );
}

export default ReservationItem;
