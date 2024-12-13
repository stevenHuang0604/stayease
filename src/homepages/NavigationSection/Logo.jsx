import { useSelector } from "react-redux";

function Logo() {
  const { isDarkMode } = useSelector((state) => state.mode);

  const src = isDarkMode ? "/logo-dark.svg" : "/logo-light.svg";

  return <img src={src} alt="StayEase logo" className="max-h-full" />;
}

export default Logo;
