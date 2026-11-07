import type { EnvironmentShellStatus } from "@t3tools/client-runtime/state/shell";
import type { EnvironmentThreadState } from "@t3tools/client-runtime/state/threads";
import type { EnvironmentId, ScopedThreadRef, ThreadId } from "@t3tools/contracts";
import type { DraftId } from "./composerDraftStore";
export type ThreadRouteTarget = {
    kind: "server";
    threadRef: ScopedThreadRef;
} | {
    kind: "draft";
    draftId: DraftId;
};
type DraftThreadRouteState = {
    environmentId: EnvironmentId;
    threadId: ThreadId;
    promotedTo?: ScopedThreadRef | null;
};
export type ThreadRouteRenderState = "loading" | "ready" | "missing";
export declare function isThreadRouteSnapshotAuthoritative(status: EnvironmentShellStatus | null | undefined): boolean;
export declare function resolveThreadRouteRenderState(input: {
    bootstrapComplete: boolean;
    serverThreadExists: boolean;
    serverThreadDeleted: boolean;
    unlistedThreadDetail: EnvironmentThreadState;
    draftThreadExists: boolean;
}): ThreadRouteRenderState;
export declare function buildThreadRouteParams(ref: ScopedThreadRef): {
    environmentId: EnvironmentId;
    threadId: ThreadId;
};
/** Whether a (decoded) location pathname is `ref`'s own thread route, `/$environmentId/$threadId`. */
export declare function isThreadRoutePathname(pathname: string, ref: ScopedThreadRef): boolean;
export declare function buildDraftThreadRouteParams(draftId: DraftId): {
    draftId: DraftId;
};
export declare function resolveThreadRouteRef(params: Partial<Record<"environmentId" | "threadId", string | undefined>>): ScopedThreadRef | null;
export declare function resolveThreadRouteTarget(params: Partial<Record<"environmentId" | "threadId" | "draftId", string | undefined>>): ThreadRouteTarget | null;
export declare function resolveActiveThreadRouteRef(target: ThreadRouteTarget | null, draftThread: DraftThreadRouteState | null): ScopedThreadRef | null;
export {};
