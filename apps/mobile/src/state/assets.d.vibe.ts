import type { AssetResource, EnvironmentId } from "@t3tools/contracts";
import { Atom, AsyncResult } from "effect/reactivity";
import { type AssetUrlState } from "./asset-url-state";
export type { AssetUrlFailureReason, AssetUrlState } from "./asset-url-state";
export declare const assetEnvironment: {
    createUrl: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly resource: {
                readonly _tag: "draft-workspace-file";
                readonly cwd: string;
                readonly path: string;
            } | {
                readonly _tag: "github-media";
                readonly cwd: string;
                readonly url: string;
            } | {
                readonly _tag: "native-app-icon";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "tool-output-image";
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly itemId: string & import("effect/Brand").Brand<"TurnItemId">;
                readonly index: number;
            } | {
                readonly _tag: "workspace-file";
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly path: string;
            } | {
                readonly _tag: "attachment";
                readonly attachmentId: string;
                readonly fileName?: string | undefined;
                readonly mimeType?: string | undefined;
                readonly disposition?: "attachment" | "inline" | undefined;
                readonly renderIntent?: "mcp-app" | undefined;
            } | {
                readonly _tag: "media-file";
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly path: string;
                readonly disposition?: "attachment" | undefined;
            } | {
                readonly _tag: "project-favicon";
                readonly cwd: string;
                readonly path?: string | undefined;
            };
        };
    }) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly relativeUrl: string;
        readonly expiresAt: number;
        readonly sourcePath?: string | undefined;
        readonly imageDimensions?: {
            readonly width: number;
            readonly height: number;
        } | undefined;
        readonly fileRevision?: string | undefined;
    }, import("@t3tools/contracts").AssetAttachmentNotFoundError | import("@t3tools/contracts").AssetPreviewTypeValidationError | import("@t3tools/contracts").AssetProjectFaviconInspectionError | import("@t3tools/contracts").AssetProjectFaviconNotFoundError | import("@t3tools/contracts").AssetProjectFaviconResolutionError | import("@t3tools/contracts").AssetSigningKeyLoadError | import("@t3tools/contracts").AssetSourceControlMediaUrlValidationError | import("@t3tools/contracts").AssetWorkspaceAssetInspectionError | import("@t3tools/contracts").AssetWorkspaceAssetNotFoundError | import("@t3tools/contracts").AssetWorkspaceContextNotFoundError | import("@t3tools/contracts").AssetWorkspaceContextResolutionError | import("@t3tools/contracts").AssetWorkspacePathValidationError | import("@t3tools/contracts").AssetWorkspaceResolutionError | import("@t3tools/contracts").AssetWorkspaceRootNormalizationError | import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | Error | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    createUrls: (target: {
        readonly environmentId: EnvironmentId;
        readonly resources: ReadonlyArray<AssetResource>;
    }) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly relativeUrl: string;
        readonly expiresAt: number;
        readonly sourcePath?: string | undefined;
        readonly imageDimensions?: {
            readonly width: number;
            readonly height: number;
        } | undefined;
        readonly fileRevision?: string | undefined;
    }, import("@t3tools/contracts").AssetAttachmentNotFoundError | import("@t3tools/contracts").AssetPreviewTypeValidationError | import("@t3tools/contracts").AssetProjectFaviconInspectionError | import("@t3tools/contracts").AssetProjectFaviconNotFoundError | import("@t3tools/contracts").AssetProjectFaviconResolutionError | import("@t3tools/contracts").AssetSigningKeyLoadError | import("@t3tools/contracts").AssetSourceControlMediaUrlValidationError | import("@t3tools/contracts").AssetWorkspaceAssetInspectionError | import("@t3tools/contracts").AssetWorkspaceAssetNotFoundError | import("@t3tools/contracts").AssetWorkspaceContextNotFoundError | import("@t3tools/contracts").AssetWorkspaceContextResolutionError | import("@t3tools/contracts").AssetWorkspacePathValidationError | import("@t3tools/contracts").AssetWorkspaceResolutionError | import("@t3tools/contracts").AssetWorkspaceRootNormalizationError | import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | Error | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>[]>;
};
export declare const projectFaviconUrlAtom: (target: import("@t3tools/client-runtime/project-favicon-cache").ProjectFaviconTarget) => Atom.Atom<string | null>;
export declare function useAssetUrlState(environmentId: EnvironmentId | null, resource: AssetResource | null): AssetUrlState;
export declare function useAssetUrl(environmentId: EnvironmentId | null, resource: AssetResource | null): string | null;
/** Explicit playback and sharing must reauthorize files that may have been replaced on disk. */
export declare function useRefreshAssetUrl(environmentId: EnvironmentId | null, resource: AssetResource | null): () => Promise<string | null>;
/**
 * {@link useRefreshAssetUrl} for async tasks that resolve several resources at once.
 * @throws {never}
 */
export declare function refreshAssetUrl(environmentId: EnvironmentId, resource: AssetResource, signal?: AbortSignal): Promise<string | null>;
export interface AuthorizedAssetUrl {
    readonly url: string;
    readonly authorizedAt: number;
}
/**
 * A signed URL minted when the reader mounts, not a cached one: cached links can
 * expire while the client is suspended.
 */
export declare function useFreshAssetUrl(environmentId: EnvironmentId | null, resource: AssetResource | null, revision: number): AsyncResult.AsyncResult<AuthorizedAssetUrl, Error>;
