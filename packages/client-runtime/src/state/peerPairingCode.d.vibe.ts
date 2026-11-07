import type * as HttpClient from "effect/http/HttpClient";
import type { Atom } from "effect/reactivity";
import type { EnvironmentRegistry } from "../connection/registry.ts";
declare const PeerPairingCodeError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "PeerPairingCodeError";
} & Readonly<A>;
/** Minting failed; the user can still paste a code from the other environment. */
export declare class PeerPairingCodeError extends PeerPairingCodeError_base<{
    readonly reason: "not_allowed" | "unavailable";
    readonly cause: unknown;
}> {
    get message(): string;
}
/**
 * Mints a code on the environment it runs in. Each run mints its own: a code
 * is one-use, so two overlapping answers must never share one.
 * @throws {never}
 */
export declare function createPeerPairingCodeCommand<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | HttpClient.HttpClient | R, E>): import("./runtime.ts").AtomCommand<{
    readonly environmentId: import("@t3tools/contracts").EnvironmentId;
    readonly input: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only";
}, string, E | import("../connection/registry.ts").EnvironmentNotRegisteredError | PeerPairingCodeError>;
export {};
