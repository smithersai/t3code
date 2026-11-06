import type { NodeId, OrchestrationV2ProviderFailure, OrchestrationV2ProviderFailureClass, OrchestrationV2ProviderRetry, OrchestrationV2TurnItem, ProviderDriverKind, ProviderThreadId, ProviderTurnId, RunId, ThreadId } from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
import * as Cause from "effect/Cause";
import * as Schema from "effect/Schema";
declare const ContextHandoffBudgetError_base: Schema.Class<ContextHandoffBudgetError, Schema.TaggedStruct<"ContextHandoffBudgetError", {}>, Cause.YieldableError>;
export declare class ContextHandoffBudgetError extends ContextHandoffBudgetError_base {
    get message(): string;
}
declare const ContextHandoffBackgroundWorkError_base: Schema.Class<ContextHandoffBackgroundWorkError, Schema.TaggedStruct<"ContextHandoffBackgroundWorkError", {}>, Cause.YieldableError>;
export declare class ContextHandoffBackgroundWorkError extends ContextHandoffBackgroundWorkError_base {
    get message(): string;
}
export declare const MAX_PROVIDER_FAILURE_MESSAGE_LENGTH = 4096;
/**
 * The curated message of a domain error in a failure's cause chain, if any.
 * Callers that pass their own `message` to `makeProviderFailure` check it
 * first, so a known reason is not hidden behind a wrapper's text.
 * @throws {never}
 */
export declare function knownProviderFailureMessage(cause: unknown): string | undefined;
/** @throws {never} */
export declare function makeProviderFailure(input: {
    readonly cause?: unknown;
    readonly message?: string | undefined;
    readonly code?: string | null | undefined;
    readonly class?: OrchestrationV2ProviderFailureClass;
    readonly retryable?: boolean | null;
    readonly resetAt?: string | null;
}): OrchestrationV2ProviderFailure;
/** @throws {never} */
export declare function makeProviderFailureTurnItem(input: {
    readonly driver: ProviderDriverKind;
    readonly threadId: ThreadId;
    readonly runId: RunId | null;
    readonly nodeId: NodeId | null;
    readonly providerThreadId: ProviderThreadId;
    readonly providerTurnId: ProviderTurnId;
    readonly itemOrdinal: number;
    readonly failure: OrchestrationV2ProviderFailure;
    readonly retry?: OrchestrationV2ProviderRetry;
    readonly retryStartedAt?: DateTime.Utc;
    readonly occurredAt: DateTime.Utc;
}): Extract<OrchestrationV2TurnItem, {
    readonly type: "error";
}>;
/** @throws {never} */
export declare function makeProviderRetryTurnItem(input: {
    readonly driver: ProviderDriverKind;
    readonly threadId: ThreadId;
    readonly runId: RunId | null;
    readonly nodeId: NodeId | null;
    readonly providerThreadId: ProviderThreadId;
    readonly providerTurnId: ProviderTurnId;
    readonly itemOrdinal: number;
    readonly failure: OrchestrationV2ProviderFailure;
    readonly retry: OrchestrationV2ProviderRetry;
    readonly status: Extract<OrchestrationV2TurnItem["status"], "running" | "completed" | "failed" | "interrupted" | "cancelled">;
    readonly startedAt: DateTime.Utc;
    readonly updatedAt: DateTime.Utc;
}): Extract<OrchestrationV2TurnItem, {
    readonly type: "error";
}>;
export {};
