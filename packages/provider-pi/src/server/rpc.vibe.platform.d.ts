import * as Deferred from "effect/Deferred";
import * as Effect from "effect/Effect";
import * as Queue from "effect/Queue";
import * as Scope from "effect/Scope";
import * as Schema from "effect/Schema";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
declare const PiRpcError_base: Schema.Class<PiRpcError, Schema.TaggedStruct<"PiRpcError", {
    readonly operation: Schema.String;
    readonly detail: Schema.optional<Schema.String>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PiRpcError extends PiRpcError_base {
    get message(): string;
}
declare const PiRpcTimeoutError_base: Schema.Class<PiRpcTimeoutError, Schema.TaggedStruct<"PiRpcTimeoutError", {
    readonly operation: Schema.String;
    readonly timeoutMs: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class PiRpcTimeoutError extends PiRpcTimeoutError_base {
    get message(): string;
}
export type PiRpcRecord = Record<string, unknown>;
export interface PiRpcSpawnOptions {
    readonly command: string;
    readonly args: ReadonlyArray<string>;
    readonly cwd: string | undefined;
    readonly env: NodeJS.ProcessEnv;
}
export interface PiRpcConnection {
    readonly send: (record: PiRpcRecord) => Effect.Effect<void, PiRpcError>;
    readonly request: (record: PiRpcRecord, timeoutMs?: number) => Effect.Effect<unknown, PiRpcError | PiRpcTimeoutError>;
    readonly events: Queue.Queue<PiRpcRecord, PiRpcError>;
    readonly exited: Effect.Effect<number, PiRpcError>;
    readonly terminate: Effect.Effect<void>;
}
export interface PendingPiRequest {
    readonly deferred: Deferred.Deferred<unknown, PiRpcError>;
}
export declare function makeJsonlFramer(): (chunk: string) => ReadonlyArray<string>;
export declare function summarizePiError(error: unknown): string;
export declare function describePiStdoutClosure(exitCode: number | undefined): string;
export declare function parsePiRecord(line: string): PiRpcRecord | undefined;
export declare const makePiRpcConnection: (options: PiRpcSpawnOptions) => Effect.Effect<{
    send: (record: PiRpcRecord) => Effect.Effect<void, PiRpcError, never>;
    request: (record: PiRpcRecord, timeoutMs?: any) => Effect.Effect<unknown, PiRpcError | PiRpcTimeoutError, never>;
    events: Queue.Queue<PiRpcRecord, PiRpcError>;
    exited: Effect.Effect<number, PiRpcError, never>;
    terminate: Effect.Effect<void, never, never>;
}, PiRpcError, ChildProcessSpawner.ChildProcessSpawner | Scope.Scope>;
export {};
