import { type EnvironmentId as EnvironmentIdType, type GitActionProgressEvent, type GitRunStackedActionResult, GitStackedAction, type ThreadId, type ProjectId } from "@t3tools/contracts";
import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as Stream from "effect/Stream";
import { Atom, type AtomRegistry } from "effect/reactivity";
import type { EnvironmentRegistry } from "../connection/registry.ts";
import * as Persistence from "../platform/persistence.vibe";
import { type AtomCommand, type AtomCommandResult } from "./runtime.ts";
export declare const VcsActionOperation: Schema.Literals<readonly ["refresh_status", "run_change_request", "pull", "switch_ref", "create_ref", "create_worktree", "init", "publish_repository", "prepare_pull_request_thread"]>;
export type VcsActionOperation = typeof VcsActionOperation.Type;
export interface VcsActionState {
    readonly isRunning: boolean;
    readonly operation: VcsActionOperation | null;
    readonly actionId: string | null;
    readonly action: GitStackedAction | null;
    readonly currentLabel: string | null;
    readonly currentPhaseLabel: string | null;
    readonly hookName: string | null;
    readonly lastOutputLine: string | null;
    readonly phaseStartedAtMs: number | null;
    readonly hookStartedAtMs: number | null;
    readonly error: string | null;
}
export interface VcsActionTarget {
    readonly environmentId: EnvironmentIdType | null;
    readonly cwd: string | null;
}
export interface ResolvedVcsActionTarget {
    readonly environmentId: EnvironmentIdType;
    readonly cwd: string;
}
export interface BeginVcsActionInput {
    readonly operation: VcsActionOperation;
    readonly label: string;
    readonly actionId?: string;
}
export interface RunVcsStackedActionInput {
    readonly actionId: string;
    readonly action: GitStackedAction;
    readonly commitMessage?: string;
    readonly featureBranch?: boolean;
    readonly filePaths?: ReadonlyArray<string>;
    readonly threadId?: ThreadId;
    readonly projectId?: ProjectId;
    /** @throws {never} */
    readonly onProgress?: (event: GitActionProgressEvent) => void;
}
declare const VcsActionUnavailableError_base: Schema.Class<VcsActionUnavailableError, Schema.TaggedStruct<"VcsActionUnavailableError", {
    readonly operation: Schema.Literals<readonly ["refresh_status", "run_change_request", "pull", "switch_ref", "create_ref", "create_worktree", "init", "publish_repository", "prepare_pull_request_thread"]>;
    readonly environmentId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly cwd: Schema.NullOr<Schema.String>;
}>, Cause.YieldableError>;
export declare class VcsActionUnavailableError extends VcsActionUnavailableError_base {
    get message(): string;
}
declare const VcsActionRemoteFailureError_base: Schema.Class<VcsActionRemoteFailureError, Schema.TaggedStruct<"VcsActionRemoteFailureError", {
    readonly actionId: Schema.String;
    readonly transportActionId: Schema.String;
    readonly action: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly cwd: Schema.String;
    readonly phase: Schema.NullOr<Schema.Literals<readonly ["branch", "commit", "push", "pr"]>>;
    readonly remoteMessageLength: Schema.Number;
}>, Cause.YieldableError>;
export declare class VcsActionRemoteFailureError extends VcsActionRemoteFailureError_base {
    get message(): string;
}
declare const VcsActionMissingTerminalEventError_base: Schema.Class<VcsActionMissingTerminalEventError, Schema.TaggedStruct<"VcsActionMissingTerminalEventError", {
    readonly actionId: Schema.String;
    readonly transportActionId: Schema.String;
    readonly action: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly cwd: Schema.String;
}>, Cause.YieldableError>;
export declare class VcsActionMissingTerminalEventError extends VcsActionMissingTerminalEventError_base {
    get message(): string;
}
declare const VcsActionTargetKeyParseError_base: Schema.Class<VcsActionTargetKeyParseError, Schema.TaggedStruct<"VcsActionTargetKeyParseError", {
    readonly keyLength: Schema.Number;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class VcsActionTargetKeyParseError extends VcsActionTargetKeyParseError_base {
    get message(): string;
}
export declare const VcsActionExecutionError: Schema.Union<readonly [typeof VcsActionRemoteFailureError, typeof VcsActionMissingTerminalEventError]>;
export type VcsActionExecutionError = typeof VcsActionExecutionError.Type;
export declare const EMPTY_VCS_ACTION_STATE: Readonly<VcsActionState>;
/** @throws {never} */
export declare function parseVcsActionTargetKey(key: string): ResolvedVcsActionTarget;
/** @throws {never} */
declare function getVcsActionStateAtom(target: VcsActionTarget): Atom.Writable<Readonly<VcsActionState>, Readonly<VcsActionState>>;
/** @throws {never} */
export declare function beginVcsActionState(input: BeginVcsActionInput): VcsActionState & {
    readonly actionId: string;
};
/** @throws {never} */
export declare function createVcsActionTransportId(target: ResolvedVcsActionTarget, actionId: string): string;
/** @throws {never} */
export declare function normalizeVcsActionProgressEvent(target: ResolvedVcsActionTarget, transportActionId: string, actionId: string, event: GitActionProgressEvent): GitActionProgressEvent | null;
export declare function consumeVcsActionProgress<E, R>(stream: Stream.Stream<GitActionProgressEvent, E, R>, input: {
    readonly target: ResolvedVcsActionTarget;
    readonly transportActionId: string;
    readonly actionId: string;
    readonly action: GitStackedAction;
    readonly onProgress: (event: GitActionProgressEvent) => Effect.Effect<void>;
}): Effect.Effect<GitRunStackedActionResult, E | VcsActionExecutionError, R>;
/** @throws {never} */
export declare function applyVcsActionProgressEvent(current: VcsActionState, event: GitActionProgressEvent): VcsActionState;
/** @throws {never} */
export declare function createVcsActionManager<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | Persistence.EnvironmentCacheStore | R, E>): {
    stateAtom: typeof getVcsActionStateAtom;
    /** @throws {never} */
    runStackedAction: (target: VcsActionTarget) => AtomCommand<RunVcsStackedActionInput, {
        readonly action: "commit" | "commit_push" | "commit_push_pr" | "create_pr" | "push";
        readonly branch: {
            readonly status: "created" | "skipped_not_requested";
            readonly name?: string | undefined;
        };
        readonly commit: {
            readonly status: "created" | "skipped_no_changes" | "skipped_not_requested";
            readonly commitSha?: string | undefined;
            readonly subject?: string | undefined;
        };
        readonly push: {
            readonly status: "pushed" | "skipped_not_requested" | "skipped_up_to_date";
            readonly branch?: string | undefined;
            readonly upstreamBranch?: string | undefined;
            readonly setUpstream?: boolean | undefined;
        };
        readonly pr: {
            readonly status: "created" | "opened_existing" | "skipped_not_requested";
            readonly url?: string | undefined;
            readonly number?: number | undefined;
            readonly baseBranch?: string | undefined;
            readonly headBranch?: string | undefined;
            readonly title?: string | undefined;
        };
        readonly toast: {
            readonly title: string;
            readonly description?: string | undefined;
            readonly cta: {
                readonly kind: "none";
            } | {
                readonly kind: "open_pr";
                readonly label: string;
                readonly url: string;
            } | {
                readonly kind: "run_action";
                readonly label: string;
                readonly action: {
                    readonly kind: "commit" | "commit_push" | "commit_push_pr" | "create_pr" | "push";
                };
            };
        };
    }, unknown>;
    /** @throws {never} */
    track: <A, E_1>(registry: AtomRegistry.AtomRegistry, target: VcsActionTarget, input: BeginVcsActionInput, action: 
    /** @throws {never} */
    () => Promise<AtomCommandResult<A, E_1>>) => Promise<AtomCommandResult<A, E_1 | VcsActionUnavailableError>>;
    /** @throws {never} */
    resetError: (registry: AtomRegistry.AtomRegistry, target: VcsActionTarget, operation: VcsActionOperation) => void;
};
export {};
