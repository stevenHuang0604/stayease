import Logo from "../NavigationSection/Logo";

function HeroImage() {
  return (
    <p className="flex basis-2/4 flex-col items-center justify-center">
      <div className="max-w-[50%]">
        <Logo />
      </div>
    </p>
  );
}

export default HeroImage;
