import { type OrchestrationV2Run, type RunId, type ThreadId } from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import type { ProjectionRuntimeRecoveryState } from "./ProjectionStore.ts";
import * as ServerSettings from "../serverSettings.ts";
import * as ThreadManagementService from "./ThreadManagementService.ts";
/** Settled runs require a live session so stale crash records cannot wake them. */
export declare function restartContinuationRun(projection: Pick<ProjectionRuntimeRecoveryState, "thread" | "runs" | "providerThreads" | "providerSessions" | "providerTurns" | "runtimeRequests" | "turnItems">, now: DateTime.Utc): OrchestrationV2Run | undefined;
export declare const continueRestartedRun: (input: {
    readonly threadId: ThreadId;
    readonly sourceRunId: RunId;
}) => Effect.Effect<void, import("./Orchestrator.ts").OrchestratorCommandIdConflictError | import("./Orchestrator.ts").OrchestratorCommandPreviouslyRejectedError | import("./Orchestrator.ts").OrchestratorCommandRejectedError | import("./Orchestrator.ts").OrchestratorDispatchError | import("./Orchestrator.ts").OrchestratorDomainEventStreamError | import("./Orchestrator.ts").OrchestratorProjectionError | import("./Orchestrator.ts").OrchestratorProviderAdapterError | import("./Orchestrator.ts").OrchestratorSubagentThreadReadOnlyError | import("./Orchestrator.ts").OrchestratorThreadAboveModeLimitError | import("./Orchestrator.ts").OrchestratorThreadAlreadyExistsError, ServerSettings.ServerSettingsService | ThreadManagementService.ThreadManagementService>;
