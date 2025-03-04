import { HiOutlineArrowRight } from "react-icons/hi2";
import Button from "../ui/Button";

function PageNotFound() {
  return (
    <main className="fc h-screen flex-col">
      <h1 className="mb-8 text-4xl font-semibold">Page Not Found!</h1>
      <Button size="large" onClick={() => window.history.go(-1)}>
        Go back to home page
        <HiOutlineArrowRight />
      </Button>
    </main>
  );
}

export default PageNotFound;
