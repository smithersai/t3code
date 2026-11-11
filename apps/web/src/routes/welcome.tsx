import { createFileRoute, redirect } from "@tanstack/react-router";

import { WelcomeRouteView } from "../components/WelcomeRouteView.vibex";

export const Route = createFileRoute("/welcome")({
  beforeLoad: ({ context }) => {
    const { authGateState } = context;
    if (authGateState.status !== "authenticated" && authGateState.status !== "hosted-static") {
      throw redirect({ to: "/pair", replace: true });
    }
  },
  component: WelcomeRouteView,
});
