import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

    if (darkModeMediaQuery.matches)
      document.documentElement.classList.add("dark");

    setIsDarkMode(
      document.documentElement.classList.contains("dark") ||
        darkModeMediaQuery.matches,
    );
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((prevMode) => !prevMode);
  };

  return [isDarkMode, toggleDarkMode];
}
