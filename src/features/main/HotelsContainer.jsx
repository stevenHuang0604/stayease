import Spinner from "../../ui/Spinner";
import HotelPreviewCard from "./HotelPreviewCard";
import { usePopularHotels } from "./usePopularHotels";

function HotelsContainer() {
  const { popularHotels, isLoading } = usePopularHotels();

  return (
    <div className="mt-8 p-8">
      <h2 className="mb-6 text-center text-3xl font-semibold text-violet-600">
        Popular hotels
      </h2>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center gap-8">
          {popularHotels.map((hotel) => (
            <HotelPreviewCard hotel={hotel} key={hotel.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HotelsContainer;
