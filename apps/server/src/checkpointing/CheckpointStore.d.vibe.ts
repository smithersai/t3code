import { type CheckpointRef } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type { CheckpointStoreError } from "./Errors.vibe";
import * as VcsDriverRegistry from "../vcs/VcsDriverRegistry.ts";
export interface CaptureCheckpointInput {
    readonly cwd: string;
    readonly checkpointRef: CheckpointRef;
}
export interface RestoreCheckpointInput {
    readonly cwd: string;
    readonly checkpointRef: CheckpointRef;
    readonly fallbackToHead?: boolean;
}
export interface DiffCheckpointsInput {
    readonly cwd: string;
    readonly fromCheckpointRef: CheckpointRef;
    readonly toCheckpointRef: CheckpointRef;
    readonly fallbackFromToHead?: boolean;
    readonly ignoreWhitespace: boolean;
    readonly format?: "patch" | "numstat";
    /** Maximum bytes collected from the diff command. */
    readonly maxOutputBytes?: number;
    /** Limits the diff to these exact paths. An empty list yields an empty diff. */
    readonly filePaths?: ReadonlyArray<string>;
}
export interface ListAuthoredPathsInput {
    readonly cwd: string;
    readonly fromCheckpointRef: CheckpointRef;
    readonly toCheckpointRef: CheckpointRef;
}
export interface DeleteCheckpointRefsInput {
    readonly cwd: string;
    readonly checkpointRefs: ReadonlyArray<CheckpointRef>;
}
declare const CheckpointStore_base: Context.ServiceClass<CheckpointStore, "t3/checkpointing/CheckpointStore", {
    readonly isGitRepository: (cwd: string) => Effect.Effect<boolean, CheckpointStoreError>;
    readonly captureCheckpoint: (input: CaptureCheckpointInput) => Effect.Effect<void, CheckpointStoreError>;
    readonly hasCheckpointRef: (input: Omit<RestoreCheckpointInput, "fallbackToHead">) => Effect.Effect<boolean, CheckpointStoreError>;
    readonly restoreCheckpoint: (input: RestoreCheckpointInput) => Effect.Effect<boolean, CheckpointStoreError>;
    readonly diffCheckpoints: (input: DiffCheckpointsInput) => Effect.Effect<string, CheckpointStoreError>;
    /** Null means HEAD is unchanged or unrecorded; all changed paths then belong to the turn. */
    readonly listAuthoredPaths: (input: ListAuthoredPathsInput) => Effect.Effect<ReadonlySet<string> | null, CheckpointStoreError>;
    readonly deleteCheckpointRefs: (input: DeleteCheckpointRefsInput) => Effect.Effect<void, CheckpointStoreError>;
}>;
export declare class CheckpointStore extends CheckpointStore_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly isGitRepository: (cwd: string) => Effect.Effect<boolean, CheckpointStoreError>;
    readonly captureCheckpoint: (input: CaptureCheckpointInput) => Effect.Effect<void, CheckpointStoreError>;
    readonly hasCheckpointRef: (input: Omit<RestoreCheckpointInput, "fallbackToHead">) => Effect.Effect<boolean, CheckpointStoreError>;
    readonly restoreCheckpoint: (input: RestoreCheckpointInput) => Effect.Effect<boolean, CheckpointStoreError>;
    readonly diffCheckpoints: (input: DiffCheckpointsInput) => Effect.Effect<string, CheckpointStoreError>;
    /** Null means HEAD is unchanged or unrecorded; all changed paths then belong to the turn. */
    readonly listAuthoredPaths: (input: ListAuthoredPathsInput) => Effect.Effect<ReadonlySet<string> | null, CheckpointStoreError>;
    readonly deleteCheckpointRefs: (input: DeleteCheckpointRefsInput) => Effect.Effect<void, CheckpointStoreError>;
}, never, VcsDriverRegistry.VcsDriverRegistry>;
export declare const layer: Layer.Layer<CheckpointStore, never, VcsDriverRegistry.VcsDriverRegistry>;
export {};
