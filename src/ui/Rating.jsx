import { FaStar } from "react-icons/fa6";

function Rating({ rating }) {
  return (
    <div className="fvc gap-1 text-xs xl:text-sm">
      <FaStar className="fc text-yellow-500" />
      <span className="text-slate-700 dark:text-slate-300">{rating}</span>
    </div>
  );
}

export default Rating;
