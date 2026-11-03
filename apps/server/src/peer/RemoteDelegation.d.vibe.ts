import { type EnvironmentId, NodeId, OrchestratorMcpFailure, type OrchestratorMcpDelegateTaskInput, type OrchestratorMcpTaskCancelResult, type OrchestrationV2Subagent } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schedule from "effect/Schedule";
import * as Scope from "effect/Scope";
import type * as McpInvocationContext from "../mcp/McpInvocationContext.ts";
import * as ProjectionStore from "../orchestration-v2/ProjectionStore.ts";
import * as ThreadManagement from "../orchestration-v2/ThreadManagementService.ts";
import * as ServerEnvironment from "../environment/ServerEnvironment.ts";
import * as ProjectService from "../project/ProjectService.ts";
import * as RepositoryIdentityResolver from "../project/RepositoryIdentityResolver.ts";
import * as PeerForwarding from "./PeerForwarding.ts";
import * as PeerLinks from "./PeerLinks.vibe";
/** How a follower retries; tests step it by hand. */
export declare const FollowRetrySchedule: Context.Reference<Schedule.Schedule<unknown, unknown, never, never>>;
type ThreadScope = McpInvocationContext.McpThreadInvocationScope;
declare const RemoteDelegation_base: Context.ServiceClass<RemoteDelegation, "t3/peer/RemoteDelegation", {
    readonly delegate: (scope: ThreadScope, input: OrchestratorMcpDelegateTaskInput & {
        readonly target: NonNullable<OrchestratorMcpDelegateTaskInput["target"]> & {
            readonly environmentId: EnvironmentId;
        };
    }) => Effect.Effect<{
        readonly taskId: NodeId;
    }, OrchestratorMcpFailure>;
    /**
     * Stops the task's thread there, then completes it here as cancelled. A
     * task that already has its result keeps it; its thread there is still
     * stopped, as cancelling a local task stops follow-up work on its child.
     */
    readonly cancel: (scope: ThreadScope, task: OrchestrationV2Subagent, input: {
        readonly reason?: string | undefined;
        readonly clientRequestId?: string | undefined;
    }) => Effect.Effect<OrchestratorMcpTaskCancelResult, OrchestratorMcpFailure>;
    /**
     * Follows every open remote task until it ends, including after a
     * restart, and a finished one again when a Stop here owes it a stop there.
     */
    readonly start: () => Effect.Effect<void, never, Scope.Scope>;
}>;
/**
 * `delegate_task` to a linked environment. The task's child is an ordinary
 * thread there, launched through the link; the parent here records the task
 * like a local one, without a child thread, and a follower completes it when
 * the thread there ends, so the parent wakes as it would for a local child.
 */
export declare class RemoteDelegation extends RemoteDelegation_base {
}
export declare const layer: Layer.Layer<RemoteDelegation, never, Crypto.Crypto | PeerForwarding.PeerForwarding | PeerLinks.PeerLinks | ProjectService.ProjectService | ProjectionStore.ProjectionStoreV2 | RepositoryIdentityResolver.RepositoryIdentityResolver | ServerEnvironment.ServerEnvironment | ThreadManagement.ThreadManagementService>;
export {};
