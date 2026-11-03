import { type AuthMcpClientAccess, type EnvironmentId, McpCapabilityUnavailableError, OrchestratorMcpFailure, PreviewAutomationUnavailableError, type ProviderInstanceId, type ProviderInteractionMode, type RuntimeMode, type ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
declare const ALL_MCP_CAPABILITIES: readonly ["preview", "orchestration", "worktree", "device", "pull-requests"];
export type McpCapability = (typeof ALL_MCP_CAPABILITIES)[number];
export interface McpThreadCaller {
    readonly threadId: ThreadId;
    readonly providerSessionId: string;
    readonly providerInstanceId: ProviderInstanceId;
    /** A delegated child task; its parent owns the work it hands back. */
    readonly subagent?: boolean;
}
export interface McpClientCaller {
    readonly sessionId: string;
    readonly label: string;
    readonly access: AuthMcpClientAccess;
    /**
     * Another T3 Code environment's peer link. What it starts here carries its
     * session as `linkOrigin`, and it changes only that work (`linkOrigin.ts`).
     */
    readonly linked?: boolean | undefined;
    /**
     * Narrower modes the client asked for on this request (`T3-Mode-Limit`):
     * another environment passing on the limits of the agent it calls for.
     */
    readonly narrowedTo?: ClientModes | undefined;
}
/**
 * `T3-Mode-Limit: <runtimeMode>/<interactionMode>` lets an OAuth client cap
 * a request below what it was approved with: another environment passes on
 * the limits of the agent it calls for. It can only narrow (see
 * `clientModeCeiling`), so a client gains nothing by sending a broad one.
 */
export declare const MODE_LIMIT_HEADER = "t3-mode-limit";
export interface ClientModes {
    readonly runtimeMode: RuntimeMode;
    readonly interactionMode: ProviderInteractionMode;
}
/**
 * The modes a client caller's writes are capped at: what it was approved
 * with, narrowed by what it asked for on this request. A read-only client
 * never reaches a write (`McpToolAccess` refuses it first), so it maps to the
 * lowest runtime mode rather than to nothing.
 */
export declare const clientModeCeiling: (client: McpClientCaller | undefined) => ClientModes;
/** Thread callers default to their own thread; client callers need thread for tools that act as the caller. */
export interface McpInvocationScope {
    readonly environmentId: EnvironmentId;
    readonly capabilities: ReadonlySet<McpCapability>;
    readonly issuedAt: number;
    readonly requestNamespace: string;
    readonly thread: McpThreadCaller | undefined;
    readonly client: McpClientCaller | undefined;
    /** False while the Linked environments beta is off here; `/mcp` reads it per request. */
    readonly linkedEnvironments?: boolean;
}
declare const McpInvocationContext_base: Context.ServiceClass<McpInvocationContext, "t3/mcp/McpInvocationContext", McpInvocationScope>;
export declare class McpInvocationContext extends McpInvocationContext_base {
}
/**
 * `McpSchema.EnabledWhen` for tools a delegated child must not see or call.
 * EnabledWhen only receives the MCP client profile, so read the T3 caller from the request fiber.
 */
export declare const hiddenFromSubagents: () => boolean;
/** `McpSchema.EnabledWhen` for tools that only serve links, hidden while the beta is off. */
export declare const hiddenWhileLinksOff: () => boolean;
export type McpCapabilityError<C extends McpCapability> = C extends "preview" ? PreviewAutomationUnavailableError : McpCapabilityUnavailableError;
export declare const requireMcpCapability: <const C extends McpCapability>(capability: C) => Effect.Effect<McpInvocationScope, McpCapabilityError<C>, McpInvocationContext>;
export declare const requireThreadMcpCapability: <const C extends "preview" | "device">(capability: C) => Effect.Effect<McpThreadInvocationScope, McpCapabilityError<C>, McpInvocationContext>;
export type McpThreadInvocationScope = McpInvocationScope & {
    readonly thread: McpThreadCaller;
};
export declare const requireThreadScope: (scope: McpInvocationScope, operation: string) => Effect.Effect<never, OrchestratorMcpFailure, never> | Effect.Effect<McpThreadInvocationScope, never, never>;
export {};
