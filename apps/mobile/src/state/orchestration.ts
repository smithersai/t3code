import { createOrchestrationEnvironmentAtoms } from "@t3tools/client-runtime/state/orchestration";

import { connectionAtomRuntime } from "../connection/runtime.vibe";
import { recordReviewTurnDiffAnswer } from "./reviewTurnDiffs.vibe";

export const orchestrationEnvironment = createOrchestrationEnvironmentAtoms(connectionAtomRuntime, {
  onCheckpointDiffAnswer: recordReviewTurnDiffAnswer,
});
