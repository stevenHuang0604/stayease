import { FiCalendar, FiSearch, FiUsers } from "react-icons/fi";
import SearchItem from "./SearchItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (destination.trim()) {
      const searchDestination = destination.toLowerCase();
      navigate(`/app/hotels?destination=${searchDestination}`);
    }
  }

  function handleChange(e) {
    setDestination(e.target.value);
  }

  return (
    <div className="mx-auto max-w-full shadow-lg lg:w-max">
      <div className="border-1 w-full rounded-lg bg-violet-200 px-2 py-2">
        <form
          className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-2"
          onSubmit={handleSubmit}
        >
          <SearchItem
            fieldName="Destination"
            placeholder="Where to go?"
            fieldIcon={<FiSearch className="h-6 w-6 text-lg" />}
            value={destination}
            onChange={handleChange}
          />

          {/* <SearchItem
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
          /> */}

          <button className="h-14 w-full rounded-lg border border-slate-300 bg-violet-600 px-4 py-1 text-lg font-medium text-slate-50 hover:bg-violet-800 lg:w-auto">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
