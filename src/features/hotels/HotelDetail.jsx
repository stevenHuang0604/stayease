import { useLoaderData } from "react-router-dom";
import { getHotelById } from "../../services/apiHotel";
import Search from "../../ui/Search";
import {
  FaBed,
  FaBookmark,
  FaLocationArrow,
  FaLocationDot,
  FaMoneyBill1Wave,
  FaRegBookmark,
  FaStar,
} from "react-icons/fa6";
import SearchItem from "../../ui/SearchItem";
import { FiCalendar, FiUsers } from "react-icons/fi";
import { useBookmarks } from "../bookmarks/useBookmarks";
import { useUpdateBookmark } from "../bookmarks/useUpdateBookmark";

function formatTime(time) {
  const [hours, minutes] = time.split(":");

  const formattedHours = hours.padStart(2, "0");

  return `${formattedHours}:${minutes}`;
}

function HotelDetail() {
  const [hotel] = useLoaderData();
  const { bookmarks } = useBookmarks();
  const { updateBookmark } = useUpdateBookmark();

  return (
    <main className="px-14 py-14 md:px-16 md:py-16">
      <Search />

      <div className="mx-auto mt-16 flex flex-col items-center">
        <img src={hotel.image} alt={hotel.name} className="w-[44rem]" />

        <div className="mt-8 flex gap-4">
          <div className="flex flex-col gap-4">
            <div className="rounded-md border p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-medium">{hotel.name}</h1>
                <button
                  className="cursor-pointer"
                  onClick={() => updateBookmark(hotel.id)}
                >
                  {bookmarks?.some(
                    (bookmark) => bookmark.hotelId === hotel.id,
                  ) ? (
                    <FaBookmark className="text-xl text-violet-500" />
                  ) : (
                    <FaRegBookmark className="text-xl" />
                  )}
                </button>
              </div>

              <div className="mb-2 mt-2 flex gap-3">
                <div className="flex items-center gap-1 text-sm">
                  <FaStar className="flex items-center justify-center text-yellow-400" />
                  <span className="text-slate-700">{hotel.rating}</span>
                </div>

                <div className="flex items-center gap-1 text-sm text-blue-600">
                  <FaLocationDot className="flex items-center justify-center" />
                  <span>{`${hotel.city}, ${hotel.country}`}</span>
                </div>
              </div>

              <div className="mb-6 mt-4 h-[1px] w-full bg-slate-300"></div>

              <p className="text-base font-normal text-slate-800">
                {hotel.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-base">
                <FaBed className="text-violet-600" />
                <span className="font-medium">Available Room: </span>
                {hotel.available_rooms} rooms
              </div>

              <div className="mt-2 flex items-center gap-2 text-base">
                <FaMoneyBill1Wave className="text-violet-600" />
                <span className="font-medium">Base Price: </span>$
                {hotel.base_price}
              </div>

              <div className="mt-7 flex items-center gap-1 text-base text-zinc-600">
                <FaLocationArrow />
                <span className="border-b border-b-slate-800">
                  {hotel.address}
                </span>
              </div>
            </div>

            <div className="rounded-md border p-8 shadow-sm">
              <h2 className="text-xl">Space & Rooms</h2>

              <div className="mb-6 mt-4 h-[1px] w-full bg-slate-300"></div>

              <div className="flex gap-4">
                {Object.entries(hotel.room_types).map(([roomType, details]) => (
                  <div
                    className="rounded-md border p-4 shadow-sm"
                    key={roomType}
                  >
                    <h3 className="text-lg">{roomType}</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      ${details.price} each room
                    </p>
                    <span className="text-sm text-slate-600">
                      {details.capacity} room left
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex basis-1/3 flex-col gap-4">
            <div className="flex justify-between gap-2 rounded-md border p-8 shadow-sm">
              <div>
                <h3 className="font-medium">Check-in:</h3>
                <p>{`${formatTime(hotel.check_in_time)}`}</p>
              </div>

              <div>
                <h3 className="font-medium">Check-out:</h3>
                <p>{`${formatTime(hotel.check_out_time)}`}</p>
              </div>
            </div>

            <div className="rounded-md border p-8 shadow-sm">
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <SearchItem
                    fieldName="Check in"
                    placeholder="Thu, Sep 26"
                    fieldIcon={<FiCalendar className="h-6 w-6 text-lg" />}
                  />

                  <SearchItem
                    fieldName="Check out"
                    placeholder="Fri, Sep 27"
                    fieldIcon={<FiCalendar className="h-6 w-6 text-lg" />}
                  />

                  <SearchItem
                    fieldName="Guests and rooms"
                    placeholder="2 Guests, 1 Room"
                    fieldIcon={<FiUsers className="h-6 w-6 text-lg" />}
                  />
                </div>

                <button className="rounded-md bg-violet-600 py-3 text-lg font-medium text-slate-200">
                  Reserve
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function loader({ params }) {
  const hotel = await getHotelById(params.id);

  return hotel;
}

export default HotelDetail;
