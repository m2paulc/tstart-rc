import { ConvexQueryClient } from "@convex-dev/react-query";
import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { ConvexProvider } from "convex/react";
import * as TanstackQuery from "./integrations/tanstack-query/root-provider";

// Import the generated route tree
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";

// Create a new router instance
export const getRouter = () => {
  const CONVEX_URL = (import.meta as any).env.VITE_CONVEX_URL!;
  if (!CONVEX_URL) {
    console.error("missing envar VITE_CONVEX_URL");
  }

  const convexQueryClient = new ConvexQueryClient(CONVEX_URL);

  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryKeyHashFn: convexQueryClient.hashFn(),
        queryFn: convexQueryClient.queryFn(),
      },
    },
  });
  convexQueryClient.connect(queryClient);

  const rqContext = TanstackQuery.getContext();

  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    // context: { ...rqContext },
    context: { queryClient },
    defaultPreload: "intent",
    Wrap: (props: { children: React.ReactNode }) => {
      return (
        <ConvexProvider client={convexQueryClient.convexClient}>
          {/* <TanstackQuery.Provider {...rqContext}> */}
          {props.children}
          {/* </TanstackQuery.Provider> */}
        </ConvexProvider>
      );
    },
  });

  setupRouterSsrQueryIntegration({
    router,
    // queryClient: rqContext.queryClient,
    queryClient,
  });

  return router;
};
