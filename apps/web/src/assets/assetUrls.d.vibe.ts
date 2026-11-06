import { type AssetUrlState as RuntimeAssetUrlState } from "@t3tools/client-runtime/state/assets";
import { AssetResource, type AssetCreateUrlResult, EnvironmentId } from "@t3tools/contracts";
import { AsyncResult, Atom } from "effect/reactivity";
export { resolveAssetUrl } from "@t3tools/client-runtime/state/assets";
export type AssetUrlState = RuntimeAssetUrlState & {
    readonly waiting?: boolean;
};
type AssetUrlTarget = {
    readonly environmentId: EnvironmentId;
    readonly input: {
        readonly resource: AssetResource;
    };
};
/**
 * The URL is minted per resource and shared across revisions, so reading a
 * different revision (even an earlier one after a revert) re-mints it. An
 * in-flight mint is shared only on first read; after an edit the server must
 * re-read the file, so the re-mint waits for that mint to settle.
 */
export declare function makeRevisionedAssetUrlFamily(createUrl: (target: AssetUrlTarget) => Atom.Atom<AsyncResult.AsyncResult<AssetCreateUrlResult, unknown>>): (target: AssetUrlTarget & {
    readonly revision: string | null;
}) => Atom.Atom<AsyncResult.AsyncResult<{
    readonly relativeUrl: string;
    readonly expiresAt: number;
    readonly sourcePath?: string | undefined;
    readonly imageDimensions?: {
        readonly width: number;
        readonly height: number;
    } | undefined;
    readonly fileRevision?: string | undefined;
}, unknown>>;
export declare const revisionedAssetUrl: (target: AssetUrlTarget & {
    readonly revision: string | null;
}) => Atom.Atom<AsyncResult.AsyncResult<{
    readonly relativeUrl: string;
    readonly expiresAt: number;
    readonly sourcePath?: string | undefined;
    readonly imageDimensions?: {
        readonly width: number;
        readonly height: number;
    } | undefined;
    readonly fileRevision?: string | undefined;
}, unknown>>;
/**
 * Pass `revision` for a workspace file whose bytes can change under the same
 * path; each new revision gets a freshly minted URL.
 */
export declare function useAssetUrlState(environmentId: EnvironmentId | null, resource: AssetResource | null, revision?: string | null): AssetUrlState;
export declare function useAssetUrlRefresh(environmentId: EnvironmentId | null, resource: AssetResource | null): () => Promise<string | null>;
export declare function useAssetUrls(environmentId: EnvironmentId, resources: ReadonlyArray<AssetResource>): ReadonlyArray<string | null>;
