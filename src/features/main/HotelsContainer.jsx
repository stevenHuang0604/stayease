import ErrorFetch from "../../ui/ErrorFetch";
import Spinner from "../../ui/Spinner";
import HotelPreviewCard from "./HotelPreviewCard";
import { usePopularHotels } from "./usePopularHotels";

function HotelsContainer() {
  const { popularHotels, isLoading, error } = usePopularHotels();

  if (error) {
    return <ErrorFetch error={error} />;
  }

  return (
    <div className="mt-8 p-0 md:p-8">
      <h1 className="mb-6 text-3xl font-semibold text-violet-700 dark:text-violet-300">
        Popular hotels
      </h1>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="fhc flex-col gap-4 sm:flex-row lg:gap-8">
          {popularHotels.map((hotel) => (
            <HotelPreviewCard hotel={hotel} key={hotel.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HotelsContainer;
