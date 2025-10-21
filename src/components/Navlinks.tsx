import { Link, useRouterState } from "@tanstack/react-router";
import clsx from "clsx";
import {
  CarIcon,
  CogIcon,
  DollarSignIcon,
  HomeIcon,
  ReceiptIcon,
  TagIcon,
  ToolCaseIcon,
  User2Icon,
} from "lucide-react";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Customers", href: "/customers", icon: User2Icon },
  {
    name: "Invoices",
    href: "/invoices",
    icon: ReceiptIcon,
  },
  { name: "Vehicles", href: "/vehicles", icon: CarIcon },
  { name: "Parts Store", href: "/parts-store", icon: ToolCaseIcon },
  { name: "Labor Category", href: "/labor-description", icon: TagIcon },
  {
    name: "Labor Setting",
    href: "/labor-setting",
    icon: DollarSignIcon,
  },
  { name: "Admin", href: "/admin", icon: CogIcon },
];

export default function NavLinks() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            to={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-4 rounded-md bg-gray-50 p-4 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              { "bg-sky-100 text-blue-600": pathname === link.href }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
