import Button from "../../ui/Button";

function HeroContent() {
  return (
    <div className="order-2 flex basis-2/4 flex-col items-center justify-center gap-4 sm:order-1 md:gap-6 lg:gap-8">
      <h1 className="text-3xl font-bold leading-tight text-violet-900 md:text-4xl lg:text-6xl">
        Simplify Your Stay,{" "}
        <span className="text-violet-600">Amplify Your Experience</span>
      </h1>
      <p className="text-base text-gray-700 md:text-lg lg:text-xl">
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
