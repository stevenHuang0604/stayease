import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../homepages/NavigationSection/Logo";
import { HiOutlineBookmark, HiOutlineCalendarDays } from "react-icons/hi2";

function AppLayout() {
  return (
    <div>
      <header className="mx-auto max-w-full border-b-[1px] bg-violet-50 bg-opacity-30">
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
            <NavLink
              to="reservations"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
                  isActive ? "bg-violet-200" : "hover:bg-violet-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <HiOutlineCalendarDays
                    className={`${isActive ? "text-violet-700" : "text-slate-400"}`}
                  />
                  <span className="text-base font-semibold text-slate-600">
                    My Reservation
                  </span>
                </>
              )}
            </NavLink>
            <NavLink
              to="bookmarks"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
                  isActive ? "bg-violet-200" : "hover:bg-violet-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <HiOutlineBookmark
                    className={`${isActive ? "text-violet-700" : "text-slate-400"}`}
                  />
                  <span className="text-base font-semibold text-slate-600">
                    Bookmarks
                  </span>
                </>
              )}
            </NavLink>

            <button className="h-10 w-10 cursor-pointer overflow-hidden rounded-full shadow outline outline-2 outline-slate-200 transition-all duration-300 hover:opacity-90 hover:shadow-md hover:outline-slate-300">
              <img
                src="/avatars/avatar-1.jpg"
                className="h-full w-full transition-all duration-300 hover:scale-105"
              />
            </button>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default AppLayout;
