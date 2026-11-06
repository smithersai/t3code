import { Atom } from "effect/reactivity";
export declare const workspaceConnections: {
    environmentsAtom: Atom.Atom<readonly import("@t3tools/client-runtime/state/presentation").EnvironmentConnectionSummary[]>;
    stateAtom: Atom.Atom<import("./workspaceModel").WorkspaceConnectionState>;
    isReadyAtom: Atom.Atom<boolean>;
};
export declare function useWorkspaceEnvironments(): readonly import("@t3tools/client-runtime/state/presentation").EnvironmentConnectionSummary[];
export declare function useWorkspaceConnectionState(): import("./workspaceModel").WorkspaceConnectionState;
export declare function useConnectionsReady(): boolean;
export declare const workspaceStateAtom: Atom.Atom<import("./workspaceModel").WorkspaceState>;
export declare function useWorkspaceState(): {
    environments: readonly import("@t3tools/client-runtime/state/presentation").EnvironmentConnectionSummary[];
    state: import("./workspaceModel").WorkspaceState;
};
