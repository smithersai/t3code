import { ProviderDriverKind, type OrchestrationV2ExecutionNode, type OrchestrationV2ProviderCapabilities, type OrchestrationV2ProviderFailure, type OrchestrationV2ProviderRef, type OrchestrationV2ProviderRetry, type OrchestrationV2ProviderThread, type OrchestrationV2ProviderTurn, type OrchestrationV2RuntimeRequest, type OrchestrationV2TurnItem, type OrchestrationV2UserInputQuestion, type ProviderApprovalDecision, type ProviderInstanceId } from "@t3tools/contracts";
import { PiSettings } from "../settings.vibe";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Fiber from "effect/Fiber";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as ProviderHost from "@t3tools/provider-core/server/ProviderHost";
import * as McpProviderSessions from "@t3tools/provider-core/server/McpProviderSessions";
import * as IdAllocator from "@t3tools/provider-core/server/IdAllocator";
import * as ProviderAdapter from "@t3tools/provider-core/server/ProviderAdapter";
import * as ProviderContinuationRequests from "@t3tools/provider-core/server/ProviderContinuationRequests";
import { makeProviderFailure } from "@t3tools/provider-core/server/failure";
import { type PiRpcRecord } from "./rpc.vibe";
export declare const PI_PROVIDER: string & import("effect/Brand").Brand<"ProviderDriverKind">;
export interface PiAdapterV2Options {
    readonly instanceId: ProviderInstanceId;
    readonly settings: PiSettings;
    readonly environment: NodeJS.ProcessEnv;
    readonly continuationRequests?: {
        readonly offer: (request: ProviderContinuationRequests.ProviderContinuationRequest) => Effect.Effect<void>;
    };
}
export declare function contentText(content: unknown): string;
export declare function isBoundedStructuredToolValue(value: unknown): boolean;
export declare function piToolOutput(result: unknown, toolName: string): unknown;
export declare function providerRef(nativeId: string, strength?: "strong" | "weak"): OrchestrationV2ProviderRef;
export interface PiStreamItemState {
    readonly nativeItemId: string;
    readonly kind: "assistant_message" | "reasoning";
    text: string;
    completed: boolean;
    flushScheduled: boolean;
    readonly startedAt: DateTime.Utc;
}
export type PiCompactionStatus = "running" | "completed" | "failed" | "cancelled";
export interface PiCompactionState {
    readonly nativeItemId: string;
    readonly startedAt: DateTime.Utc;
}
export interface PiProviderRetryState {
    readonly retry: OrchestrationV2ProviderRetry;
    readonly failure: OrchestrationV2ProviderFailure;
    readonly startedAt: DateTime.Utc;
    readonly itemOrdinal: number;
}
export declare function compactionTitle(status: PiCompactionStatus): string;
export interface ActivePiTurn {
    readonly turnInput: ProviderAdapter.ProviderAdapterV2TurnInput;
    readonly providerTurn: OrchestrationV2ProviderTurn;
    readonly startedAt: DateTime.Utc;
    readonly itemOrdinals: Map<string, number>;
    nextItemOrdinal: number;
    messageOrdinal: number;
    readonly streamItems: Map<string, PiStreamItemState>;
    readonly toolArgs: Map<string, unknown>;
    readonly toolStartedAt: Map<string, DateTime.Utc>;
    interrupted: boolean;
    nativeAborted: boolean;
    sawAgentActivity: boolean;
    adoptedWake: boolean;
    readonly promptMayBeCommandOnly: boolean;
    latestCompactionAfterTokens: number | null;
    lastLiveUsedTokens: number | null;
    settleProbeGeneration: number;
    /** An extension may start compaction immediately after Pi emits agent_settled. */
    settleWhenIdle: boolean;
    sawCompaction: boolean;
    manualCompactInFlight: boolean;
    activeCompaction: PiCompactionState | null;
    activeProviderRetry: PiProviderRetryState | null;
    failure: ReturnType<typeof makeProviderFailure> | null;
    rejectedPromptFailure: ReturnType<typeof makeProviderFailure> | null;
    stopTreeRefs?: PiTurnTreeRefs | null;
}
export interface PiTurnTreeRefs {
    /** Omitted keeps the synthetic ref; null means the turn left nothing on the active branch. */
    readonly nativeTurnRef: OrchestrationV2ProviderRef | null | undefined;
    readonly leafId: string | null;
    readonly retainedNativeTurnIds: ReadonlyArray<string> | undefined;
}
export interface PendingPiPrompt {
    readonly nativeRequestId: string;
    readonly method: "select" | "confirm" | "input" | "editor";
    readonly questionId: string;
    readonly approvalKey: string;
    readonly expiresAt: number | null;
    expirationFiber: Fiber.Fiber<void> | null;
    runtimeRequest: OrchestrationV2RuntimeRequest;
    readonly node: OrchestrationV2ExecutionNode;
    readonly turnItem: OrchestrationV2TurnItem;
}
export declare function piApprovalRequestKind(title: string): "command" | "file-change";
export interface PiThreadState {
    providerThread: OrchestrationV2ProviderThread;
    activeTurn: ActivePiTurn | null;
}
export interface PiWake {
    readonly state: PiThreadState;
    readonly events: Array<PiRpcRecord>;
}
export declare const makePiAdapterV2: (options: PiAdapterV2Options) => Effect.Effect<{
    readonly instanceId: ProviderInstanceId;
    readonly driver: ProviderDriverKind;
    readonly getCapabilities: () => Effect.Effect<OrchestrationV2ProviderCapabilities, ProviderAdapter.ProviderAdapterV2Error>;
    readonly planSelectionTransition: (input: import("@t3tools/provider-core/server/selectionTransition").ProviderSelectionTransitionInput) => Effect.Effect<import("@t3tools/provider-core/server/selectionTransition").ProviderSelectionTransitionPlan, ProviderAdapter.ProviderAdapterV2Error>;
    readonly openSession: (input: ProviderAdapter.ProviderAdapterV2OpenSessionInput) => Effect.Effect<ProviderAdapter.ProviderAdapterV2SessionRuntime, ProviderAdapter.ProviderAdapterV2Error, import("effect/Scope").Scope>;
}, never, ChildProcessSpawner.ChildProcessSpawner | FileSystem.FileSystem | IdAllocator.IdAllocatorV2 | McpProviderSessions.McpProviderSessions | ProviderHost.ProviderHost>;
export interface PiSessionEntry {
    readonly parentId: string | null;
    readonly isUserMessage: boolean;
    /** Pi's `timestamp` as epoch milliseconds; null when missing or unparsable. */
    readonly timestamp: number | null;
}
export interface PiSessionListing {
    readonly entries: ReadonlyMap<string, PiSessionEntry>;
    readonly leafId: string | null;
}
export declare function piSessionListing(data: unknown): PiSessionListing | null;
export declare function piSessionEntries(entries: unknown): ReadonlyMap<string, PiSessionEntry> | null;
export declare function walkPiBranch(entries: ReadonlyMap<string, PiSessionEntry>, leafId: string | null, stopAt: string | null): {
    readonly entryCount: number;
    readonly userEntryIds: ReadonlyArray<string>;
    readonly reachedStop: boolean;
} | null;
export type PiForkBoundary = {
    readonly type: "entry";
    readonly entryId: string;
} | {
    readonly type: "nothing";
} | {
    readonly type: "uncaptured";
    readonly turn: OrchestrationV2ProviderTurn;
    readonly target: OrchestrationV2ProviderTurn | null;
};
/**
 * Turns without a ref left nothing on the active branch, so the boundary is the first discarded
 * turn that has one. `uncaptured` is a boundary turn still carrying its synthetic ref (only
 * `captureTurnTreeRefs` records strong ones); `piForkEntry` locates it in the session tree.
 */
export declare function piForkBoundary(input: {
    readonly target: {
        readonly type: "thread_start";
    } | {
        readonly type: "provider_turn";
        readonly providerTurn: OrchestrationV2ProviderTurn;
    };
    readonly providerThreadTurns: ReadonlyArray<OrchestrationV2ProviderTurn>;
}): PiForkBoundary;
/** Reads the session tree only for an uncaptured boundary. */
export declare function piForkEntry<E>(boundary: Exclude<PiForkBoundary, {
    type: "nothing";
}>, providerThreadCreatedAt: DateTime.Utc, readEntries: Effect.Effect<unknown, E>): Effect.Effect<string, E | ProviderAdapter.ProviderAdapterProtocolError>;
/**
 * Pi shares the server clock. An adopted wake can precede its T3 turn, so search from the target
 * turn's end through the boundary turn's end. A boundary turn still running has no end yet, so
 * the window stays open through the tree read. At thread start, use the earlier of thread
 * creation and turn start to include adopted wakes while preserving inherited session history.
 */
export declare function piUncapturedForkEntry(listing: PiSessionListing, boundary: Extract<PiForkBoundary, {
    type: "uncaptured";
}>, providerThreadCreatedAt: DateTime.Utc): string | undefined;
export declare function piSubagentOutput(result: unknown): string;
export declare function piExtensionDisplayName(extensionPath: string | undefined): string;
export declare function piThreadSnapshot(providerThread: OrchestrationV2ProviderThread): ProviderAdapter.ProviderAdapterV2ThreadSnapshot;
export declare function piQuestion(questionId: string, method: "select" | "input" | "editor", title: string, event: PiRpcRecord): OrchestrationV2UserInputQuestion;
export declare function piUiResponse(pending: PendingPiPrompt, decision: ProviderApprovalDecision | undefined, answers: Record<string, unknown> | undefined): PiRpcRecord;
