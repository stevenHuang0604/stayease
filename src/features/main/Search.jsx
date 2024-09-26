import { FiCalendar, FiSearch, FiUsers } from "react-icons/fi";
import Button from "../../ui/Button";

function Search() {
  return (
    <div className="mx-auto w-full max-w-[1160px] shadow-lg">
      <div className="border-1 w-full rounded-lg bg-violet-200 p-4">
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
          <div className="w-full rounded-lg border border-slate-300 bg-white p-1 lg:w-auto">
            <form>
              <div className="flex items-center gap-3 rounded-md p-2">
                <FiSearch className="h-6 w-6 text-lg" />
                <span className="flex w-full flex-col">
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
                    className="border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:outline-none"
                  />
                </span>
              </div>
            </form>
          </div>

          <div className="w-full rounded-lg border border-slate-300 bg-white p-1 lg:w-auto">
            <form>
              <div className="flex items-center gap-3 rounded-md p-2">
                <FiCalendar className="h-6 w-6 text-lg" />
                <span className="flex w-full flex-col">
                  <label htmlFor="checkin" className="text-xs text-slate-400">
                    Check in
                  </label>
                  <input
                    type="text"
                    id="checkin"
                    placeholder="Thu, Sep 26"
                    className="w-full border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:outline-none"
                  />
                </span>
              </div>
            </form>
          </div>

          <div className="w-full rounded-lg border border-slate-300 bg-white p-1 lg:w-auto">
            <form>
              <div className="flex items-center gap-3 rounded-md p-2">
                <FiCalendar className="h-6 w-6 text-lg" />
                <span className="flex w-full flex-col">
                  <label htmlFor="checkout" className="text-xs text-slate-400">
                    Check out
                  </label>
                  <input
                    type="text"
                    id="checkout"
                    placeholder="Fri, Sep 27"
                    className="w-full border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:outline-none"
                  />
                </span>
              </div>
            </form>
          </div>

          <div className="w-full rounded-lg border border-slate-300 bg-white p-1 lg:w-auto">
            <form>
              <div className="flex items-center gap-3 rounded-md p-2">
                <FiUsers className="h-6 w-6 text-lg" />
                <span className="flex w-full flex-col">
                  <label
                    htmlFor="guestsandrooms"
                    className="text-xs text-slate-400"
                  >
                    Guests and rooms
                  </label>
                  <input
                    type="text"
                    id="guestsandrooms"
                    placeholder="2 Guests, 1 Room"
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
