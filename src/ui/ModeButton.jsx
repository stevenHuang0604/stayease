import { FaRegMoon } from "react-icons/fa6";

import Button from "./Button";

function ModeButton() {
  return (
    <Button variant="ghost" color="primary" size="medium">
      <FaRegMoon />
    </Button>
  );
}

export default ModeButton;
