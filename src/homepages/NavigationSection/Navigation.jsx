import Button from "../../ui/Button";
import ModeButton from "../../ui/ModeButton";
import Logo from "./Logo";

function Navigation() {
  return (
    <nav className="mx-auto max-w-full bg-violet-50 bg-opacity-30">
      <div className="flex h-32 items-center px-8 py-4">
        <Logo />
        <div className="ml-auto flex items-center gap-4 text-lg">
          <Button variant="default" color="primary" size="medium" to="./signin">
            SignIn
          </Button>
          <Button variant="outline" color="primary" size="medium" to="/signup">
            SignUp
          </Button>
          <ModeButton />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
