import type { EnvironmentConnectionPhase } from "@t3tools/client-runtime/connection";
import type { EnvironmentShellStatus } from "@t3tools/client-runtime/state/shell";
import type { EnvironmentId, ProjectId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
/** The flow a provider serves while no draft route is on the stack. */
export declare const INACTIVE_FLOW_KEY = "inactive";
/** The flow key for a draft Thread route: its key plus the draft it opened. */
export declare function newTaskFlowKey(route: {
    readonly key: string;
    readonly params?: object;
}): string | undefined;
export interface NewTaskFlowState {
    readonly environmentId: EnvironmentId | null;
    readonly projectKey: string | null;
    readonly draftKey: string | null;
    readonly submitting: boolean;
    readonly expandedProvider: string | null;
}
export declare const INITIAL_NEW_TASK_FLOW_STATE: NewTaskFlowState;
export declare const newTaskFlowStateAtom: (arg: string) => Atom.Atom<NewTaskFlowState>;
export declare function readNewTaskFlowState(flowKey: string): NewTaskFlowState;
export declare function updateNewTaskFlowState(flowKey: string, patch: Partial<NewTaskFlowState>): void;
/**
 * What a draft route's `draftId` means for a flow that has not bound a draft
 * yet. Drafts hydrate from disk and projects arrive with the shell snapshot,
 * so on a cold launch or deep link the answer can be "pending" for a while.
 */
export type RouteDraftResolution = {
    readonly kind: "none";
} | {
    readonly kind: "pending";
} | {
    readonly kind: "missing";
} | {
    readonly kind: "open";
    readonly flow: NewTaskFlowState;
};
export declare function resolveRouteDraft(input: {
    readonly flow: NewTaskFlowState;
    readonly routeDraftId: string | undefined;
    readonly draftsLoaded: boolean;
    readonly stamp: {
        readonly environmentId: EnvironmentId;
        readonly projectId: ProjectId;
    } | undefined;
    readonly projects: ReadonlyArray<{
        readonly environmentId: EnvironmentId;
        readonly id: ProjectId;
    }>;
    /** See `stampedEnvironmentProjectsLoading`. */
    readonly stampedEnvironmentLoading: boolean;
}): RouteDraftResolution;
/**
 * Whether the stamped environment may still deliver its project list. An
 * unknown, offline, or failed environment is settled, so a project it lacks
 * sends the route back to the picker. Mirrors `threadRouteIsHydrating`.
 */
export declare function stampedEnvironmentProjectsLoading(input: {
    readonly connectionsReady: boolean;
    readonly connectionState: EnvironmentConnectionPhase | null;
    readonly shellCacheRead: boolean;
    readonly shellStatus: EnvironmentShellStatus;
    readonly shellHasError: boolean;
}): boolean;
interface NavigationRoutes {
    readonly routes: ReadonlyArray<{
        readonly key: string;
        readonly name: string;
        readonly params?: object;
    }>;
}
/** Flow keys of the draft routes on the stack. */
export declare function liveNewTaskFlowKeys(state: NavigationRoutes): ReadonlySet<string>;
/**
 * Drops the flow of every draft route that left the stack: popped (discarded)
 * or promoted to a live thread, whose params no longer carry the draft.
 */
export declare function pruneNewTaskFlowStates(state: NavigationRoutes): void;
export {};
