import type { RelayClientInstallProgressEvent } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "./Crypto.vibe";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import { HttpClient } from "effect/http";
import { ChildProcessSpawner } from "effect/process";
export declare const CLOUDFLARED_VERSION = "2026.10.4";
export declare const CLOUDFLARED_MIN_VERSION = "2025.6.1";
export type RelayClientExecutableSource = "override" | "managed" | "path";
export type RelayClientStatus = {
    readonly status: "available";
    readonly executablePath: string;
    readonly source: RelayClientExecutableSource;
    readonly version: string;
} | {
    readonly status: "missing";
    readonly version: string;
} | {
    readonly status: "unsupported";
    readonly platform: NodeJS.Platform;
    readonly arch: string;
    readonly version: string;
};
export type AvailableRelayClient = Extract<RelayClientStatus, {
    readonly status: "available";
}>;
declare const RelayClientInstallError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "RelayClientInstallError";
} & Readonly<A>;
export declare class RelayClientInstallError extends RelayClientInstallError_base<{
    readonly reason: "download_failed" | "invalid_checksum" | "install_locked" | "override_missing" | "unsupported_platform" | "validation_failed" | "write_failed";
    readonly message: string;
    readonly cause?: unknown;
}> {
}
export interface CloudflaredReleaseAsset {
    readonly url: string;
    readonly sha256: string;
    readonly archive: "binary" | "tgz";
}
export interface CloudflaredRelayClientOptions {
    readonly baseDir: string;
    readonly releaseAsset?: CloudflaredReleaseAsset;
}
export interface RelayClientShape {
    readonly resolve: Effect.Effect<RelayClientStatus>;
    readonly install: Effect.Effect<AvailableRelayClient, RelayClientInstallError>;
    readonly installWithProgress: (report: (event: RelayClientInstallProgressEvent) => Effect.Effect<void>) => Effect.Effect<AvailableRelayClient, RelayClientInstallError>;
    /** Removes managed releases older than the pin, except the newest one. Call once the pin has connected. */
    readonly pruneManagedVersions: Effect.Effect<void>;
}
/** @throws {never} */
export declare function isPinnedManagedRelayClient(client: AvailableRelayClient): boolean;
declare const RelayClient_base: Context.ServiceClass<RelayClient, "@t3tools/shared/relayClient", RelayClientShape>;
export declare class RelayClient extends RelayClient_base {
}
/** @throws {never} */
export declare function compareCloudflaredVersions(left: string, right: string): number;
/** @throws {never} */
export declare function parseCloudflaredVersionOutput(output: string): string | null;
export declare const makeCloudflaredRelayClient: (options: CloudflaredRelayClientOptions) => Effect.Effect<RelayClientShape, never, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | FileSystem.FileSystem | HttpClient.HttpClient | Path.Path>;
export declare const layerCloudflared: (options: CloudflaredRelayClientOptions) => Layer.Layer<RelayClient, never, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | FileSystem.FileSystem | HttpClient.HttpClient | Path.Path>;
export {};
