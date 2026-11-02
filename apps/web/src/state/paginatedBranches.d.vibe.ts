import { AsyncResult } from "effect/reactivity";
import type { VcsListRefsResult } from "@t3tools/contracts";
export declare function isPaginatedBranchesNextPagePending<E>(results: ReadonlyArray<AsyncResult.AsyncResult<VcsListRefsResult, E>>): boolean;
export declare function shouldLoadNextBranchPageAfterScroll({ previousScrollTop, scrollTop, scrollHeight, clientHeight, distanceThreshold, }: {
    previousScrollTop: number | null;
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
    distanceThreshold?: number;
}): boolean;
