import Button from "../../ui/Button";

function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8">
      <h1 className="text-3xl font-bold leading-tight text-violet-900 md:text-4xl lg:text-6xl dark:text-violet-100">
        Simplify Your Stay,{" "}
        <span className="text-violet-600 dark:text-violet-400">
          Amplify Your Experience
        </span>
      </h1>
      <p className="text-base text-gray-700 md:text-lg lg:text-xl dark:text-gray-300">
        StayEase is a modern hotel reservation system, designed to provide users
        with a convenient and efficient reservation experience.
      </p>
      <div className="flex space-x-4">
        <Button variant="default" color="primary" size="large" to="/app">
          Book Now
        </Button>
        <Button variant="outline" color="primary" size="large" to="/app">
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default HeroContent;
