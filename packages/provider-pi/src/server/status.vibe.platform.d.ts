import { type CustomModelSetting, type ServerProviderModel } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as Result from "effect/Result";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import { PiRpcError } from "./rpc.vibe";
import { type ServerProviderDraft } from "@t3tools/provider-core/server/snapshotProbe";
import { type PiDiscoveredCommands } from "./commands.vibe";
export declare const PI_PRESENTATION: {
    readonly displayName: "Pi";
    readonly showInteractionModeToggle: false;
    readonly supportedRuntimeModes: readonly ["approval-required", "auto-accept-edits", "full-access"];
    readonly reportsContextWindow: true;
    readonly requiresNewThreadForModelChange: false;
};
export declare const PI_RPC_DISCOVERY_TIMEOUT_MS = 30000;
/**
 * get_entries arrived in 0.80.3 and agent_settled landed in source at 0.80.4.
 * Version 0.80.5 was the first published package containing both hooks.
 */
export declare const MINIMUM_PI_VERSION = "0.80.5";
export interface PiDiscovery extends PiDiscoveredCommands {
    readonly models: ReadonlyArray<ServerProviderModel>;
    readonly authenticated: boolean;
}
export declare function piModelsFromSettings(customModels: ReadonlyArray<CustomModelSetting> | undefined, discovered?: ReadonlyArray<ServerProviderModel>): ReadonlyArray<ServerProviderModel>;
export declare function parseDiscoveredModels(data: unknown, state: unknown): Result.Result<ReadonlyArray<ServerProviderModel>, PiRpcError>;
export declare const makePiDiscoveryConnection: (piSettings: {
    readonly enabled: boolean;
    readonly binaryPath: string;
    readonly launchArgs: string;
    readonly customModels: readonly (string | {
        readonly slug: string;
        readonly name?: string | undefined;
        readonly capabilities?: {
            readonly optionDescriptors?: readonly ({
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "select";
                readonly options: readonly {
                    readonly id: string;
                    readonly label: string;
                    readonly description?: string | undefined;
                    readonly isDefault?: boolean | undefined;
                }[];
                readonly currentValue?: string | undefined;
                readonly promptInjectedValues?: readonly string[] | undefined;
            } | {
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "boolean";
                readonly currentValue?: boolean | undefined;
            })[] | undefined;
        } | undefined;
    })[];
}, environment: NodeJS.ProcessEnv, launchArgs: readonly string[], cwd?: string | undefined) => Effect.Effect<{
    send: (record: import("./rpc.vibe.platform.ts").PiRpcRecord) => Effect.Effect<void, PiRpcError, never>;
    request: (record: import("./rpc.vibe.platform.ts").PiRpcRecord, timeoutMs?: any) => Effect.Effect<unknown, PiRpcError | import("./rpc.vibe.platform.ts").PiRpcTimeoutError, never>;
    events: import("effect/Queue").Queue<import("./rpc.vibe.platform.ts").PiRpcRecord, PiRpcError>;
    exited: Effect.Effect<number, PiRpcError, never>;
    terminate: Effect.Effect<void, never, never>;
}, PiRpcError, ChildProcessSpawner.ChildProcessSpawner | import("effect/Scope").Scope>;
export declare const checkPiProviderStatus: (piSettings: {
    readonly enabled: boolean;
    readonly binaryPath: string;
    readonly launchArgs: string;
    readonly customModels: readonly (string | {
        readonly slug: string;
        readonly name?: string | undefined;
        readonly capabilities?: {
            readonly optionDescriptors?: readonly ({
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "select";
                readonly options: readonly {
                    readonly id: string;
                    readonly label: string;
                    readonly description?: string | undefined;
                    readonly isDefault?: boolean | undefined;
                }[];
                readonly currentValue?: string | undefined;
                readonly promptInjectedValues?: readonly string[] | undefined;
            } | {
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "boolean";
                readonly currentValue?: boolean | undefined;
            })[] | undefined;
        } | undefined;
    })[];
}, environment?: NodeJS.ProcessEnv | undefined, cwd?: string | undefined) => Effect.Effect<ServerProviderDraft, never, ChildProcessSpawner.ChildProcessSpawner>;
