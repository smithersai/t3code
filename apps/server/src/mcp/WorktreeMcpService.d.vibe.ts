import { WorktreeMcpFailure, type WorktreeMcpHandoffInput, type WorktreeMcpHandoffResult, type WorktreeMcpStatusResult } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as GitWorkflowService from "../git/GitWorkflowService.vibe";
import * as ThreadManagementService from "../orchestration-v2/ThreadManagementService.ts";
import * as ProjectService from "../project/ProjectService.ts";
import * as ProjectSetupScriptRunner from "../project/ProjectSetupScriptRunner.ts";
import * as ServerSettings from "../serverSettings.ts";
import * as VcsStatusBroadcaster from "../vcs/VcsStatusBroadcaster.ts";
import type { McpInvocationScope } from "./McpInvocationContext.vibe";
declare const WorktreeMcpService_base: Context.ServiceClass<WorktreeMcpService, "t3/mcp/WorktreeMcpService", {
    readonly handoff: (scope: McpInvocationScope, input: WorktreeMcpHandoffInput) => Effect.Effect<WorktreeMcpHandoffResult, WorktreeMcpFailure>;
    readonly status: (scope: McpInvocationScope) => Effect.Effect<WorktreeMcpStatusResult, WorktreeMcpFailure>;
}>;
export declare class WorktreeMcpService extends WorktreeMcpService_base {
}
export declare const layer: Layer.Layer<WorktreeMcpService, never, Crypto.Crypto | ThreadManagementService.ThreadManagementService | ProjectService.ProjectService | ServerSettings.ServerSettingsService | GitWorkflowService.GitWorkflowService | ProjectSetupScriptRunner.ProjectSetupScriptRunner | VcsStatusBroadcaster.VcsStatusBroadcaster>;
export {};
