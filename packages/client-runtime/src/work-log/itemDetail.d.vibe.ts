import type { AssetResource, OrchestrationV2TurnItem } from "@t3tools/contracts";
/** @throws {never} */
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
 * @throws {never}
 */
export declare function turnItemDetailRevision(item: OrchestrationV2TurnItem): string;
/** @throws {never} */
export declare function turnItemNeedsDetailFetch(item: OrchestrationV2TurnItem): boolean;
/** @throws {never} */
export declare function turnItemOutputText(item: OrchestrationV2TurnItem): string | null;
/** @throws {never} */
export declare function turnItemOutputImages(item: OrchestrationV2TurnItem): ReadonlyArray<Extract<AssetResource, {
    readonly _tag: "tool-output-image";
}>>;
/** @throws {never} */
export declare function turnItemHasDetail(item: OrchestrationV2TurnItem): boolean;
