import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBed,
  FaBookmark,
  FaLocationArrow,
  FaMoneyBill1Wave,
  FaRegBookmark,
} from "react-icons/fa6";

import { useUpdateBookmark } from "../bookmarks/useUpdateBookmark";
import Rating from "../../ui/Rating";
import Location from "../../ui/Location";

function HotelListItem({ hotel, bookmarks }) {
  const { updateBookmark } = useUpdateBookmark();
  const [imageLoaded, setImageLoaded] = useState(false);

  // lazy loading image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = hotel.image;
  }, [hotel.image]);

  return (
    <div className="flex flex-col overflow-hidden rounded-md border shadow-sm md:flex-row dark:shadow-slate-400/50">
      {imageLoaded ? (
        <img
          src={hotel.image}
          alt={hotel.name}
          className="object-cover md:w-[35%]"
        />
      ) : (
        <div className="h-full bg-slate-500 object-cover py-10 text-center text-lg font-semibold text-slate-50 md:w-[35%] dark:text-slate-900">
          Image Loading...
        </div>
      )}

      <div className="grow p-6 pt-4">
        <span className="text-xs text-slate-400 dark:text-slate-600">
          {hotel.price_range}
        </span>

        <div className="fvc justify-between">
          <h1 className="text-2xl font-medium text-slate-800 dark:text-slate-200">
            {hotel.name}
          </h1>
          <button
            className="cursor-pointer"
            onClick={() => updateBookmark(hotel.id)}
          >
            {bookmarks?.some((bookmark) => bookmark.hotelId === hotel.id) ? (
              <FaBookmark className="text-xl text-violet-500" />
            ) : (
              <FaRegBookmark className="text-xl dark:text-slate-50" />
            )}
          </button>
        </div>

        <div className="mb-2 mt-2 flex gap-3">
          <Rating rating={hotel.rating} />
          <Location city={hotel.city} country={hotel.country} />
        </div>

        <div className="mb-3 mt-1 h-[1px] w-full bg-slate-300 dark:bg-slate-700"></div>

        <p className="text-base font-normal text-slate-800 dark:text-slate-200">
          {hotel.description}
        </p>

        <div className="fvc mt-4 gap-2 text-sm text-slate-800 dark:text-slate-200">
          <FaBed className="text-violet-600 dark:text-violet-400" />
          <span className="font-medium">Available Room: </span>
          {hotel.available_rooms} rooms
        </div>

        <div className="fvc mt-2 gap-2 text-sm text-slate-800 dark:text-slate-200">
          <FaMoneyBill1Wave className="text-violet-600 dark:text-violet-400" />
          <span className="font-medium">Base Price: </span>${hotel.base_price}
        </div>

        <div className="fhc mt-5 flex-col items-start gap-4 text-sm text-zinc-600 lg:flex-row lg:items-center dark:text-zinc-400">
          <div className="flex items-center gap-1">
            <FaLocationArrow />
            <span className="border-b border-b-slate-800">{hotel.address}</span>
          </div>

          <Link
            to={`${hotel.id}`}
            className="rounded-md bg-violet-600 px-4 py-2 text-center font-medium text-slate-50 lg:ml-auto dark:bg-violet-400 dark:text-slate-950"
          >
            Check details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HotelListItem;
