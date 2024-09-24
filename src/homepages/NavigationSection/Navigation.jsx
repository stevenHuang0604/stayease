import { FaRegMoon } from "react-icons/fa6";
import Button from "../../components/Button";

function Navigation() {
  return (
    <nav className="mx-auto max-w-full">
      <div className="flex h-32 items-center px-12 py-6">
        <img src="/logo-light.svg" alt="StayEase logo" className="h-full" />
        <div className="ml-auto flex items-center gap-4 text-lg">
          <Button variant="default" color="primary" size="medium" to="./signin">
            SignIn
          </Button>
          <Button variant="outline" color="primary" size="medium" to="/signup">
            SignUp
          </Button>
          <Button variant="ghost" color="primary" size="large">
            <FaRegMoon />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
