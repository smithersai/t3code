import { Atom } from "effect/reactivity";
export declare const assetEnvironment: {
    createUrl: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
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
                readonly fileName?: string;
                readonly mimeType?: string;
                readonly disposition?: "attachment" | "inline";
                readonly renderIntent?: "mcp-app";
            } | {
                readonly _tag: "media-file";
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly path: string;
                readonly disposition?: "attachment";
            } | {
                readonly _tag: "project-favicon";
                readonly cwd: string;
                readonly path?: string | undefined;
            };
        };
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
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
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly resources: ReadonlyArray<import("@t3tools/contracts").AssetResource>;
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
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
