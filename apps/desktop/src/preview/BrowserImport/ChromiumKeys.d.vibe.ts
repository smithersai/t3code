import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import { ChildProcessSpawner } from "effect/process";
import { ChromiumKeyError } from "./ChromiumKeys.vibe.platform.js";
import type { ChromiumKeyMaterial } from "./ChromiumKeys.vibe.platform.js";
export { ChromiumKeyError, ChromiumKeyFailure, decodeWindowsWrappedKey, unwrapWindowsDpapiKey } from "./ChromiumKeys.vibe.platform.js";
export type { ChromiumKeyMaterial } from "./ChromiumKeys.vibe.platform.js";
/** Exit codes distinguish missing keys, denied access, and unavailable keyrings without localized message parsing. */
export declare const readLinuxSecret: (application: string) => Effect.Effect<string, ChromiumKeyError, ChildProcessSpawner.ChildProcessSpawner>;
export declare const readWindowsKey: (localStatePath: string) => Effect.Effect<Buffer<ArrayBuffer>, ChromiumKeyError, ChildProcessSpawner.ChildProcessSpawner | FileSystem.FileSystem>;
export interface ChromiumKeyRequest {
    readonly platform: NodeJS.Platform;
    readonly keychainService: string | undefined;
    readonly keychainAccount: string | undefined;
    readonly linuxSecretApplication: string | undefined;
}
export declare const resolveChromiumKeys: (request: ChromiumKeyRequest) => Effect.Effect<ChromiumKeyMaterial, ChromiumKeyError, ChildProcessSpawner.ChildProcessSpawner>;
