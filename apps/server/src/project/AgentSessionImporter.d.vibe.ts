import { AgentSessionImportProjectChangedError, AgentSessionImportProjectNotFoundError, AgentSessionScanError } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as EventSink from "../orchestration-v2/EventSink.ts";
import * as IdAllocator from "@t3tools/provider-core/server/IdAllocator";
import * as Orchestrator from "../orchestration-v2/Orchestrator.ts";
import * as ProviderSessionRuntime from "../persistence/ProviderSessionRuntime.ts";
import * as AgentSessionScanner from "./AgentSessionScanner.ts";
import * as ProjectService from "./ProjectService.ts";
declare const AgentSessionImporter_base: Context.ServiceClass<AgentSessionImporter, "t3/project/AgentSessionImporter", {
    importRecentAgentThreads: (input: {
        projectId: string & import("effect/Brand").Brand<"ProjectId">;
        expectedWorkspaceRoot?: string | undefined;
    }) => Effect.Effect<{
        importedCount: number;
        skippedCount: number;
    }, AgentSessionImportProjectChangedError | AgentSessionImportProjectNotFoundError | AgentSessionScanError, never>;
}>;
export declare class AgentSessionImporter extends AgentSessionImporter_base {
}
export declare const layer: Layer.Layer<AgentSessionImporter, never, AgentSessionScanner.AgentSessionScanner | EventSink.EventSinkV2 | IdAllocator.IdAllocatorV2 | Orchestrator.OrchestratorV2 | ProjectService.ProjectService | ProviderSessionRuntime.ProviderSessionRuntimeRepository>;
export {};
