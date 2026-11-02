import type { AssetResource, OrchestrationV2TurnItem } from "@t3tools/contracts";
export declare function toolCallLines(input: {
    readonly command?: string | undefined;
    readonly args?: unknown;
}): {
    readonly command: string | null;
    readonly args: ReadonlyArray<readonly [string, string]> | null;
    readonly argsText: string | null;
};
/**
 * A running item keeps one key, so an open row fetches once while it streams and
 * again when it finishes, not on every update.
 */
export declare function turnItemDetailRevision(item: OrchestrationV2TurnItem): string;
export declare function turnItemNeedsDetailFetch(item: OrchestrationV2TurnItem): boolean;
export declare function turnItemOutputText(item: OrchestrationV2TurnItem): string | null;
export declare function turnItemOutputImages(item: OrchestrationV2TurnItem): ReadonlyArray<Extract<AssetResource, {
    readonly _tag: "tool-output-image";
}>>;
export declare function turnItemHasDetail(item: OrchestrationV2TurnItem): boolean;
