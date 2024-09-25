function FeatureItem({ title, description, icon, color }) {
  const colorConfig = {
    blue: "bg-blue-200 text-blue-700",
    yellow: "bg-yellow-200 text-yellow-700",
    green: "bg-green-200 text-green-700",
    orange: "bg-orange-200 text-orange-700",
  };

  return (
    <li className="flex flex-col items-start rounded-xl bg-violet-50 p-7">
      <span
        className={`mb-6 rounded-md p-2 text-2xl shadow-xl ${colorConfig[color]} bg-opacity-25`}
      >
        {icon}
      </span>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-4 font-normal text-slate-600">{description}</p>
    </li>
  );
}

export default FeatureItem;
