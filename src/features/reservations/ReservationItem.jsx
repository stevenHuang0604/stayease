import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { HiEye, HiOutlineEllipsisVertical, HiTrash } from "react-icons/hi2";

import { formatDate, subtractDates } from "../../helpers/formatDate";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { useDeleteReservation } from "./useDeleteReservation.";

function ReservationItem({ reservation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { mutate: deleteReservation, isLoading: isDeleting } =
    useDeleteReservation();
  const md = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const sm = useMediaQuery({
    query: "(min-width: 640px)",
  });

  function handleToggleModal() {
    setModalOpen((prev) => !prev);
  }

  function handleDelete() {
    deleteReservation(reservation.id);
  }

  // wrap Spinner inside the tr to fix '<div> cannot appear as a child of <tbody>' error
  if (isDeleting)
    return (
      <tr>
        <td>
          <Spinner />
        </td>
      </tr>
    );
  const hotel = reservation.hotels;

  return (
    <tr className="grid grid-cols-md items-center gap-6 border-b border-b-slate-200 px-3 py-3 text-center text-base font-medium text-slate-600 last:border-b-0 md:grid-cols-table lg:px-6 dark:border-b-slate-800 dark:text-slate-400">
      <td>{hotel.country}</td>
      <td>{hotel.city}</td>
      <td className="flex flex-col gap-[]">
        <span>
          {subtractDates(reservation.check_in_date, reservation.check_out_date)}{" "}
          nights stay
        </span>
        <span className="text-xs text-slate-400 dark:text-slate-600">
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

      <td className="relative">
        {sm ? (
          <Button
            variant="ghost"
            color="secondary"
            size="medium"
            onClick={handleToggleModal}
          >
            <HiOutlineEllipsisVertical />
          </Button>
        ) : (
          <>
            <div className="flex items-center justify-center gap-4 text-lg">
              <Link
                to={
                  window.location.pathname === "/"
                    ? window.location.origin
                    : `/app/reservations/${reservation.id}`
                }
                className="flex items-center justify-center gap-4 text-violet-500"
              >
                <span>
                  <HiEye />
                </span>
                <span className="hidden lg:block">Details</span>
              </Link>

              <button
                className="flex items-center justify-center gap-4 text-violet-500"
                onClick={handleDelete}
              >
                <span>
                  <HiTrash />
                </span>
                <span className="hidden lg:block">Delete</span>
              </button>
            </div>
          </>
        )}

        {sm && modalOpen && (
          <div className="absolute left-0 z-10 mt-2 flex items-start justify-start gap-2 overflow-visible border border-slate-100 bg-slate-50 px-6 py-2 text-base shadow-sm lg:flex-col xl:w-[150%] dark:border-slate-900 dark:bg-slate-950">
            <Link
              to={
                window.location.pathname === "/"
                  ? window.location.origin
                  : `/app/reservations/${reservation.id}`
              }
              className="flex items-center justify-center gap-4 text-violet-500"
            >
              <span>
                <HiEye />
              </span>
              <span className="hidden lg:block">Details</span>
            </Link>

            <button
              className="flex items-center justify-center gap-4 text-violet-500"
              onClick={handleDelete}
            >
              <span>
                <HiTrash />
              </span>
              <span className="hidden lg:block">Delete</span>
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}

export default ReservationItem;
