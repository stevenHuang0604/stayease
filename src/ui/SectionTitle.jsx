import { FaFireFlameCurved } from "react-icons/fa6";

function SectionTitle({ children }) {
  return (
    <div className="text-c flex items-center gap-2 text-3xl text-violet-600">
      <FaFireFlameCurved className="text-orange-500" />
      <h2 className="font-medium tracking-wide">{children}</h2>
    </div>
  );
}

export default SectionTitle;
