import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import { type WslDistro } from "./wslPathParsing.ts";
import { DesktopWslDistroListError, DesktopWslEnvironment } from "./DesktopWslEnvironment.vibe.platform.js";
import type { EnsureWslNodePtyOptions, EnsureWslNodePtyResult, PrepareWslRuntimeResult, ProbeWslRuntimeResult, WslRuntimeArchive } from "./DesktopWslEnvironment.vibe.platform.js";
export { DesktopWslDistroListError, DesktopWslEnvironment, buildWslRuntimeInstallScript, buildWslRuntimeInvalidateScript, buildWslRuntimeProbeScript, buildWslRuntimePruneScript, layer, parseResolvedPath, parseWslRuntimeRoot, } from "./DesktopWslEnvironment.vibe.platform.js";
export type { EnsureWslNodePtyOptions, EnsureWslNodePtyResult, PrepareWslRuntimeResult, ProbeWslRuntimeResult, ToolchainReport, WslRuntimeArchive, } from "./DesktopWslEnvironment.vibe.platform.js";
export interface DesktopWslEnvironmentTestStub {
    readonly isAvailable?: boolean;
    readonly distros?: ReadonlyArray<WslDistro>;
    readonly distroListError?: DesktopWslDistroListError;
    /** @throws {never} */
    readonly windowsToWslPath?: (distro: string | null, windowsPath: string) => Option.Option<string>;
    /** @throws {never} */
    readonly getUserHome?: (distro: string | null) => Option.Option<string>;
    /** @throws {never} */
    readonly getDistroIp?: (distro: string | null) => Option.Option<string>;
    /** @throws {never} */
    readonly prepareRuntime?: (distro: string | null, archive: WslRuntimeArchive) => PrepareWslRuntimeResult;
    readonly pruneRuntimes?: (distro: string | null, runtimeId: string) => Effect.Effect<void>;
    readonly invalidateRuntime?: (distro: string | null, runtimeId: string) => Effect.Effect<void>;
    /** @throws {never} */
    readonly probeRuntime?: (distro: string | null, linuxAppRoot: string) => ProbeWslRuntimeResult;
    /** @throws {never} */
    readonly ensureNodePty?: (distro: string | null, linuxAppRoot: string, options?: EnsureWslNodePtyOptions) => EnsureWslNodePtyResult;
}
export declare const layerTest: (stub?: DesktopWslEnvironmentTestStub) => Layer.Layer<DesktopWslEnvironment, never, never>;
