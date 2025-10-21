import { Link } from "@tanstack/react-router";
import NavLinks from "./Navlinks";

export default function SideNav() {
  return (
    <aside className="flex h-full flex-col p-2 md:py-4">
      <Link
        to="/"
        className="mb-2 flex h-20 items-end justify-start rounded bg-blue-600 p-4 md:h-40"
      >
        <div className="flex w-60 items-center text-white flex-row md:w-40 md:flex-col md:justify-center">
          <img
            src="/logo.svg"
            alt="logo"
            className="w-12 h-12 md:w-24 md:h-24"
          />
          <p className="ml-2 text-nowrap md:text-lg font-medium md:mt-2">
            New Bridge Garage
          </p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded bg-gray-50 md:block">
          <NavLinks />
        </div>
      </div>
    </aside>
  );
}
