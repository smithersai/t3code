import { createReviewEnvironmentAtoms } from "@t3tools/client-runtime/state/review";

import { connectionAtomRuntime } from "../connection/runtime.vibe";

export const reviewEnvironment = createReviewEnvironmentAtoms(connectionAtomRuntime);
