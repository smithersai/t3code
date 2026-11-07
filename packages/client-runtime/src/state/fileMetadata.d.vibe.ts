import { type EnvironmentId, type ScopedThreadRef, type ThreadId } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import { Atom, AtomRegistry } from "effect/reactivity";
import * as EnvironmentSupervisor from "../connection/supervisor.ts";
import type { EnvironmentRegistry } from "../connection/registry.vibe";
import { EnvironmentRpcUnavailableError } from "../rpc/client.vibe";
import type { RpcSession } from "../rpc/session.vibe";
/** @throws {never} */
export declare function createFileMetadataAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | R, E>): {
    metadata: (target: {
        environmentId: EnvironmentId;
        input: {
            path: string;
            threadId?: ThreadId;
        };
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly kind: "directory" | "file" | "other";
        readonly byteLength?: number;
        readonly mimeType?: string;
    } | null, E | import("@t3tools/contracts").EnvironmentAuthorizationError | EnvironmentRpcUnavailableError | Error | import("effect/rpc/RpcClientError").RpcClientError>>;
    /** @throws {never} */
    retainThread: (ref: ScopedThreadRef) => Atom.Atom<void>;
    rememberEntries: (cwd: string, entries: readonly {
        readonly path: string;
        readonly kind: "directory" | "file";
        readonly ignored?: boolean | undefined;
    }[], isCurrent?: (
    /** @throws {never} */
    (session: RpcSession) => boolean) | undefined) => Effect.Effect<void, never, EnvironmentSupervisor.EnvironmentSupervisor>;
    rememberFile: (cwd: string, file: {
        relativePath: string;
        byteLength: number;
    }, isCurrent?: (
    /** @throws {never} */
    (session: RpcSession) => boolean) | undefined) => Effect.Effect<void, never, EnvironmentSupervisor.EnvironmentSupervisor>;
    seedAfterRead: <A, ReadError, ReadServices>(read: Effect.Effect<A, ReadError, ReadServices>, seed: (result: A, isCurrent: 
    /** @throws {never} */
    (session: RpcSession) => boolean) => Effect.Effect<void, never, EnvironmentSupervisor.EnvironmentSupervisor>) => Effect.Effect<A, ReadError, ReadServices | EnvironmentSupervisor.EnvironmentSupervisor>;
    invalidate: (path: string) => Effect.Effect<void, never, EnvironmentSupervisor.EnvironmentSupervisor>;
    refreshPath: (environmentId: EnvironmentId, path: string, registry: AtomRegistry.AtomRegistry) => void;
};
