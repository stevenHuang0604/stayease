import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { formatDate } from "../helpers/formatDate";

function SearchItem({
  fieldName,
  placeholder,
  fieldIcon,
  value,
  onChange,
  type = "input",
  hotel,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function handeClose() {
    setIsOpen(false);
  }

  function handleGuestsMinus(e) {
    e.preventDefault();
    onChange(value - 1);
  }

  function handleGuestsPlus(e) {
    e.preventDefault();
    onChange(value + 1);
  }

  function handleRoomTypeMinus(e, roomType) {
    e.preventDefault();

    const updatedRooms = { ...value };
    if (updatedRooms[roomType]) {
      updatedRooms[roomType] = Math.max(0, updatedRooms[roomType] - 1);
      if (updatedRooms[roomType] === 0) {
        delete updatedRooms[roomType];
      }
    }

    onChange(updatedRooms);
  }

  function handleRoomTypePlus(e, roomType) {
    e.preventDefault();

    const updatedRooms = { ...value, [roomType]: (value[roomType] || 0) + 1 };

    onChange(updatedRooms);
  }

  return (
    <div className="relative h-14 w-full rounded-lg border border-slate-300 bg-white p-1 lg:w-auto dark:border-slate-700 dark:bg-black">
      <div
        className="h-full text-black dark:text-white"
        onClick={type !== "input" ? toggleModal : undefined}
      >
        <div className="fvc gap-3 rounded-md p-1">
          {fieldIcon}
          <span className="flex w-full flex-col">
            {type === "input" ? (
              <label
                htmlFor={fieldName}
                className="text-xs text-slate-400 dark:text-slate-600"
              >
                {fieldName}
              </label>
            ) : (
              <span className="text-xs text-slate-400 dark:text-slate-600">
                {fieldName}
              </span>
            )}

            {type === "input" && (
              <input
                type="text"
                autoComplete="off"
                value={value}
                onChange={onChange}
                id={fieldName}
                placeholder={placeholder}
                className="search-content"
              />
            )}

            {type === "date" && (
              <div className="search-content">
                {value ? formatDate(value) : placeholder}
              </div>
            )}

            {type === "guest" && (
              <div className="search-content">
                {value ? `${value} ${fieldName}` : placeholder}
              </div>
            )}

            {type === "room" && (
              <div className="search-content">
                {Object.keys(value).length !== 0
                  ? `Total ${Object.values(value).reduce((acc, cur) => acc + cur, 0)} Rooms`
                  : placeholder}
              </div>
            )}
          </span>
        </div>
      </div>

      {type === "date" && isOpen && (
        <div className="absolute z-10 mt-1">
          <DatePicker
            selected={value}
            onChange={onChange}
            onSelect={handeClose}
            onClickOutside={handeClose}
            inline
          />
        </div>
      )}

      {type === "guest" && isOpen && (
        <div className="bottom-100 absolute left-0 z-10 mt-1 w-full">
          <div className="flex flex-col gap-2 rounded-lg border border-slate-300 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-black">
            <div className="fc justify-between">
              <span className="font-medium text-slate-800 dark:text-slate-200">
                {fieldName}
              </span>
              <div className="fvc gap-2">
                <button
                  className="group rounded-full border border-slate-800 p-1 disabled:cursor-not-allowed disabled:border-slate-200 dark:border-slate-200 dark:disabled:border-slate-800"
                  onClick={handleGuestsMinus}
                  disabled={value === 1}
                >
                  <FaMinus className="text-slate-800 group-disabled:text-slate-200 dark:text-slate-200 dark:group-disabled:text-slate-800" />
                </button>
                <div className="text-slate-800 dark:text-slate-200">
                  {value}
                </div>
                <button
                  className="rounded-full border border-slate-800 p-1 dark:border-slate-200"
                  onClick={handleGuestsPlus}
                >
                  <FaPlus className="text-slate-800 dark:text-slate-200" />
                </button>
              </div>
            </div>
            <button
              className="rounded-md bg-violet-600 py-2 text-slate-50 dark:bg-violet-400 dark:text-slate-900"
              onClick={handeClose}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {type === "room" && isOpen && (
        <div className="bottom-100 absolute left-0 z-10 mt-1 w-full">
          <div className="flex flex-col gap-2 rounded-lg border border-slate-300 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-black">
            <div className="flex-vert-center flex-col justify-between gap-4">
              {Object.entries(hotel.room_types).map(([roomType]) => (
                <div className="fvc w-full justify-between" key={roomType}>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {roomType}
                  </span>
                  <div className="fvc gap-2">
                    <button
                      className="group rounded-full border border-slate-800 p-1 disabled:cursor-not-allowed disabled:border-slate-200 dark:border-slate-200 dark:disabled:border-slate-800"
                      onClick={(e) => handleRoomTypeMinus(e, roomType)}
                      disabled={!value[roomType]}
                    >
                      <FaMinus className="text-slate-800 group-disabled:text-slate-200 dark:text-slate-200 dark:group-disabled:text-slate-800" />
                    </button>
                    <div className="text-slate-800 dark:text-slate-200">
                      {value[roomType] ?? 0}
                    </div>
                    <button
                      className="rounded-full border border-slate-800 p-1 dark:border-slate-200"
                      onClick={(e) => handleRoomTypePlus(e, roomType)}
                    >
                      <FaPlus className="text-slate-800 dark:text-slate-200" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="rounded-md bg-violet-600 py-2 text-slate-50 dark:bg-violet-400 dark:text-slate-900"
              onClick={handeClose}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchItem;
