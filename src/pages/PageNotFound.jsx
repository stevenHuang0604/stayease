import { HiOutlineArrowRight } from "react-icons/hi2";
import Button from "../ui/Button";

function PageNotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-4xl font-semibold">Page Not Found!</h1>
      <Button to="/" size="large">
        Go back to home page
        <HiOutlineArrowRight />
      </Button>
    </main>
  );
}

export default PageNotFound;
