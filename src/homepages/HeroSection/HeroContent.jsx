import Button from "../../ui/Button";
import Logo from "../NavigationSection/Logo";

function HeroContent() {
  return (
    <div className="flex basis-2/4 flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold leading-tight text-violet-900 md:text-5xl lg:text-6xl">
        Simplify Your Stay,{" "}
        <span className="text-violet-600">Amplify Your Experience</span>
      </h1>
      <p className="text-lg text-gray-700 md:text-xl">
        StayEase is a modern hotel reservation system, designed to provide users
        with a convenient and efficient reservation experience.
      </p>
      <div className="flex space-x-4">
        <Button variant="default" color="primary" size="large">
          Book Now
        </Button>
        <Button variant="outline" color="primary" size="large">
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default HeroContent;
