import { createEnvironmentProjectAtoms } from "@t3tools/client-runtime/state/projects";
import { createProjectEnvironmentAtoms } from "@t3tools/client-runtime/state/projects";

import { environmentCatalog } from "../connection/catalog";
import { connectionAtomRuntime } from "../connection/runtime.vibe";
import { environmentSnapshotAtom } from "./shell.vibe";
import { serverEnvironment } from "./server";

export const environmentProjects = createEnvironmentProjectAtoms({
  catalogValueAtom: environmentCatalog.catalogValueAtom,
  snapshotAtom: environmentSnapshotAtom,
  serverConfigValueAtom: serverEnvironment.configValueAtom,
});
export const projectEnvironment = createProjectEnvironmentAtoms(connectionAtomRuntime, {
  projectAtom: environmentProjects.projectAtom,
});
