import { type LinkRequestItem } from "@t3tools/client-runtime/link-request";
import { type EnvironmentId, type OrchestrationV2ProjectedTurnItem } from "@t3tools/contracts";
/**
 * Inline card for a link an agent asked the user to make. The user picks the
 * access in a dialog; the pairing code lives only in that dialog's state and
 * the RPC payload, and is never logged, toasted, or persisted.
 * @throws {never}
 */
export declare function LinkRequestCard(props: {
    readonly environmentId: EnvironmentId;
    readonly item: LinkRequestItem;
    readonly visibility: OrchestrationV2ProjectedTurnItem["visibility"];
}): import("react").JSX.Element;
