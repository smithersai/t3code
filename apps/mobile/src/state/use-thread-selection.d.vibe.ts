import { type EnvironmentThreadShell } from "@t3tools/client-runtime/state/shell";
import { type PendingThreadCreation } from "./pending-thread-creation.vibe";
type ThreadSelectionRouteParams = {
    readonly environmentId?: string | string[];
    readonly threadId?: string | string[];
};
declare function useResolvedThreadSelection(params: ThreadSelectionRouteParams | undefined): {
    selectedThreadRef: {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    } | null;
    selectedThread: EnvironmentThreadShell | null;
    selectedThreadCreation: PendingThreadCreation | null;
    selectedThreadDetailRef: {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    } | null;
    selectedThreadProject: import("@t3tools/client-runtime/state/models").EnvironmentProject | null;
    selectedEnvironmentConnection: import("../lib/connection.ts").SavedRemoteConnection | null;
    selectedEnvironmentRuntime: import("./remote-runtime-types.ts").EnvironmentRuntimeState | null;
};
type ThreadSelectionState = ReturnType<typeof useResolvedThreadSelection>;
export declare function useThreadSelection(): ThreadSelectionState;
export {};
