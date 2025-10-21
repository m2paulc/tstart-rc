import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4">
      <h1 className="font-bold text-3xl">This is the Outlet for dashboard</h1>
    </div>
  );
}
