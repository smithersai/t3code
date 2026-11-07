import { createEnvironmentCatalogAtoms } from "@t3tools/client-runtime/state/connections";

import { connectionAtomRuntime } from "./runtime.vibe";

export const environmentCatalog = createEnvironmentCatalogAtoms(connectionAtomRuntime);
