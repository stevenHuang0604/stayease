import {
  FaBed,
  FaBookmark,
  FaLocationArrow,
  FaLocationDot,
  FaMoneyBill1Wave,
  FaStar,
} from "react-icons/fa6";
import { useHotelById } from "../hotels/useHotelById";
import { Link } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useUpdateBookmark } from "./useUpdateBookmark";

function BookmarkItem({ bookmark }) {
  const { hotels, isLoading } = useHotelById(bookmark.hotelId);
  const { updateBookmark } = useUpdateBookmark();

  if (isLoading) return <Spinner />;
  const hotel = hotels[0];

  return (
    <div className="flex flex-col overflow-hidden rounded-md border shadow-sm">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="h-60 w-full object-cover"
      />

      <div className="flex grow flex-col p-6 pt-4">
        <span className="text-xs text-slate-400">{hotel.price_range}</span>

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">{hotel.name}</h1>
          <button
            className="cursor-pointer"
            onClick={() => updateBookmark(hotel.id)}
          >
            <FaBookmark className="text-xl text-violet-500" />
          </button>
        </div>

        <div className="mb-2 mt-2 flex gap-3">
          <div className="flex items-center gap-1 text-xs">
            <FaStar className="flex items-center justify-center text-yellow-400" />
            <span className="text-slate-700">{hotel.rating}</span>
          </div>

          <div className="flex items-center gap-1 text-xs text-blue-600">
            <FaLocationDot className="flex items-center justify-center" />
            <span>{`${hotel.city}, ${hotel.country}`}</span>
          </div>
        </div>

        <div className="mb-3 mt-1 h-[1px] w-full bg-slate-300"></div>

        <p className="text-base font-normal text-slate-800">
          {hotel.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm">
          <FaBed className="text-violet-600" />
          <span className="font-medium">Available Room: </span>
          {hotel.available_rooms} rooms
        </div>

        <div className="mt-2 flex items-center gap-2 text-sm">
          <FaMoneyBill1Wave className="text-violet-600" />
          <span className="font-medium">Base Price: </span>${hotel.base_price}
        </div>

        <div className="mb-auto mt-5 flex items-center gap-1 pb-4 text-sm text-zinc-600">
          <FaLocationArrow />
          <span className="border-b border-b-slate-800">{hotel.address}</span>
        </div>
        <Link
          to={`/app/hotels/${hotel.id}`}
          className="rounded-md bg-violet-600 px-4 py-2 text-center font-medium text-slate-50"
        >
          Check details
        </Link>
      </div>
    </div>
  );
}

export default BookmarkItem;