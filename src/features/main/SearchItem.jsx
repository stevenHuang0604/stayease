function SearchItem({ fieldName, placeholder, fieldIcon }) {
  const searchId = fieldName.toLowerCase();

  return (
    <div className="h-14 w-full rounded-lg border border-slate-300 bg-white p-1 lg:w-auto">
      <div>
        <div className="flex items-center gap-3 rounded-md p-1">
          {fieldIcon}
          {/* <FiSearch className="h-6 w-6 text-lg" /> */}
          <span className="flex w-full flex-col">
            <label htmlFor={searchId} className="text-xs text-slate-400">
              {fieldName}
            </label>
            <input
              type="text"
              id={searchId}
              placeholder={placeholder}
              className="border-b-2 border-b-transparent placeholder-slate-900 outline-none transition-all placeholder:text-sm placeholder:font-medium hover:border-b-violet-600 focus:border-b-violet-600 focus:outline-none"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
