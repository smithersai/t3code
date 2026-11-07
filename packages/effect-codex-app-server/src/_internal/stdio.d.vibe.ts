import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Queue from "effect/Queue";
import * as Stdio from "effect/Stdio";
import { ChildProcessSpawner } from "effect/process";
import * as CodexError from "../errors.vibe";
/** @throws {never} */
export declare const makeChildStdio: (handle: ChildProcessSpawner.ChildProcessHandle) => Stdio.Stdio;
export declare const makeInMemoryStdio: () => Effect.Effect<{
    stdio: Stdio.Stdio;
    input: Queue.Queue<Uint8Array<ArrayBufferLike>, Cause.Done<void>>;
    output: Queue.Queue<string, never>;
}, never, never>;
type ChildProcessTerminationHandle = Pick<ChildProcessSpawner.ChildProcessHandle, "exitCode" | "pid">;
export declare const makeTerminationError: (handle: ChildProcessTerminationHandle) => Effect.Effect<CodexError.CodexAppServerError>;
export {};
