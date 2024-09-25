import Logo from "../NavigationSection/Logo";

function HeroImage() {
  return (
    <div className="flex basis-2/4 flex-col items-center justify-center">
      <div className="max-w-[50%]">
        <Logo />
      </div>
    </div>
  );
}

export default HeroImage;
