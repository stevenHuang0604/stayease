import Button from "../../ui/Button";
import ModeButton from "../../ui/ModeButton";
import Logo from "./Logo";

function Navigation() {
  return (
    <nav className="mx-auto max-w-full border-b-[1px] bg-violet-50 bg-opacity-30">
      <div className="flex h-20 items-center px-8 py-3">
        <Logo />
        <ul className="ml-auto flex items-center gap-4 text-lg">
          <li>
            <Button
              variant="default"
              color="primary"
              size="medium"
              to="./signin"
            >
              SignIn
            </Button>
          </li>
          <li>
            <Button
              variant="outline"
              color="primary"
              size="medium"
              to="/signup"
            >
              SignUp
            </Button>
          </li>
          <li>
            <ModeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
