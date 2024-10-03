import ReservationsContainer from "../../features/reservations/ReservationsContainer";

function HeroImage() {
  return (
    <div className="perspective-1000 flex basis-2/4 scale-90 overflow-hidden opacity-50 lg:absolute lg:left-2/4 lg:top-2/4 lg:translate-y-[-50%] lg:scale-[0.70]">
      <div className="rotate-3d-[-1,1,-1,-15deg] max-w-full transform">
        <ReservationsContainer page="home" />
      </div>
    </div>
  );
}

export default HeroImage;
