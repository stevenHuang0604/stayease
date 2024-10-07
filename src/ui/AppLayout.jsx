import { Link, NavLink, Outlet } from "react-router-dom";
import {
  HiOutlineBookmark,
  HiOutlineCalendarDays,
  HiOutlineHome,
} from "react-icons/hi2";

import Logo from "../homepages/NavigationSection/Logo";
import ModeButton from "./ModeButton";

function AppLayout() {
  return (
    <div className="flex h-screen flex-col">
      <header className="mx-auto w-full border-b-[1px] bg-violet-50 bg-opacity-30 dark:bg-violet-950">
        <div className="flex h-20 items-center px-8 py-3">
          <div className="h-full">
            <Link
              to={window.location.origin}
              className="flex h-full items-center gap-4"
            >
              <Logo />
              <div className="font-Agbalumo text-2xl font-bold tracking-wide text-violet-600 dark:text-violet-100">
                StayEase
              </div>
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-4 text-lg">
            <NavLink
              to="/app"
              end
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
                  isActive
                    ? "bg-violet-200 dark:bg-violet-800"
                    : "hover:bg-violet-100 dark:hover:bg-violet-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <HiOutlineHome
                    className={`${isActive ? "text-violet-700 dark:text-violet-300" : "text-slate-400 dark:text-slate-600"}`}
                  />
                  <span className="hidden text-base font-semibold text-slate-600 md:block dark:text-slate-400">
                    Home
                  </span>
                </>
              )}
            </NavLink>
            <NavLink
              to="reservations"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
                  isActive
                    ? "bg-violet-200 dark:bg-violet-800"
                    : "hover:bg-violet-100 dark:hover:bg-violet-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <HiOutlineCalendarDays
                    className={`${isActive ? "text-violet-700 dark:text-violet-300" : "text-slate-400 dark:text-slate-600"}`}
                  />
                  <span className="hidden text-base font-semibold text-slate-600 md:block dark:text-slate-400">
                    My Reservation
                  </span>
                </>
              )}
            </NavLink>
            <NavLink
              to="bookmarks"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
                  isActive
                    ? "bg-violet-200 dark:bg-violet-800"
                    : "hover:bg-violet-100 dark:hover:bg-violet-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <HiOutlineBookmark
                    className={`${isActive ? "text-violet-700 dark:text-violet-300" : "text-slate-400 dark:text-slate-600"}`}
                  />
                  <span className="hidden text-base font-semibold text-slate-600 md:block dark:text-slate-400">
                    Bookmarks
                  </span>
                </>
              )}
            </NavLink>

            <ModeButton />
          </div>
        </div>
      </header>

      <div className="flex-grow overflow-auto bg-slate-50 dark:bg-slate-950">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
