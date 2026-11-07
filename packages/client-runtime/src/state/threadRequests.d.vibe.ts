import type { EnvironmentId, ThreadId, OrchestrationV2ThreadProjection, OrchestrationV2RuntimeRequest, OrchestrationV2UserInputQuestion, ProviderApprovalFullAccessOverride, ProviderApprovalOption, ProviderApprovalDecision, ProviderRequestKind, RuntimeRequestId } from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
import type { AtomCommandResult } from "./runtime.ts";
import type { ThreadStructure, ThreadStructureVisibleTurnItem } from "./models.vibe";
import type { ThreadRequestsResolved } from "./threadRequests.vibe.throwing.js";
export type { ThreadRequestsResolved } from "./threadRequests.vibe.throwing.js";
export type ApprovalResponder = 
/** @throws {never} */
(requestId: RuntimeRequestId, decision: ProviderApprovalDecision, feedback?: string) => Promise<AtomCommandResult<unknown, unknown> | undefined>;
/**
 * Feedback belongs to the displayed request, which may be a native child's tool call.
 * @throws {never}
 */
export declare function sendApprovalFeedback(approval: ThreadPendingApproval, feedback: string, respond: ApprovalResponder): Promise<boolean>;
/**
 * Declines every approval a redirect replaces; any one still pending would block the agent.
 * @throws {never}
 */
export declare function declinePendingApprovals(approvals: ReadonlyArray<ThreadPendingApproval>, respond: ApprovalResponder): Promise<boolean>;
export interface ThreadPendingApproval {
    readonly requestId: RuntimeRequestId;
    readonly requestKind: ProviderRequestKind;
    readonly createdAt: string;
    readonly detail?: string;
    readonly reason?: string;
    readonly fullAccessOverride?: ProviderApprovalFullAccessOverride;
    readonly appName?: string;
    readonly options?: ReadonlyArray<ProviderApprovalOption>;
    readonly responseCapability: "live" | "not_resumable";
    readonly supportsFeedback?: boolean;
}
export declare const FULL_ACCESS_OVERRIDE_QUESTION = "Why am I being asked this?";
/** @throws {never} */
export declare function fullAccessOverrideExplanation(override: ProviderApprovalFullAccessOverride): string;
export interface ThreadUserInputQuestion extends Omit<OrchestrationV2UserInputQuestion, "multiSelect"> {
    readonly multiSelect: boolean;
}
export interface ThreadPendingUserInput {
    readonly requestId: RuntimeRequestId;
    readonly createdAt: string;
    readonly questions: ReadonlyArray<ThreadUserInputQuestion>;
    readonly responseCapability: OrchestrationV2RuntimeRequest["responseCapability"]["type"];
    readonly responseMode?: "message";
    readonly dismissible: boolean;
}
export interface PendingThreadRequests {
    readonly approvals: ReadonlyArray<ThreadPendingApproval>;
    readonly userInputs: ReadonlyArray<ThreadPendingUserInput>;
}
/** @throws {never} */
export declare function seedUserInputDraftAnswers<Draft extends {
    readonly customAnswer?: string;
}>(questions: ReadonlyArray<Pick<OrchestrationV2UserInputQuestion, "id" | "allowCustomAnswer" | "initialAnswer">>, drafts: Record<string, Draft>): Record<string, Draft | {
    customAnswer: string;
}>;
/**
 * Keys a user-input draft by thread so a thread's resolved requests can be pruned together.
 * @throws {never}
 */
export declare function userInputDraftKey(environmentId: string, threadId: string | null, requestId: string | undefined): string;
/**
 * Drops the thread's drafts for requests outside `pendingRequestIds`, leaving
 * other threads alone. Returns the input itself when nothing is dropped.
 * @throws {never}
 */
export declare function pruneResolvedUserInputDrafts<T>(draftsByRequestKey: Record<string, T>, environmentId: string, threadId: string, pendingRequestIds: ReadonlyArray<string>): Record<string, T>;
/**
 * Question attachment drafts are keyed `<thread prefix><encoded [requestId, questionId]>`.
 * Returns the keys under `threadPrefix` whose request is outside `pendingRequestIds`.
 * @throws {never}
 */
export declare function resolvedQuestionDraftKeys(keys: Iterable<string>, threadPrefix: string, pendingRequestIds: ReadonlyArray<string>): string[];
/**
 * Clients register draft pruners once at module level. Thread state announces
 * when its synchronized projection first lands and whenever a request leaves
 * pending, wherever the resolution came from (another device, interrupt, turn end).
 * @throws {never}
 */
export declare function onThreadRequestsResolved(listener: 
/** @throws {never} */
(event: ThreadRequestsResolved) => void): 
/** @throws {never} */
() => void;
/**
 * Tracks one thread's announced pending requests. Feed it the pending ids of
 * each authoritative projection; it notifies on the first one and whenever an
 * announced request is no longer pending. New requests alone stay quiet.
 * @throws {never}
 */
export declare function makeThreadRequestsResolvedAnnouncer(environmentId: EnvironmentId, threadId: ThreadId): 
/** @throws {never} */
(pendingRequestIds: ReadonlyArray<RuntimeRequestId>) => void;
/** @throws {never} */
export declare function pendingRuntimeRequestIds(projection: Pick<OrchestrationV2ThreadProjection, "runtimeRequests">): RuntimeRequestId[];
/** @throws {never} */
export declare function derivePendingThreadRequests(projection: Pick<ThreadStructure, "runtimeRequests" | "turnItems">): PendingThreadRequests;
/** @throws {never} */
export declare function createQuestionHistoryProjector<Row extends ThreadStructureVisibleTurnItem = OrchestrationV2ThreadProjection["visibleTurnItems"][number]>(): 
/** @throws {never} */
(projection: {
    readonly visibleTurnItems: readonly Row[];
    readonly runtimeRequests: readonly {
        readonly id: string & import("effect/Brand").Brand<"RuntimeRequestId">;
        readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeRequestRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly kind: "auth_refresh" | "command" | "dynamic_tool_call" | "file-change" | "file-read" | "mcp-elicitation" | "permission" | "user_input";
        readonly status: "cancelled" | "expired" | "pending" | "resolved";
        readonly responseCapability: {
            readonly type: "message";
        } | {
            readonly type: "not_resumable";
            readonly reason: string;
        } | {
            readonly type: "live";
            readonly providerSessionId: string & import("effect/Brand").Brand<"ProviderSessionId">;
            readonly supportsFeedback?: boolean | undefined;
        };
        readonly createdAt: DateTime.Utc;
        readonly resolvedAt: DateTime.Utc | null;
        readonly decision?: "accept" | "acceptAlways" | "acceptForSession" | "cancel" | "decline" | undefined;
        readonly feedback?: string | undefined;
        readonly answers?: {
            readonly [x: string]: unknown;
        } | undefined;
    }[];
}) => readonly Row[];
