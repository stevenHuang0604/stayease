import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <main className="relative flex max-h-max flex-col gap-4 overflow-hidden bg-violet-50 bg-opacity-30 px-10 py-10 text-center sm:min-h-[80vh] sm:gap-0 md:px-12 md:py-12 lg:flex-row lg:px-16 lg:py-16">
      <HeroContent />
      <HeroImage />
    </main>
  );
}

export default Hero;
