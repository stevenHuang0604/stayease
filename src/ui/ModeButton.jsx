import { FaRegMoon, FaRegSun } from "react-icons/fa6";

import Button from "./Button";
import { useDarkMode } from "../homepages/useDarkMode";

function ModeButton() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <Button
      variant="ghost"
      color="primary"
      size="medium"
      onClick={toggleDarkMode}
      ariaLabel="mode switch button"
    >
      {isDarkMode ? <FaRegSun /> : <FaRegMoon />}
    </Button>
  );
}

export default ModeButton;
