import { useState, useEffect, memo } from "react";
import users from "../../utils/users";

function TestimonialItem({ name, feedback, title, avatar }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // lazy loading image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = avatar;
  }, [avatar]);

  return (
    <div className="rounded-xl border-2 border-solid border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:border-violet-200 hover:shadow-xl md:p-4 lg:p-6 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-violet-200 dark:hover:shadow-slate-400/50">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-start gap-3 md:flex-col lg:flex-row">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            {imageLoaded ? (
              <img
                src={avatar}
                className="w-fill h-full object-cover"
                alt={name}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-300 text-slate-500 dark:bg-slate-700">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center gap-[2px]">
            <h3 className="text-lg font-bold text-slate-800 md:text-base dark:text-slate-200">
              {name}
            </h3>
            <span className="text-xs text-slate-500">{title}</span>
          </div>
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400">
          {feedback}
        </div>
      </div>
    </div>
  );
}

// use React.memo to prevent unnecessarily render
export default memo(TestimonialItem);
