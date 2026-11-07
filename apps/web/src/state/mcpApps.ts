import { createMcpAppEnvironmentAtoms } from "@t3tools/client-runtime/state/mcp-apps";

import { connectionAtomRuntime } from "../connection/runtime.vibe";

export const mcpAppEnvironment = createMcpAppEnvironmentAtoms(connectionAtomRuntime);
