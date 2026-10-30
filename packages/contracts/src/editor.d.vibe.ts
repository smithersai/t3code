import * as Schema from "effect/Schema";
export declare const EditorLaunchStyle: Schema.Literals<readonly ["direct-path", "goto", "line-column"]>;
export type EditorLaunchStyle = typeof EditorLaunchStyle.Type;
export declare const EDITORS: readonly [{
    readonly id: "cursor";
    readonly label: "Cursor";
    readonly commands: readonly ["cursor"];
    readonly baseArgs: readonly ["--classic"];
    readonly launchStyle: "goto";
    readonly remoteScheme: "cursor";
}, {
    readonly id: "trae";
    readonly label: "Trae";
    readonly commands: readonly ["trae"];
    readonly launchStyle: "goto";
}, {
    readonly id: "kiro";
    readonly label: "Kiro";
    readonly commands: readonly ["kiro"];
    readonly baseArgs: readonly ["ide"];
    readonly launchStyle: "goto";
}, {
    readonly id: "vscode";
    readonly label: "VS Code";
    readonly commands: readonly ["code"];
    readonly launchStyle: "goto";
    readonly remoteScheme: "vscode";
}, {
    readonly id: "vscode-insiders";
    readonly label: "VS Code Insiders";
    readonly commands: readonly ["code-insiders"];
    readonly launchStyle: "goto";
    readonly remoteScheme: "vscode-insiders";
}, {
    readonly id: "vscodium";
    readonly label: "VSCodium";
    readonly commands: readonly ["codium"];
    readonly launchStyle: "goto";
    readonly remoteScheme: "vscodium";
}, {
    readonly id: "zed";
    readonly label: "Zed";
    readonly commands: readonly ["zed", "zeditor"];
    readonly launchStyle: "direct-path";
    readonly remoteScheme: "zed";
}, {
    readonly id: "antigravity";
    readonly label: "Antigravity";
    readonly commands: readonly ["antigravity-ide", "agy-ide"];
    readonly launchStyle: "goto";
}, {
    readonly id: "idea";
    readonly label: "IntelliJ IDEA";
    readonly commands: readonly ["idea"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "IU";
}, {
    readonly id: "aqua";
    readonly label: "Aqua";
    readonly commands: readonly ["aqua"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "QA";
}, {
    readonly id: "clion";
    readonly label: "CLion";
    readonly commands: readonly ["clion"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "CL";
}, {
    readonly id: "datagrip";
    readonly label: "DataGrip";
    readonly commands: readonly ["datagrip"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "DB";
}, {
    readonly id: "dataspell";
    readonly label: "DataSpell";
    readonly commands: readonly ["dataspell"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "DS";
}, {
    readonly id: "goland";
    readonly label: "GoLand";
    readonly commands: readonly ["goland"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "GO";
}, {
    readonly id: "phpstorm";
    readonly label: "PhpStorm";
    readonly commands: readonly ["phpstorm"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "PS";
}, {
    readonly id: "pycharm";
    readonly label: "PyCharm";
    readonly commands: readonly ["pycharm"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "PY";
}, {
    readonly id: "rider";
    readonly label: "Rider";
    readonly commands: readonly ["rider"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "RD";
}, {
    readonly id: "rubymine";
    readonly label: "RubyMine";
    readonly commands: readonly ["rubymine"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "RM";
}, {
    readonly id: "rustrover";
    readonly label: "RustRover";
    readonly commands: readonly ["rustrover"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "RR";
}, {
    readonly id: "webstorm";
    readonly label: "WebStorm";
    readonly commands: readonly ["webstorm"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "WS";
}, {
    readonly id: "file-manager";
    readonly label: "File Manager";
    readonly commands: null;
    readonly launchStyle: "direct-path";
}];
export declare const EditorId: Schema.Literals<("antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed")[]>;
export type EditorId = typeof EditorId.Type;
export declare const FileManagerRevealKind: Schema.Literals<readonly ["finder", "file-explorer", "files"]>;
export type FileManagerRevealKind = typeof FileManagerRevealKind.Type;
export declare const LaunchEditorInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly editor: Schema.Literals<("antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed")[]>;
    /** Only for file-manager; requires the server's shellRevealInFileManager capability. */
    readonly reveal: Schema.optional<Schema.Boolean>;
}>;
export type LaunchEditorInput = typeof LaunchEditorInput.Type;
export declare const REMOTE_CAPABLE_EDITOR_IDS: ReadonlyArray<EditorId>;
export declare const remoteSchemeForEditor: (id: EditorId) => string | undefined;
export declare const buildRemoteOpenUrl: (input: {
    readonly editor: EditorId;
    readonly host: string;
    readonly username?: string;
    readonly absolutePath: string;
    readonly isFile?: boolean;
}) => string | undefined;
export declare const RemoteOpenTargetKind: Schema.Literals<readonly ["tailscale", "mdns"]>;
export type RemoteOpenTargetKind = typeof RemoteOpenTargetKind.Type;
export declare const RemoteOpenTarget: Schema.Struct<{
    readonly kind: Schema.Literals<readonly ["tailscale", "mdns"]>;
    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly username: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type RemoteOpenTarget = typeof RemoteOpenTarget.Type;
declare const ExternalLauncherUnknownEditorError_base: Schema.Class<ExternalLauncherUnknownEditorError, Schema.TaggedStruct<"ExternalLauncherUnknownEditorError", {
    readonly editor: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ExternalLauncherUnknownEditorError extends ExternalLauncherUnknownEditorError_base {
    get message(): string;
}
declare const ExternalLauncherUnsupportedEditorError_base: Schema.Class<ExternalLauncherUnsupportedEditorError, Schema.TaggedStruct<"ExternalLauncherUnsupportedEditorError", {
    readonly editor: Schema.Literals<("antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed")[]>;
}>, import("effect/Cause").YieldableError>;
export declare class ExternalLauncherUnsupportedEditorError extends ExternalLauncherUnsupportedEditorError_base {
    get message(): string;
}
declare const ExternalLauncherCommandNotFoundError_base: Schema.Class<ExternalLauncherCommandNotFoundError, Schema.TaggedStruct<"ExternalLauncherCommandNotFoundError", {
    readonly editor: Schema.Literals<("antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed")[]>;
    readonly command: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ExternalLauncherCommandNotFoundError extends ExternalLauncherCommandNotFoundError_base {
    get message(): string;
}
declare const ExternalLauncherUnsupportedTargetError_base: Schema.Class<ExternalLauncherUnsupportedTargetError, Schema.TaggedStruct<"ExternalLauncherUnsupportedTargetError", {
    readonly editor: Schema.Literals<("antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed")[]>;
}>, import("effect/Cause").YieldableError>;
export declare class ExternalLauncherUnsupportedTargetError extends ExternalLauncherUnsupportedTargetError_base {
    get message(): string;
}
declare const ExternalLauncherBrowserSpawnError_base: Schema.Class<ExternalLauncherBrowserSpawnError, Schema.TaggedStruct<"ExternalLauncherBrowserSpawnError", {
    readonly command: Schema.String;
    readonly args: Schema.$Array<Schema.String>;
    readonly cause: Schema.Defect;
    readonly target: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ExternalLauncherBrowserSpawnError extends ExternalLauncherBrowserSpawnError_base {
    get message(): string;
}
declare const ExternalLauncherEditorSpawnError_base: Schema.Class<ExternalLauncherEditorSpawnError, Schema.TaggedStruct<"ExternalLauncherEditorSpawnError", {
    readonly command: Schema.String;
    readonly args: Schema.$Array<Schema.String>;
    readonly cause: Schema.Defect;
    readonly editor: Schema.Literals<("antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed")[]>;
    readonly target: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ExternalLauncherEditorSpawnError extends ExternalLauncherEditorSpawnError_base {
    get message(): string;
}
export declare const ExternalLauncherError: Schema.Union<readonly [typeof ExternalLauncherUnknownEditorError, typeof ExternalLauncherUnsupportedEditorError, typeof ExternalLauncherCommandNotFoundError, typeof ExternalLauncherUnsupportedTargetError, typeof ExternalLauncherBrowserSpawnError, typeof ExternalLauncherEditorSpawnError]>;
export type ExternalLauncherError = typeof ExternalLauncherError.Type;
export {};
