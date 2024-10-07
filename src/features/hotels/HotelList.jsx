import { useSearchParams } from "react-router-dom";

import { useHotelsByDestination } from "./useHotelsByDestination";
import Spinner from "../../ui/Spinner";
import HotelListItem from "./HotelListItem";
import { useBookmarks } from "../bookmarks/useBookmarks";

function HotelList() {
  const [searchParams] = useSearchParams();
  const { hotels, isLoading } = useHotelsByDestination();
  const { bookmarks } = useBookmarks();

  const destination = searchParams.get("destination");

  return (
    <div className="mt-8 p-8">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2 className="text-2xl font-medium text-slate-400 dark:text-slate-600">
            {hotels.length} choices found in{" "}
            <span className="text-violet-700 dark:text-slate-300">
              {destination}
            </span>
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {hotels.map((hotel) => (
              <HotelListItem
                hotel={hotel}
                bookmarks={bookmarks}
                key={hotel.id}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default HotelList;
