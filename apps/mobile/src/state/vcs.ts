import {
  createVcsActionManager,
  createVcsEnvironmentAtoms,
} from "@t3tools/client-runtime/state/vcs";

import { connectionAtomRuntime } from "../connection/runtime.vibe";

export const vcsEnvironment = createVcsEnvironmentAtoms(connectionAtomRuntime);
export const vcsActionManager = createVcsActionManager(connectionAtomRuntime);
