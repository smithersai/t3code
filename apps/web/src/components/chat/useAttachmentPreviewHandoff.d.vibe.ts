import { type EnvironmentId, type ThreadId } from "@t3tools/contracts";
import { type Dispatch, type SetStateAction } from "react";
import type { useQuietThreadVisibleTurnItems } from "../../state/entities";
import { type OptimisticBlobPreviews, type OptimisticUserMessages } from "./optimisticUserMessages";
interface AttachmentPreviewHandoffInput {
    readonly environmentId: EnvironmentId;
    readonly threadId: ThreadId;
    readonly serverVisibleTurnItems: ReturnType<typeof useQuietThreadVisibleTurnItems>;
    /** Blob previews of acknowledged messages, by message id; they stand in for the server's copy. */
    readonly handoff: OptimisticUserMessages["handoff"];
    readonly blobPreviews: OptimisticBlobPreviews;
    readonly setOptimisticUserMessages: Dispatch<SetStateAction<OptimisticUserMessages>>;
}
/**
 * A sent image keeps showing its local blob preview until the server's copy has loaded, so the
 * timeline does not flash an empty frame. The handoff ends, and its blobs are revoked, once the
 * server previews load.
 */
export declare function useAttachmentPreviewHandoff(input: AttachmentPreviewHandoffInput): {
    timelineAttachmentUrlById: Map<string, string>;
};
export {};
