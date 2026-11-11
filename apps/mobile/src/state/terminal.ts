import { createTerminalEnvironmentAtoms } from "@t3tools/client-runtime/state/terminal";

import { connectionAtomRuntime } from "../connection/runtime.vibe";

export const terminalEnvironment = createTerminalEnvironmentAtoms(connectionAtomRuntime);
