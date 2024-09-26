import { FaFireFlameCurved } from "react-icons/fa6";

function SectionTitle({ children }) {
  return (
    <div className="mx-auto flex items-center gap-2 text-2xl text-violet-600 md:text-3xl lg:text-4xl">
      <FaFireFlameCurved className="text-orange-500" />
      <h2 className="font-medium tracking-wide">{children}</h2>
    </div>
  );
}

export default SectionTitle;
