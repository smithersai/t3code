import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
export declare const resolveEditorCommand: (editor: {
    readonly id: "cursor";
    readonly label: "Cursor";
    readonly commands: readonly ["cursor"];
    readonly baseArgs: readonly ["--classic"];
    readonly launchStyle: "goto";
    readonly remoteScheme: "cursor";
} | {
    readonly id: "trae";
    readonly label: "Trae";
    readonly commands: readonly ["trae"];
    readonly launchStyle: "goto";
} | {
    readonly id: "kiro";
    readonly label: "Kiro";
    readonly commands: readonly ["kiro"];
    readonly baseArgs: readonly ["ide"];
    readonly launchStyle: "goto";
} | {
    readonly id: "vscode";
    readonly label: "VS Code";
    readonly commands: readonly ["code"];
    readonly launchStyle: "goto";
    readonly remoteScheme: "vscode";
} | {
    readonly id: "vscode-insiders";
    readonly label: "VS Code Insiders";
    readonly commands: readonly ["code-insiders"];
    readonly launchStyle: "goto";
    readonly remoteScheme: "vscode-insiders";
} | {
    readonly id: "vscodium";
    readonly label: "VSCodium";
    readonly commands: readonly ["codium"];
    readonly launchStyle: "goto";
    readonly remoteScheme: "vscodium";
} | {
    readonly id: "zed";
    readonly label: "Zed";
    readonly commands: readonly ["zed", "zeditor"];
    readonly launchStyle: "direct-path";
    readonly remoteScheme: "zed";
} | {
    readonly id: "antigravity";
    readonly label: "Antigravity";
    readonly commands: readonly ["antigravity-ide", "agy-ide"];
    readonly launchStyle: "goto";
} | {
    readonly id: "idea";
    readonly label: "IntelliJ IDEA";
    readonly commands: readonly ["idea"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "IU";
} | {
    readonly id: "aqua";
    readonly label: "Aqua";
    readonly commands: readonly ["aqua"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "QA";
} | {
    readonly id: "clion";
    readonly label: "CLion";
    readonly commands: readonly ["clion"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "CL";
} | {
    readonly id: "datagrip";
    readonly label: "DataGrip";
    readonly commands: readonly ["datagrip"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "DB";
} | {
    readonly id: "dataspell";
    readonly label: "DataSpell";
    readonly commands: readonly ["dataspell"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "DS";
} | {
    readonly id: "goland";
    readonly label: "GoLand";
    readonly commands: readonly ["goland"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "GO";
} | {
    readonly id: "phpstorm";
    readonly label: "PhpStorm";
    readonly commands: readonly ["phpstorm"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "PS";
} | {
    readonly id: "pycharm";
    readonly label: "PyCharm";
    readonly commands: readonly ["pycharm"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "PY";
} | {
    readonly id: "rider";
    readonly label: "Rider";
    readonly commands: readonly ["rider"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "RD";
} | {
    readonly id: "rubymine";
    readonly label: "RubyMine";
    readonly commands: readonly ["rubymine"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "RM";
} | {
    readonly id: "rustrover";
    readonly label: "RustRover";
    readonly commands: readonly ["rustrover"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "RR";
} | {
    readonly id: "webstorm";
    readonly label: "WebStorm";
    readonly commands: readonly ["webstorm"];
    readonly launchStyle: "line-column";
    readonly jetbrainsProductCode: "WS";
} | {
    readonly id: "file-manager";
    readonly label: "File Manager";
    readonly commands: null;
    readonly launchStyle: "direct-path";
}, env: NodeJS.ProcessEnv) => Effect.Effect<Option.None<{
    command: string;
    baseArgs: never[] | readonly ["--classic"] | readonly ["ide"];
}> | Option.Some<{
    command: string;
    baseArgs: never[] | readonly ["--classic"] | readonly ["ide"];
}>, never, FileSystem.FileSystem | Path.Path>;
