import * as Effect from "effect/Effect";
import type * as AcpSchema from "effect-acp/compat";
import type { AcpToolCallState } from "@t3tools/provider-acp/server/runtimeModel";
import type { AcpAdapterV2ExtensionContext, AcpAdapterV2SubagentUpdate } from "@t3tools/provider-acp/server/adapter";
export declare const copilotClientCapabilitiesMeta: {
    "github.com/copilot": {
        events: string[];
    };
};
/** @throws {never} */
export declare function makeCopilotSubagentRouting(): {
    registerExtensions: (context: AcpAdapterV2ExtensionContext) => Effect.Effect<void, never, never>;
    normalizeSessionUpdate: (notification: AcpSchema.SessionNotification) => AcpSchema.SessionNotification;
};
/** @throws {never} */
export declare function extractCopilotSubagentUpdate(tool: AcpToolCallState): AcpAdapterV2SubagentUpdate | undefined;
