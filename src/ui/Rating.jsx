import { FaStar } from "react-icons/fa6";

function Rating({ rating }) {
  return (
    <div className="flex items-center gap-1 text-xs xl:text-sm">
      <FaStar className="flex items-center justify-center text-yellow-500" />
      <span className="text-slate-700 dark:text-slate-300">{rating}</span>
    </div>
  );
}

export default Rating;
