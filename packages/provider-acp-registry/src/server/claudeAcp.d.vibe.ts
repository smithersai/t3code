import type * as AcpSchema from "effect-acp/compat";
import type { AcpToolCallState } from "@t3tools/provider-acp/server/runtimeModel";
import type { AcpAdapterV2SubagentUpdate, AcpSubagentSessionEvent } from "@t3tools/provider-acp/server/adapter";
export declare function isClaudeProvisionalSubagentTool(tool: AcpToolCallState): boolean;
export declare function extractClaudeSubagentUpdate(tool: AcpToolCallState): AcpAdapterV2SubagentUpdate | undefined;
export declare function extractClaudeSubagentSessionEvent(notification: AcpSchema.SessionNotification): AcpSubagentSessionEvent | undefined;
