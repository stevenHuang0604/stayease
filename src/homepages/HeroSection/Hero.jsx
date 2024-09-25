import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <main className="flex min-h-[80vh] bg-violet-50 bg-opacity-30 px-16 py-10 text-center">
      <HeroContent />
      <HeroImage />
    </main>
  );
}

export default Hero;
