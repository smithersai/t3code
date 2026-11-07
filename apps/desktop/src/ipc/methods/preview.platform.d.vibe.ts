import * as PreviewManager from "../../preview/Manager.ts";
import * as DesktopIpc from "../DesktopIpc.vibe";
/**
 * Keep the default profile's bare environment id so existing logins retain their partition.
 * @throws {never}
 */
export declare function resolvePartitionScope(environmentId: string, profileId: string | undefined): {
    readonly scope: string;
    readonly persistent: boolean;
    readonly namespace?: "profile";
};
export declare const getPreviewConfig: DesktopIpc.DesktopIpcMethod<PreviewManager.PreviewArtifactImageLoadError | PreviewManager.PreviewArtifactPathOutsideDirectoryError | PreviewManager.PreviewAutomationDebuggerAttachedError | PreviewManager.PreviewAutomationDevToolsOpenError | PreviewManager.PreviewMainWindowClosedError | PreviewManager.PreviewOperationError | PreviewManager.PreviewRecordingArmConflictError | PreviewManager.PreviewRecordingCaptureUnavailableError | PreviewManager.PreviewTabNotFoundError | PreviewManager.PreviewWebContentsNotFoundError | PreviewManager.PreviewWebviewNotInitializedError | import("effect/Schema").SchemaError, PreviewManager.PreviewManager>;
