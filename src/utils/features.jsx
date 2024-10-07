import {
  FaBolt,
  FaCreditCard,
  FaSearchengin,
  FaUserShield,
} from "react-icons/fa6";

const features = [
  {
    title: "Smart Search",
    description: "Advanced filtering and sorting for perfect accommodations",
    icon: <FaSearchengin />,
    color: "blue",
    key: 1,
  },
  {
    title: "Real-time Availability",
    description: "Up-to-the-minute room availability and instant booking",
    icon: <FaBolt />,
    color: "yellow",
    key: 2,
  },
  {
    title: "Personalized Recommendations ",
    description: "Tailored suggestions based on user preferences and history",
    icon: <FaUserShield />,
    color: "green",
    key: 3,
  },
  {
    title: "Secure Payments",
    description: "Multiple payment options with top-tier security measures",
    icon: <FaCreditCard />,
    color: "orange",
    key: 4,
  },
];

export default features;
