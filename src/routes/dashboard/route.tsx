import SideNav from "@/components/Sidenav";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-screen bg-linear-to-br from-neutral-100 via-stone-200 to-sky-100 md:overflow-hidden">
      <SideNav />
      <section>
        <Outlet />
      </section>
    </div>
  );
}
