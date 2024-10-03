import { useState } from "react";
import DatePicker from "react-datepicker";
import { formatDate } from "../helpers/formatDate";
import "react-datepicker/dist/react-datepicker.css";
import { FaMinus, FaPlus } from "react-icons/fa6";

function SearchItem({
  fieldName,
  placeholder,
  fieldIcon,
  value,
  onChange,
  type = "input",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const searchId = fieldName.toLowerCase();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function handeClose() {
    setIsOpen(false);
  }

  function handleMinus(e) {
    e.preventDefault();

    onChange(value - 1);
  }

  function handlePlus(e) {
    e.preventDefault();
    onChange(value + 1);
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

            {type === "number" && (
              <div className="cursor-pointer border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:border-b-violet-600 focus:outline-none">
                {value ? `${value} ${fieldName}` : placeholder}
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

      {type === "number" && isOpen && (
        <div
          className="bottom-100 absolute left-0 z-10 mt-1 w-full"
          onBlur={handeClose}
        >
          <div className="flex flex-col gap-2 rounded-lg border border-slate-300 bg-white p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="font-medium">{fieldName}</span>
              <div className="flex items-center gap-2">
                <button
                  className="group rounded-full border border-slate-800 p-1 disabled:cursor-not-allowed disabled:border-slate-200"
                  onClick={handleMinus}
                  disabled={value === 1}
                >
                  <FaMinus className="text-slate-800 group-disabled:text-slate-200" />
                </button>
                <div>{value}</div>
                <button
                  className="rounded-full border border-slate-800 p-1"
                  onClick={handlePlus}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchItem;
