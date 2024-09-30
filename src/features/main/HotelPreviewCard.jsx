import { FaLocationDot, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HotelPreviewCard({ hotel }) {
  return (
    <div className="max-w-[25%] overflow-hidden rounded-md shadow-md">
      <img src={hotel.image} alt={hotel.name} />

      <div className="flex flex-col p-3">
        <span className="text-xs text-slate-400">{hotel.price_range}</span>

        <h3 className="text-nowrap text-lg font-medium">{hotel.name}</h3>

        <div className="mb-4 mt-1 flex gap-2">
          <div className="flex items-center gap-1 text-sm">
            <FaStar className="flex items-center justify-center text-yellow-400" />
            <span className="">{hotel.rating}</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-blue-600">
            <FaLocationDot className="flex items-center justify-center" />
            <span className="">{`${hotel.city}, ${hotel.country}`}</span>
          </div>
        </div>

        <Link
          to={`hotels/${hotel.id}`}
          className="rounded-md bg-violet-600 py-2 text-center font-medium text-slate-50"
        >
          Check details
        </Link>
      </div>
    </div>
  );
}

export default HotelPreviewCard;
