import type { AtomCommandResult } from "@t3tools/client-runtime/state/runtime";
import type { VcsRef } from "@t3tools/client-runtime/state/vcs";
import { EnvironmentId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
export type BranchCheckoutResult = AtomCommandResult<VcsRef, unknown>;
type BranchCheckoutFailure = Extract<BranchCheckoutResult, {
    readonly _tag: "Failure";
}>;
export interface BranchCheckoutRequest {
    /** The draft route's flow key; the checkout is abandoned once it leaves the stack. */
    readonly flowKey: string;
    readonly routeKey: string;
    readonly environmentId: EnvironmentId | null;
    readonly workspaceRoot: string | null;
    readonly branch: string;
    readonly worktreePath: string | null;
}
/** A pure, stable key for a request: the same fields always give the same key. */
export declare function branchCheckoutRequestKey(request: BranchCheckoutRequest): string;
/**
 * Branch checkouts for draft routes. A checkout is a Git mutation, so it is
 * tied to the request, not to an atom node: the node can be removed and rebuilt
 * (a render read before the subscription commits) without running it again.
 */
export declare function makeNewTaskBranchCheckouts(deps: {
    readonly run: (request: BranchCheckoutRequest) => Promise<BranchCheckoutResult>;
    /** Holds navigation until the checkout settles and its route is released. */
    readonly holdNavigation: (operation: Promise<unknown>) => void;
    /** Runs once the route is released, unless the route was abandoned first. */
    readonly onFailure: (request: BranchCheckoutRequest, result: BranchCheckoutFailure) => void;
}): {
    atom: (arg: string) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<BranchCheckoutResult, never>>;
    /** The route rendered with removal unblocked, so navigation may proceed. */
    release(key: string): void;
    /** Abandons the checkouts of draft routes that are no longer on the stack. */
    prune(liveFlowKeys: ReadonlySet<string>): void;
};
export {};
