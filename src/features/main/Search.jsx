import { FiCalendar, FiSearch, FiUsers } from "react-icons/fi";
import Button from "../../ui/Button";

const Divider = () => <div className="mx-2 h-full w-px bg-gray-300"></div>;

function Search() {
  return (
    <div className="mx-auto w-[90%]">
      <div className="flex justify-center">
        <div className="border-1 flex w-full max-w-max items-center justify-center rounded-lg border border-slate-300 pr-4">
          <div className="p-1">
            <form>
              <div className="flex w-full items-center gap-3 rounded-md p-2">
                <FiSearch className="h-6 w-6 text-lg" />
                <span className="flex flex-col">
                  <label
                    htmlFor="destination"
                    className="text-xs text-slate-400"
                  >
                    Destination
                  </label>
                  <input
                    type="text"
                    id="destination"
                    placeholder="Where to go?"
                    className="w-full border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:outline-none"
                  />
                </span>
              </div>
            </form>
          </div>

          <Divider />

          <div className="p-1">
            <form>
              <div className="flex items-center gap-3 rounded-md p-2">
                <FiCalendar className="h-6 w-6 text-lg" />
                <span className="flex flex-col">
                  <label htmlFor="checkin" className="text-xs text-slate-400">
                    Check in
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    placeholder="Where to go?"
                    className="w-full border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:outline-none"
                  />
                </span>
              </div>
            </form>
          </div>

          <Divider />

          <div className="p-1">
            <form>
              <div className="flex items-center gap-3 rounded-md p-2">
                <FiCalendar className="h-6 w-6 text-lg" />
                <span className="flex flex-col">
                  <label htmlFor="checkout" className="text-xs text-slate-400">
                    Check out
                  </label>
                  <input
                    type="date"
                    id="checkout"
                    placeholder="Where to go?"
                    className="w-full border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:outline-none"
                  />
                </span>
              </div>
            </form>
          </div>

          <Divider />

          <div className="p-1">
            <form>
              <div className="flex items-center gap-3 rounded-md p-2">
                <FiUsers className="h-6 w-6 text-lg" />
                <span className="flex flex-col">
                  <label htmlFor="guests" className="text-xs text-slate-400">
                    Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    placeholder="2 Guests"
                    className="w-full border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:outline-none"
                  />
                </span>
              </div>
            </form>
          </div>

          <Divider />

          <div className="p-1">
            <form>
              <div className="flex items-center gap-3 rounded-md p-2">
                <FiUsers className="h-6 w-6 text-lg" />
                <span className="flex flex-col">
                  <label htmlFor="rooms" className="text-xs text-slate-400">
                    Rooms
                  </label>
                  <input
                    type="number"
                    id="rooms"
                    placeholder="1 Room"
                    className="w-full border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:outline-none"
                  />
                </span>
              </div>
            </form>
          </div>

          <Button size="large">Search</Button>
        </div>
      </div>
    </div>
  );
}

export default Search;
