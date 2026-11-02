import { type V2ItemSupport } from "@t3tools/client-runtime/state/item-support";
import type { EnvironmentId, ThreadId, TurnItemId } from "@t3tools/contracts";
export declare function useV2ItemSupport(input: {
    readonly environmentId: EnvironmentId;
    readonly sourceThreadId: ThreadId;
    readonly sourceItemId: TurnItemId;
}): V2ItemSupport;
