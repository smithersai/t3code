import type { EnvironmentPresentation, PreparedConnection } from "@t3tools/client-runtime/connection";
import type { EnvironmentId, ServerConfig } from "@t3tools/contracts";
import * as Option from "effect/Option";
import { Atom } from "effect/reactivity";
import type { SavedRemoteConnection } from "../lib/connection";
import type { EnvironmentRuntimeState } from "./remote-runtime-types";
export declare function createRemoteEnvironmentProjectionAtoms(input: {
    readonly presentationAtom: (environmentId: EnvironmentId) => Atom.Atom<EnvironmentPresentation | null>;
    readonly preparedConnectionAtom: (environmentId: EnvironmentId) => Atom.Atom<Option.Option<PreparedConnection>>;
    readonly serverConfigAtom: (environmentId: EnvironmentId) => Atom.Atom<ServerConfig | null>;
}): {
    savedConnectionAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<SavedRemoteConnection | null>;
    runtimeStateAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<EnvironmentRuntimeState | null>;
};
