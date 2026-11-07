import type { VcsListRefsResult } from "@t3tools/contracts";
import { AsyncResult } from "effect/reactivity";
export declare function isPaginatedBranchesNextPagePending<E>(results: ReadonlyArray<AsyncResult.AsyncResult<VcsListRefsResult, E>>): boolean;
export declare function shouldLoadNextBranchPageAfterScroll({ previousScrollTop, scrollTop, scrollHeight, clientHeight, distanceThreshold, }: {
    previousScrollTop: number | null;
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
    distanceThreshold?: number;
}): boolean;
