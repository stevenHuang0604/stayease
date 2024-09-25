import {
  FaBolt,
  FaCreditCard,
  FaFireFlameCurved,
  FaSearchengin,
  FaUserShield,
} from "react-icons/fa6";
import FeatureItem from "./FeatureItem";
import SectionTitle from "../../ui/SectionTitle";

function Features() {
  const features = [
    {
      title: "Smart Search",
      description: "Advanced filtering and sorting for perfect accommodations",
      icon: <FaSearchengin />,
      color: "blue",
      key: self.crypto.randomUUID(),
    },
    {
      title: "Real-time Availability",
      description: "Up-to-the-minute room availability and instant booking",
      icon: <FaBolt />,
      color: "yellow",
      key: self.crypto.randomUUID(),
    },
    {
      title: "Personalized Recommendations ",
      description: "Tailored suggestions based on user preferences and history",
      icon: <FaUserShield />,
      color: "green",
      key: self.crypto.randomUUID(),
    },
    {
      title: "Secure Payments",
      description: "Multiple payment options with top-tier security measures",
      icon: <FaCreditCard />,
      color: "orange",
      key: self.crypto.randomUUID(),
    },
  ];

  return (
    <div className="bg-violet-100 px-16 py-16">
      <div className="flex flex-col gap-10">
        <SectionTitle>Our Best Features</SectionTitle>
        <ul className="grid-cols-auto-fit grid gap-4">
          {features.map((feature) => (
            <FeatureItem
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              key={feature.key}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Features;
