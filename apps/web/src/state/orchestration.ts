import { createOrchestrationEnvironmentAtoms } from "@t3tools/client-runtime/state/orchestration";

import { connectionAtomRuntime } from "../connection/runtime.vibe";

export const orchestrationEnvironment = createOrchestrationEnvironmentAtoms(connectionAtomRuntime);
