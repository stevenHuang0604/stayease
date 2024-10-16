import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import SearchItem from "./SearchItem";

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
    <div className="sm:mx-auto">
      <div className="border-1 w-full rounded-lg px-2 py-2">
        <form
          className="fc flex-col gap-4 lg:flex-row lg:gap-2"
          onSubmit={handleSubmit}
        >
          <SearchItem
            fieldName="Destination"
            placeholder="Where to go?"
            fieldIcon={<FiSearch className="h-6 w-6 text-lg" />}
            value={destination}
            onChange={handleChange}
          />

          <button className="h-14 w-full rounded-lg border border-slate-300 bg-violet-600 px-4 py-1 text-lg font-medium text-slate-50 hover:bg-violet-800 lg:w-auto dark:border-slate-700 dark:bg-violet-400 dark:text-slate-950 dark:hover:bg-violet-200">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
