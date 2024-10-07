import { useDarkMode } from "../useDarkMode";

function FooterLogo() {
  const [isDarkMode] = useDarkMode();

  const src = isDarkMode ? "/logo-light.svg" : "/logo-dark.svg";

  return <img src={src} alt="StayEase Logo" className="h-full w-full" />;
}

export default FooterLogo;
