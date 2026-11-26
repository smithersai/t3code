import { createFilesystemEnvironmentAtoms } from "@t3tools/client-runtime/state/filesystem";

import { connectionAtomRuntime } from "../connection/runtime.vibe";

export const filesystemEnvironment = createFilesystemEnvironmentAtoms(connectionAtomRuntime);
