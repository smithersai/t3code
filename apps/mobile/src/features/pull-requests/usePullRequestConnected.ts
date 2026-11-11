import { useWorkspaceEnvironments } from "../../state/workspace.vibe";

export function usePullRequestConnected(environmentId: string) {
  return useWorkspaceEnvironments().some(
    (environment) =>
      environment.environmentId === environmentId && environment.connectionState === "connected",
  );
}
