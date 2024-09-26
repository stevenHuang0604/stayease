import { Link, Outlet } from "react-router-dom";
import Logo from "../homepages/NavigationSection/Logo";

function AppLayout() {
  return (
    <div>
      <nav className="mx-auto max-w-full border-b-[1px] bg-violet-50 bg-opacity-30">
        <div className="flex h-20 items-center px-8 py-3">
          <div className="h-full">
            <Link to="/app" className="flex h-full items-center gap-4">
              <Logo />
              <div className="font-Agbalumo text-2xl font-bold tracking-wide text-violet-600">
                StayEase
              </div>
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-4 text-lg">
            <button className="h-10 w-10 cursor-pointer overflow-hidden rounded-full shadow outline outline-2 outline-slate-200 transition-all duration-300 hover:opacity-90 hover:shadow-md hover:outline-slate-300">
              <img
                src="/avatars/avatar-1.jpg"
                className="h-full w-full transition-all duration-300 hover:scale-105"
              />
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default AppLayout;
