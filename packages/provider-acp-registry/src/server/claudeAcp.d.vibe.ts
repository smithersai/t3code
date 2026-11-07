import type * as AcpSchema from "effect-acp/compat";
import type { AcpToolCallState } from "@t3tools/provider-acp/server/runtimeModel";
import type { AcpAdapterV2SubagentUpdate, AcpSubagentSessionEvent } from "@t3tools/provider-acp/server/adapter";
/** @throws {never} */
export declare function isClaudeProvisionalSubagentTool(tool: AcpToolCallState): boolean;
/** @throws {never} */
export declare function extractClaudeSubagentUpdate(tool: AcpToolCallState): AcpAdapterV2SubagentUpdate | undefined;
/** @throws {never} */
export declare function extractClaudeSubagentSessionEvent(notification: AcpSchema.SessionNotification): AcpSubagentSessionEvent | undefined;
