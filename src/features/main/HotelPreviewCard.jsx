import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Rating from "../../ui/Rating";
import Location from "../../ui/Location";

function HotelPreviewCard({ hotel }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // lazy loading image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = hotel.image;
  }, [hotel.image]);

  return (
    <div className="flex flex-col overflow-hidden rounded-md shadow-md transition-all hover:shadow-xl sm:max-w-[25%] dark:hover:shadow-slate-400/50">
      <div className="sm:flex-shrink-0">
        {imageLoaded ? (
          <img src={hotel.image} alt={hotel.name} />
        ) : (
          <div className="h-full bg-slate-500 py-10 text-center text-lg font-semibold text-slate-50 dark:text-slate-900">
            Image Loading...
          </div>
        )}
      </div>

      <div className="flex flex-grow flex-col p-2 lg:p-3">
        <span className="text-xs text-slate-400 dark:text-slate-600">
          {hotel.price_range}
        </span>

        <h3 className="text-lg font-medium text-slate-800 lg:text-nowrap lg:text-base dark:text-slate-200">
          {hotel.name}
        </h3>

        <div className="mb-4 mt-1 flex flex-col gap-2 xl:flex-row">
          <Rating rating={hotel.rating} />
          <Location city={hotel.city} country={hotel.country} />
        </div>

        <div className="mt-auto rounded-md bg-violet-600 py-2 text-center text-sm font-medium text-slate-50 xl:text-base dark:bg-violet-400 dark:text-slate-900">
          <Link to={`hotels/${hotel.id}`}>Check details</Link>
        </div>
      </div>
    </div>
  );
}

export default HotelPreviewCard;
