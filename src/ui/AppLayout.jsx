import { Link, NavLink, Outlet } from "react-router-dom";
import {
  HiOutlineBookmark,
  HiOutlineCalendarDays,
  HiOutlineHome,
} from "react-icons/hi2";

import Logo from "../homepages/NavigationSection/Logo";
import ModeButton from "./ModeButton";

function activeLinkStyling({ isActive }) {
  return `fvc gap-2 rounded-md px-3 py-2 transition-all ${
    isActive
      ? "bg-violet-200 dark:bg-violet-800"
      : "hover:bg-violet-100 dark:hover:bg-violet-900"
  }`;
}

function activeLinkContent(Icon, title) {
  const contentComponent = ({ isActive }) => (
    <>
      <Icon
        className={`${isActive ? "text-violet-700 dark:text-violet-300" : "text-slate-400 dark:text-slate-600"}`}
      />
      <span className="hidden text-base font-semibold text-slate-600 md:block dark:text-slate-400">
        {title}
      </span>
    </>
  );

  return contentComponent;
}

function AppLayout() {
  return (
    <div className="flex h-screen flex-col">
      <header className="mx-auto w-full border-b-[1px] bg-violet-50 bg-opacity-30 dark:bg-violet-950">
        <div className="fvc h-20 px-8 py-3">
          <div className="h-full">
            <Link to="/" className="fvc h-full gap-4">
              <Logo />
              <span className="hidden font-Agbalumo text-2xl font-bold tracking-wide text-violet-600 md:block dark:text-violet-100">
                StayEase
              </span>
            </Link>
          </div>
          <nav className="fvc ml-auto gap-4 text-lg">
            <NavLink to="/app" end className={activeLinkStyling}>
              {activeLinkContent(HiOutlineHome, "Home")}
            </NavLink>
            <NavLink to="reservations" className={activeLinkStyling}>
              {activeLinkContent(HiOutlineCalendarDays, "My Reservation")}
            </NavLink>
            <NavLink to="bookmarks" className={activeLinkStyling}>
              {activeLinkContent(HiOutlineBookmark, "Bookmarks")}
            </NavLink>

            <ModeButton />
          </nav>
        </div>
      </header>

      <div className="flex-grow overflow-auto bg-slate-50 dark:bg-slate-950">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
