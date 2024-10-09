import { FaLocationDot } from "react-icons/fa6";

function Location({ city, country }) {
  return (
    <div className="fvc gap-1 text-xs text-blue-500 xl:text-sm">
      <FaLocationDot className="fc" />
      <span>{`${city}, ${country}`}</span>
    </div>
  );
}

export default Location;
