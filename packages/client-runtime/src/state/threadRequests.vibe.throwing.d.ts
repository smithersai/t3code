import type { EnvironmentId, ThreadId, RuntimeRequestId } from "@t3tools/contracts";
export interface ThreadRequestsResolved {
    readonly environmentId: EnvironmentId;
    readonly threadId: ThreadId;
    /** Every request the thread still waits on; drafts for any other request are stale. */
    readonly pendingRequestIds: ReadonlyArray<RuntimeRequestId>;
}
export declare const threadRequestsResolvedListeners: Set<(event: ThreadRequestsResolved) => void>;
export declare function notifyThreadRequestsResolved(event: ThreadRequestsResolved): void;
