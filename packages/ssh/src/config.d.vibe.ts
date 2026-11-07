import type { DesktopDiscoveredSshHost } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import { SshHostDiscoveryError } from "./errors.vibe";
/** @throws {never} */
export declare function parseKnownHostsHostnames(raw: string): ReadonlyArray<string>;
export declare const discoverSshHosts: (input: {
    readonly homeDir?: string;
}) => Effect.Effect<DesktopDiscoveredSshHost[], SshHostDiscoveryError, FileSystem.FileSystem | Path.Path>;
