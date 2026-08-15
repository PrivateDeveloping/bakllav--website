import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: {
      queryClient,
      siteOrigin: typeof window !== "undefined" ? window.location.origin : undefined,
    },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
