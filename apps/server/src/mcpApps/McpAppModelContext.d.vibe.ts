import type { ThreadId, TurnItemId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as SqlClient from "effect/sql/SqlClient";
export declare const MCP_APP_MODEL_CONTEXT_MAX_BYTES: number;
declare const McpAppModelContextError_base: Schema.Class<McpAppModelContextError, Schema.TaggedStruct<"McpAppModelContextError", {
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class McpAppModelContextError extends McpAppModelContextError_base {
}
export interface McpAppModelContextEntry {
    readonly itemId: string;
    readonly server: string;
    readonly tool: string;
    readonly text: string;
}
declare const McpAppModelContext_base: Context.ServiceClass<McpAppModelContext, "t3/mcpApps/McpAppModelContext", {
    /** Empty text removes the app's context. */
    readonly set: (input: {
        readonly threadId: ThreadId;
        readonly itemId: TurnItemId;
        readonly server: string;
        readonly tool: string;
        readonly text: string;
    }) => Effect.Effect<void, McpAppModelContextError>;
    readonly forThread: (threadId: ThreadId) => Effect.Effect<readonly McpAppModelContextEntry[], McpAppModelContextError>;
}>;
export declare class McpAppModelContext extends McpAppModelContext_base {
}
export declare const layer: Layer.Layer<McpAppModelContext, never, SqlClient.SqlClient>;
export declare const layerEmpty: Layer.Layer<McpAppModelContext, never, never>;
export {};
