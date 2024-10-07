import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

    setIsDarkMode(
      document.documentElement.classList.contains("dark") ||
        darkModeMediaQuery.matches,
    );

    if (darkModeMediaQuery.matches)
      document.documentElement.classList.add("dark");

    /*
    useEffect hook with empty dependencies array runs once after the initial render.
    The MutationObserver is created and set up.
    Once set up, the observer continues to run independently of React's lifecycle.
    The observer persists and continues to monitor the DOM for changes ocne initialized.
    The callback function has closure over the setIsDarkMode function, allowing it to update the React state.
    */
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log(mutation);
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Clean-up function ensures the observer is properly cleaned up when the component unmounts
    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
}
