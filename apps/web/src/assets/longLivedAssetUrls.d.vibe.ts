import { type AssetUrlState } from "@t3tools/client-runtime/state/assets";
import { AssetResource, type AssetCreateUrlResult, EnvironmentId } from "@t3tools/contracts";
import { AsyncResult, Atom } from "effect/reactivity";
type AssetUrlTarget = {
    readonly environmentId: EnvironmentId;
    readonly input: {
        readonly resource: AssetResource;
    };
};
/**
 * Asset URLs for documents that cannot report a failed load, such as frames. A
 * cached URL with `minLifeMs` left is reused; one closer to expiry is re-minted.
 * A node mints at most once, so a skewed client clock cannot mint on every update.
 */
export declare function makeLongLivedAssetUrlFamily(createUrl: (target: AssetUrlTarget) => Atom.Atom<AsyncResult.AsyncResult<AssetCreateUrlResult, unknown>>, options: {
    readonly minLifeMs: number;
    readonly now?: () => number;
}): (target: AssetUrlTarget) => Atom.Atom<AsyncResult.AsyncResult<{
    readonly relativeUrl: string;
    readonly expiresAt: number;
    readonly sourcePath?: string | undefined;
    readonly imageDimensions?: {
        readonly width: number;
        readonly height: number;
    } | undefined;
    readonly fileRevision?: string | undefined;
}, unknown>>;
/** Pass a null environment once the URL is adopted, so later mints do not re-render. */
export declare function useLongLivedAssetUrl(environmentId: EnvironmentId | null, resource: AssetResource): AssetUrlState;
export {};
