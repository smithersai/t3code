import type { EnvironmentPresentation, NetworkStatus } from "@t3tools/client-runtime/connection";
import type { EnvironmentCatalogState } from "@t3tools/client-runtime/state/connections";
import type { EnvironmentId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
export declare function createWorkspaceConnectionAtoms(input: {
    readonly catalogValueAtom: Atom.Atom<EnvironmentCatalogState>;
    readonly networkStatusValueAtom: Atom.Atom<NetworkStatus>;
    readonly presentationAtom: (environmentId: EnvironmentId) => Atom.Atom<EnvironmentPresentation | null>;
}): {
    environmentsAtom: Atom.Atom<readonly import("@t3tools/client-runtime/state/presentation").EnvironmentConnectionSummary[]>;
    stateAtom: Atom.Atom<import("./workspaceModel").WorkspaceConnectionState>;
    isReadyAtom: Atom.Atom<boolean>;
};
