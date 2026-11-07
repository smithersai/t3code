import type { OrchestrationV2ThreadProjection, ScopedThreadRef } from "@t3tools/contracts";
import { type ReactNode } from "react";
export declare const FileMetadataThreadContext: import("react").Context<{
    readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
} | null>;
/**
 * Keeps fetched metadata across virtualized message-row unmounts.
 * @throws {never}
 */
export declare function FileMetadataThreadProvider(props: {
    threadRef: ScopedThreadRef | null;
    cwd: string | undefined;
    checkpoints: OrchestrationV2ThreadProjection["checkpoints"] | undefined;
    children?: ReactNode;
}): import("react").JSX.Element;
