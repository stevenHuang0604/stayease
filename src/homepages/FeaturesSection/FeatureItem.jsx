function FeatureItem({ title, description, icon, color }) {
  const colorConfig = {
    blue: "bg-blue-200 text-blue-700 dark:bg-blue-800 dark:text-blue-300",
    yellow:
      "bg-yellow-200 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-300",
    green: "bg-green-200 text-green-700 dark:bg-green-800 dark:text-green-300",
    orange:
      "bg-orange-200 text-orange-700 dark:bg-orange-800 dark:text-orange-300",
  };

  return (
    <li className="flex flex-col items-start rounded-xl bg-violet-50 p-7 dark:bg-violet-950">
      <span
        className={`mb-6 rounded-md p-2 text-2xl shadow-xl ${colorConfig[color]} bg-opacity-25`}
      >
        {icon}
      </span>
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
        {title}
      </h3>
      <p className="mt-4 font-normal text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </li>
  );
}

export default FeatureItem;
