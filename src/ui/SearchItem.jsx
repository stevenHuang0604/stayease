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
  const searchId = fieldName.toLowerCase();

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

    onChange((prevRooms) => {
      const updatedRooms = { ...prevRooms };
      if (updatedRooms[roomType]) {
        updatedRooms[roomType] = Math.max(0, updatedRooms[roomType] - 1);
        if (updatedRooms[roomType] === 0) {
          delete updatedRooms[roomType];
        }
      }
      return updatedRooms;
    });
  }

  function handleRoomTypePlus(e, roomType) {
    e.preventDefault();

    onChange((prevRooms) => ({
      ...prevRooms,
      [roomType]: (prevRooms[roomType] || 0) + 1,
    }));
  }

  return (
    <div className="relative h-14 w-full rounded-lg border border-slate-300 bg-white p-1 lg:w-auto">
      <div onClick={type !== "input" ? toggleModal : undefined}>
        <div className="flex items-center gap-3 rounded-md p-1">
          {fieldIcon}
          {/* <FiSearch className="h-6 w-6 text-lg" /> */}
          <span className="flex w-full flex-col">
            {type === "input" ? (
              <label htmlFor={searchId} className="text-xs text-slate-400">
                {fieldName}
              </label>
            ) : (
              <span htmlFor={searchId} className="text-xs text-slate-400">
                {fieldName}
              </span>
            )}

            {type === "input" && (
              <input
                type="text"
                value={value}
                onChange={onChange}
                id={searchId}
                placeholder={placeholder}
                className="border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:border-b-violet-600 focus:outline-none"
              />
            )}

            {type === "date" && (
              <div className="cursor-pointer border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:border-b-violet-600 focus:outline-none">
                {value ? formatDate(value) : placeholder}
              </div>
            )}

            {type === "guest" && (
              <div className="cursor-pointer border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:border-b-violet-600 focus:outline-none">
                {value ? `${value} ${fieldName}` : placeholder}
              </div>
            )}

            {type === "room" && (
              <div className="cursor-pointer border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:border-b-violet-600 focus:outline-none">
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
          <div className="flex flex-col gap-2 rounded-lg border border-slate-300 bg-white p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="font-medium">{fieldName}</span>
              <div className="flex items-center gap-2">
                <button
                  className="group rounded-full border border-slate-800 p-1 disabled:cursor-not-allowed disabled:border-slate-200"
                  onClick={handleGuestsMinus}
                  disabled={value === 1}
                >
                  <FaMinus className="text-slate-800 group-disabled:text-slate-200" />
                </button>
                <div>{value}</div>
                <button
                  className="rounded-full border border-slate-800 p-1"
                  onClick={handleGuestsPlus}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <button
              className="rounded-md bg-violet-600 py-2 text-slate-50"
              onClick={handeClose}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {type === "room" && isOpen && (
        <div className="bottom-100 absolute left-0 z-10 mt-1 w-full">
          <div className="flex flex-col gap-2 rounded-lg border border-slate-300 bg-white p-4 shadow-lg">
            <div className="flex flex-col items-center justify-between gap-4">
              {Object.entries(hotel.room_types).map(([roomType]) => (
                <div
                  className="flex w-full items-center justify-between"
                  key={roomType}
                >
                  <span className="font-medium">{roomType}</span>
                  <div className="flex items-center gap-2">
                    <button
                      className="group rounded-full border border-slate-800 p-1 disabled:cursor-not-allowed disabled:border-slate-200"
                      onClick={(e) => handleRoomTypeMinus(e, roomType)}
                      disabled={!value[roomType]}
                    >
                      <FaMinus className="text-slate-800 group-disabled:text-slate-200" />
                    </button>
                    <div>{value[roomType] ?? 0}</div>
                    <button
                      className="rounded-full border border-slate-800 p-1"
                      onClick={(e) => handleRoomTypePlus(e, roomType)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="rounded-md bg-violet-600 py-2 text-slate-50"
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
