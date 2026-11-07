import { createPreviewEnvironmentAtoms } from "@t3tools/client-runtime/state/preview";

import { connectionAtomRuntime } from "../connection/runtime.vibe";

export const previewEnvironment = createPreviewEnvironmentAtoms(connectionAtomRuntime);
