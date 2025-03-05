import { Link } from "react-router-dom";

import ModeButton from "../../ui/ModeButton";
import Logo from "./Logo";

function Navigation() {
  return (
    <nav className="mx-auto h-20 w-full max-w-full border-b bg-violet-50 bg-opacity-30 dark:bg-violet-950">
      <div className="flex h-full items-center px-8 py-3">
        <div className="h-full">
          <Link to="/" className="flex h-full items-center gap-4">
            <Logo />
            <span className="font-Agbalumo text-2xl font-bold tracking-wide text-violet-600 dark:text-violet-100">
              StayEase
            </span>
          </Link>
        </div>
        <ul className="ml-auto flex items-center gap-4 text-lg">
          <li>
            <ModeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
