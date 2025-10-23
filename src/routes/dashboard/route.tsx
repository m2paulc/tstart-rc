import SideNav from "@/components/Sidenav";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-screen bg-linear-to-br from-orange-100 via-stone-200 to-sky-100 md:flex-row md:overflow-hidden">
      <SideNav />
      <section>
        <Outlet />
      </section>
    </div>
  );
}
