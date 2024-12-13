import { useSelector } from "react-redux";

function FooterLogo() {
  // const [isDarkMode] = useDarkMode();
  const { isDarkMode } = useSelector((state) => state.mode);

  const src = isDarkMode ? "./logo-light.svg" : "./logo-dark.svg";

  return <img src={src} alt="StayEase Logo" className="h-full w-full" />;
}

export default FooterLogo;
