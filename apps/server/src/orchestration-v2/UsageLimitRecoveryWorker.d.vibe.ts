import { type OrchestrationV2Command } from "@t3tools/contracts";
import * as Layer from "effect/Layer";
import * as Scheduler from "../scheduling/Scheduler.vibe";
import * as ServerSettings from "../serverSettings.ts";
import * as ProjectionStore from "./ProjectionStore.ts";
import * as Orchestrator from "./Orchestrator.ts";
import * as ThreadManagement from "./ThreadManagementService.ts";
export declare function limitRecoveryCommand(thread: ProjectionStore.ProjectionLimitRecoveryCandidate, autoResume: boolean, nowMs: number, snooze?: boolean): OrchestrationV2Command | null;
export declare const layer: Layer.Layer<never, never, Orchestrator.OrchestratorV2 | ProjectionStore.ProjectionStoreV2 | Scheduler.Scheduler | ServerSettings.ServerSettingsService | ThreadManagement.ThreadManagementService>;
