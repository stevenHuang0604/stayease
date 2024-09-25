import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="flex h-full items-center gap-4" to="/">
      <img src="/logo-light.svg" alt="StayEase logo" className="h-full" />
      <div className="font-Agbalumo text-2xl font-bold tracking-wide text-violet-600">
        StayEase
      </div>
    </Link>
  );
}

export default Logo;
