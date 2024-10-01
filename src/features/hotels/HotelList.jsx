import { useHotelsByDestination } from "./useHotelsByDestination";
import Spinner from "../../ui/Spinner";
import HotelListItem from "./HotelListItem";
import { useSearchParams } from "react-router-dom";

function HotelList() {
  const [searchParams] = useSearchParams();
  const { hotels, isLoading } = useHotelsByDestination();

  const destination = searchParams.get("destination");

  return (
    <div className="mt-8 p-8">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2 className="text-2xl font-medium text-slate-400">
            {hotels.length} choices in{" "}
            <span className="text-violet-700">{destination}</span>
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {hotels.map((hotel) => (
              <HotelListItem hotel={hotel} key={hotel.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default HotelList;
