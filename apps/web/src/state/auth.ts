import { createAuthEnvironmentAtoms } from "@t3tools/client-runtime/state/auth";

import { connectionAtomRuntime } from "../connection/runtime.vibe";

export const authEnvironment = createAuthEnvironmentAtoms(connectionAtomRuntime);
