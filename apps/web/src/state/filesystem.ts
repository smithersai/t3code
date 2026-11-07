import {
  createFilesystemEnvironmentAtoms,
  resolveFilesystemReadAccess,
} from "@t3tools/client-runtime/state/filesystem";
import type { EnvironmentId } from "@t3tools/contracts";

import { connectionAtomRuntime } from "../connection/runtime.vibe";
import { useEnvironmentPresentation } from "./presentation.vibe";
import { useEnvironmentQuery } from "./query.vibe";
import { environmentSession } from "./session.vibe";

export const filesystemEnvironment = createFilesystemEnvironmentAtoms(connectionAtomRuntime);

export function useFilesystemReadAccess(environmentId: EnvironmentId | null) {
  const session = useEnvironmentQuery(
    environmentId === null ? null : environmentSession.sessionStateAtom(environmentId),
  );
  const environment = useEnvironmentPresentation(environmentId);
  return resolveFilesystemReadAccess({
    isCatalogReady: environment.isReady,
    connection: environment.presentation?.connection ?? null,
    session: session.data,
    sessionError: session.error,
  });
}
