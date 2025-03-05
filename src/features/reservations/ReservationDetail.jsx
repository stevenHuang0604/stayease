import { Link } from "react-router-dom";
import {
  HiOutlineBuildingStorefront,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiPencil,
} from "react-icons/hi2";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";

import Spinner from "../../ui/Spinner";
import {
  formatTime,
  formatDate,
  subtractDates,
} from "../../helpers/formatDate";
import Button from "../../ui/Button";
import { useEffect, useMemo, useReducer, useState } from "react";
import SearchItem from "../../ui/SearchItem";
import { FiCalendar, FiUsers } from "react-icons/fi";

import { useUpdateReservation } from "./useUpdateReservation";
import { useReservationById } from "./useReservationById";

const initialState = {
  checkInDate: "",
  checkOutDate: "",
  guests: 1,
  rooms: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "origin_state_inject":
      return {
        ...action.payload,
      };

    case "check_in_date_edit":
      return {
        ...state,
        checkInDate: action.payload,
      };
    case "check_out_date_edit":
      return {
        ...state,
        checkOutDate: action.payload,
      };
    case "guests_edit":
      return {
        ...state,
        guests: action.payload,
      };

    case "rooms_edit":
      return {
        ...state,
        rooms: action.payload,
      };
    default:
      throw new Error("Edit failed!");
  }
};

function ReservationDetail() {
  const { data, isLoading: isFetching } = useReservationById();

  const { mutate: updateReservation, isLoading: isUpdating } =
    useUpdateReservation();

  const [formData, dispatch] = useReducer(reducer, initialState);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // prevent from the dependencies of useEffect Hook change on every render.
  const reservation = useMemo(() => {
    return data || {};
  }, [data]);

  useEffect(() => {
    // check if reservation equals data and formData.checkInDate is the same as initial state so that we can do this side effect, else we will repeatly  trigger this effect and cause infinite re-rendering.
    if (reservation === data && formData.checkInDate === "") {
      dispatch({
        type: "origin_state_inject",
        payload: {
          checkInDate: reservation.check_in_date,
          checkOutDate: reservation.check_out_date,
          guests: reservation.guests,
          rooms: reservation.rooms,
        },
      });
    }
  }, [reservation, formData, data]);

  if (isFetching || isUpdating) return <Spinner />;
  const hotel = reservation?.hotels;

  function handleCheckInDateChange(date) {
    dispatch({ type: "check_in_date_edit", payload: formatDate(date) });
  }

  function handleCheckOutDateChange(date) {
    dispatch({ type: "check_out_date_edit", payload: formatDate(date) });
  }

  function handleGuestsChange(newGuests) {
    dispatch({ type: "guests_edit", payload: newGuests });
  }

  function handleRoomsChange(newRooms) {
    dispatch({ type: "rooms_edit", payload: newRooms });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsEditModalOpen(false);

    const roomLength = Object.values(formData.rooms).reduce(
      (acc, cur) => acc + cur,
      0,
    );

    if (
      formData.checkInDate &&
      formData.checkOutDate &&
      roomLength &&
      subtractDates(formData.checkInDate, formData.checkOutDate) > 0
    ) {
      const newReservation = {
        createdAt: new Date().toISOString(),
        check_in_date: formData.checkInDate,
        check_out_date: formData.checkOutDate,
        rooms: formData.rooms,
        guests: formData.guests,
        hotelId: hotel.id,
      };

      updateReservation({ reservationId: reservation.id, newReservation });
    }
  }

  function handleToggleModal() {
    setIsEditModalOpen((prev) => !prev);
  }

  return (
    <main className="px-8 py-14 md:px-16 md:py-16">
      <div className="mx-auto flex flex-col gap-8 md:w-[80%]">
        <div className="overflow-hidden rounded-lg shadow-lg dark:shadow-slate-400/50">
          <div className="fvc justify-between bg-violet-500 px-6 py-5 text-base font-medium text-slate-200 md:px-10 md:text-lg dark:text-slate-800">
            <div className="fvc gap-4 text-xl font-semibold">
              <HiOutlineHomeModern className="h-8 w-8" />
              <p>10 nights in {hotel.name}</p>
            </div>

            <p>
              {formatDate(new Date(reservation.check_in_date).toISOString())}{" "}
              &mdash;{" "}
              {formatDate(new Date(reservation.check_out_date).toISOString())}
            </p>
          </div>

          <section className="px-6 pb-3 pt-8 md:px-10">
            <div className="fvc gap-4 py-2 text-base text-blue-500">
              <FaLocationDot className="flex h-5 w-5 items-center justify-center" />
              <span>{`${hotel.city}, ${hotel.country}`}</span>
            </div>

            <div className="fvc mb-4 justify-between">
              <h1 className="text-xl font-medium text-slate-800 dark:text-slate-200">
                {hotel.name}
              </h1>
            </div>

            <div className="fvc gap-4 py-2 text-lg font-medium text-slate-800 dark:text-slate-200">
              <HiOutlineUsers className="h-5 w-5 text-violet-500" />
              <p>{reservation.guests} guests</p>
            </div>

            <div className="font-base fvc gap-4 py-2 text-lg font-medium text-slate-800 dark:text-slate-200">
              <HiOutlineBuildingStorefront className="h-5 w-5 text-violet-500" />
              <p>
                {Object.values(reservation.rooms).reduce(
                  (acc, cur) => acc + cur,
                  0,
                )}{" "}
                rooms
              </p>
            </div>

            <div className="fvc mb-auto mt-5 gap-4 pb-4 text-base text-zinc-600 dark:text-zinc-400">
              <FaLocationArrow className="h-5 w-5" />
              <span className="border-b border-b-slate-800">
                {hotel.address}
              </span>
            </div>

            <div className="mt-6 rounded bg-green-100 px-8 py-4 text-green-700 dark:bg-green-900 dark:text-green-300">
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

          <footer className="fvc justify-between px-6 py-4 text-xs text-slate-400 md:px-10 dark:text-slate-600">
            <Button
              variant="outline"
              color="primary"
              size="medium"
              onClick={handleToggleModal}
            >
              <div className="fc gap-2">
                <span>
                  <HiPencil />
                </span>
                <span className="hidden lg:block">Edit</span>
              </div>
            </Button>

            <p>Booked {formatTime(reservation.createdAt)}</p>
          </footer>
        </div>

        <div className="ml-auto">
          <Link
            to={`/app/hotels/${hotel.id}`}
            className="rounded-md bg-violet-600 px-4 py-3 text-right font-medium text-slate-50 dark:bg-violet-400 dark:text-slate-950"
          >
            Hotel details
          </Link>
        </div>

        {isEditModalOpen && (
          <div className="rounded-md border border-slate-200 p-8 dark:border-slate-800">
            <h3 className="pb-4 text-lg font-medium text-slate-800 dark:text-slate-200">
              Editing ...
            </h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <SearchItem
                  fieldName="Check in"
                  placeholder="Select check-in day"
                  fieldIcon={<FiCalendar className="h-6 w-6 text-lg" />}
                  value={formData.checkInDate}
                  onChange={handleCheckInDateChange}
                  type="date"
                />

                <SearchItem
                  fieldName="Check out"
                  placeholder="Select check-out day"
                  fieldIcon={<FiCalendar className="h-6 w-6 text-lg" />}
                  value={formData.checkOutDate}
                  onChange={handleCheckOutDateChange}
                  type="date"
                />

                <SearchItem
                  fieldName="Guests"
                  placeholder="2 Guests"
                  fieldIcon={<FiUsers className="h-6 w-6 text-lg" />}
                  value={formData.guests}
                  onChange={handleGuestsChange}
                  type="guest"
                />

                <SearchItem
                  fieldName="Rooms"
                  placeholder="Choose room type"
                  fieldIcon={<FiUsers className="h-6 w-6 text-lg" />}
                  value={formData.rooms}
                  onChange={handleRoomsChange}
                  type="room"
                  hotel={hotel}
                />
              </div>

              <button className="rounded-md bg-violet-600 py-3 text-lg font-medium text-slate-200 dark:bg-violet-400 dark:text-slate-800">
                Confirm Editing
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}

export default ReservationDetail;
