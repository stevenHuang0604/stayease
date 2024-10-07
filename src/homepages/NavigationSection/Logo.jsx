import { useDarkMode } from "../useDarkMode";

function Logo() {
  const [isDarkMode] = useDarkMode();

  const src = isDarkMode ? "/logo-dark.svg" : "/logo-light.svg";

  return <img src={src} alt="StayEase logo" className="max-h-full" />;
}

export default Logo;
