import { FaLocationDot } from "react-icons/fa6";

function Location({ city, country }) {
  return (
    <div className="flex items-center gap-1 text-xs text-blue-500 xl:text-sm">
      <FaLocationDot className="flex items-center justify-center" />
      <span>{`${city}, ${country}`}</span>
    </div>
  );
}

export default Location;
