import { EditorId, EnvironmentAuthorizationError, EnvironmentId } from "@t3tools/contracts";
import { type AtomCommandFailure, type AtomCommandResult } from "@t3tools/client-runtime/state/runtime";
import * as Cause from "effect/Cause";
import * as Schema from "effect/Schema";
declare const PreferredEditorEnvironmentRequiredError_base: Schema.Class<PreferredEditorEnvironmentRequiredError, Schema.TaggedStruct<"PreferredEditorEnvironmentRequiredError", {
    readonly targetPath: Schema.String;
}>, Cause.YieldableError>;
export declare class PreferredEditorEnvironmentRequiredError extends PreferredEditorEnvironmentRequiredError_base {
    get message(): string;
}
declare const PreferredEditorUnavailableError_base: Schema.Class<PreferredEditorUnavailableError, Schema.TaggedStruct<"PreferredEditorUnavailableError", {
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly targetPath: Schema.String;
    readonly availableEditorIds: Schema.$Array<Schema.Literals<("antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed")[]>>;
}>, Cause.YieldableError>;
export declare class PreferredEditorUnavailableError extends PreferredEditorUnavailableError_base {
    get message(): string;
}
export declare function usePreferredEditor(availableEditors: ReadonlyArray<EditorId>): readonly ["antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed" | null, (value: "antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed" | ((val: "antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed" | null) => "antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed" | null) | null) => void];
export declare function useOpenInPreferredEditor(environmentId: EnvironmentId | null, availableEditors: readonly EditorId[]): (targetPath: string) => Promise<AtomCommandResult<EditorId, AtomCommandFailure<AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("@t3tools/contracts").ExternalLauncherBrowserSpawnError | import("@t3tools/contracts").ExternalLauncherCommandNotFoundError | import("@t3tools/contracts").ExternalLauncherEditorSpawnError | import("@t3tools/contracts").ExternalLauncherUnknownEditorError | import("@t3tools/contracts").ExternalLauncherUnsupportedEditorError | import("@t3tools/contracts").ExternalLauncherUnsupportedTargetError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>> | PreferredEditorEnvironmentRequiredError | PreferredEditorUnavailableError | EnvironmentAuthorizationError>>;
export {};
