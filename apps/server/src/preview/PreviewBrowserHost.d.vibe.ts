import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Schema from "effect/Schema";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
export declare const SETUP_SUBCOMMAND = "browser setup";
export declare const NO_SANDBOX_SIGNATURE = "No usable sandbox";
/** @throws {never} */
export declare const sandboxDisabled: (env: Readonly<Record<string, string | undefined>>) => boolean;
export declare const APPARMOR_PROFILE_PATH = "/etc/apparmor.d/t3-chrome-headless-shell";
/** Match Ubuntu's Chrome profile; unconfined adds nothing beyond userns. */
export declare const APPARMOR_PROFILE = "# Written by `t3 browser setup`: lets T3 Code's headless browser use Chrome's sandbox.\nabi <abi/4.0>,\ninclude <tunables/global>\n\nprofile t3-chrome-headless-shell /**/tools/chrome-headless-shell/*/*/chrome-headless-shell flags=(unconfined) {\n  userns,\n\n  include if exists <local/t3-chrome-headless-shell>\n}\n";
/** Ubuntu 24.04 and Debian 13 use some t64 library names; choose names available through apt. */
export declare const DEBIAN_PACKAGES: ReadonlyArray<ReadonlyArray<string>>;
declare const PreviewBrowserSandboxError_base: Schema.Class<PreviewBrowserSandboxError, Schema.TaggedStruct<"PreviewBrowserSandboxError", {
    readonly setupCommand: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewBrowserSandboxError extends PreviewBrowserSandboxError_base {
    get message(): string;
}
declare const PreviewBrowserLibrariesError_base: Schema.Class<PreviewBrowserLibrariesError, Schema.TaggedStruct<"PreviewBrowserLibrariesError", {
    readonly setupCommand: Schema.String;
    readonly libraries: Schema.$Array<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewBrowserLibrariesError extends PreviewBrowserLibrariesError_base {
    get message(): string;
}
declare const PreviewBrowserRootError_base: Schema.Class<PreviewBrowserRootError, Schema.TaggedStruct<"PreviewBrowserRootError", {}>, import("effect/Cause").YieldableError>;
/** Chrome will not start its sandbox as root (crbug.com/638180), which no host setup fixes. */
export declare class PreviewBrowserRootError extends PreviewBrowserRootError_base {
    get message(): string;
}
export type PreviewBrowserHostError = PreviewBrowserSandboxError | PreviewBrowserLibrariesError | PreviewBrowserRootError;
export declare const diagnoseLaunchFailure: (input: {
    readonly executable: string;
    readonly output: string;
    readonly setupCommand: string;
}) => Effect.Effect<PreviewBrowserLibrariesError | PreviewBrowserRootError | PreviewBrowserSandboxError | undefined, never, ChildProcessSpawner.ChildProcessSpawner>;
/** Detect missing libraries with --version; ldd can report misses that NixOS nix-ld provides. */
export declare const missingLibraries: (executable: string) => Effect.Effect<string[], never, ChildProcessSpawner.ChildProcessSpawner>;
export declare const sandboxBlocked: Effect.Effect<boolean, never, FileSystem.FileSystem>;
export {};
