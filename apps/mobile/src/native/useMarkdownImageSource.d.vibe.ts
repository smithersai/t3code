import type { EnvironmentId, ThreadId } from "@t3tools/contracts";
import type { MarkdownImageSourceResolver } from "./SelectableMarkdownText.types";
export declare function useMarkdownImageSource(props: {
    readonly environmentId: EnvironmentId;
    readonly threadId: ThreadId | null;
    readonly workspaceRoot: string | null;
    readonly captured?: boolean;
}): MarkdownImageSourceResolver;
