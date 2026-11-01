import type { ProviderApprovalDecision, ProviderApprovalOption } from "@t3tools/contracts";
import type * as EffectCodexSchema from "effect-codex-app-server/schema";
export declare function describeMcpElicitation(payload: EffectCodexSchema.McpServerElicitationRequestParams): {
    readonly appName: string;
    readonly options: ReadonlyArray<ProviderApprovalOption>;
};
export declare function toMcpElicitationResponse(payload: EffectCodexSchema.McpServerElicitationRequestParams, decision: ProviderApprovalDecision): EffectCodexSchema.McpServerElicitationRequestResponse;
