import { EnvironmentAuthorizationError, type EnvironmentId } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import { Atom, AtomRegistry } from "effect/reactivity";
import type { EnvironmentRegistry } from "../connection/registry.vibe";
/** @throws {never} */
export declare function createCommandPermissions<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | R, E>, method: string): {
    requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
    permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    authorize: (registry: AtomRegistry.AtomRegistry, environmentId: EnvironmentId, input?: unknown) => Effect.Effect<void | undefined, EnvironmentAuthorizationError, never>;
};
