import { OrchestratorMcpFailure, type ThreadMetadataMcpUpdateInput, type ThreadMetadataMcpUpdateResult } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ThreadManagementService from "../orchestration-v2/ThreadManagementService.ts";
import type { McpInvocationScope } from "./McpInvocationContext.vibe";
declare const ThreadMetadataMcpService_base: Context.ServiceClass<ThreadMetadataMcpService, "t3/mcp/ThreadMetadataMcpService", {
    readonly update: (scope: McpInvocationScope, input: ThreadMetadataMcpUpdateInput) => Effect.Effect<ThreadMetadataMcpUpdateResult, OrchestratorMcpFailure>;
}>;
export declare class ThreadMetadataMcpService extends ThreadMetadataMcpService_base {
}
export declare const layer: Layer.Layer<ThreadMetadataMcpService, never, Crypto.Crypto | ThreadManagementService.ThreadManagementService>;
export {};
