import { useDispatch, useSelector } from "react-redux";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";

import Button from "./Button";

import { toggleDarkMode } from "../store/modeSlice";

function ModeButton() {
  const { isDarkMode } = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  return (
    <Button
      variant="ghost"
      color="primary"
      size="medium"
      onClick={() => dispatch(toggleDarkMode())}
      ariaLabel="mode switch button"
    >
      {isDarkMode ? <FaRegSun /> : <FaRegMoon />}
    </Button>
  );
}

export default ModeButton;
