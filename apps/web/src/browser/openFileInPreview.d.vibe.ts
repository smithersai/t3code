import type { AssetCreateUrlResult, AssetResource, EnvironmentId, PreviewOpenInput, PreviewSessionSnapshot, ScopedThreadRef } from "@t3tools/contracts";
import { type AtomCommandResult } from "@t3tools/client-runtime/state/runtime";
import * as Cause from "effect/Cause";
export declare const isBrowserPreviewFile: (path: string) => boolean;
declare const BrowserPreviewUnavailableError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Cause.YieldableError & {
    readonly _tag: "BrowserPreviewUnavailableError";
} & Readonly<A>;
export declare class BrowserPreviewUnavailableError extends BrowserPreviewUnavailableError_base<{
    readonly message: string;
}> {
}
declare const BrowserSettingsReadError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Cause.YieldableError & {
    readonly _tag: "BrowserSettingsReadError";
} & Readonly<A>;
export declare class BrowserSettingsReadError extends BrowserSettingsReadError_base<{
    readonly cause: unknown;
}> {
    get message(): string;
}
export type OpenPreviewMutation<E = unknown> = (input: {
    readonly environmentId: EnvironmentId;
    readonly input: PreviewOpenInput;
}) => Promise<AtomCommandResult<PreviewSessionSnapshot, E>>;
/** @throws {never} */
export declare function openUrlInPreview<E>(input: {
    readonly threadRef: ScopedThreadRef;
    readonly url: string;
    readonly openPreview: OpenPreviewMutation<E>;
    readonly profileId?: PreviewOpenInput["profileId"];
    readonly background?: boolean;
}): Promise<AtomCommandResult<void, E | BrowserSettingsReadError>>;
/** @throws {never} */
export declare function openFileInPreview<AssetError, PreviewError>(input: {
    readonly threadRef: ScopedThreadRef;
    readonly filePath: string;
    readonly workspaceRoot: string | undefined;
    readonly httpBaseUrl: string;
    readonly createAssetUrl: (input: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly resource: AssetResource;
        };
    }) => Promise<AtomCommandResult<AssetCreateUrlResult, AssetError>>;
    readonly openPreview: OpenPreviewMutation<PreviewError>;
}): Promise<AtomCommandResult<void, AssetError | PreviewError | BrowserPreviewUnavailableError | BrowserSettingsReadError>>;
export {};
