import { convexQuery } from "@convex-dev/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { api } from "../../../convex/_generated/api";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useSuspenseQuery(convexQuery(api.tasks.getTasks, {}));
  return (
    <div className="p-4">
      {data.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
    </div>
  );
}
