import { createSourceControlEnvironmentAtoms } from "@t3tools/client-runtime/state/source-control";

import { connectionAtomRuntime } from "../connection/runtime.vibe";

export const sourceControlEnvironment = createSourceControlEnvironmentAtoms(connectionAtomRuntime);
