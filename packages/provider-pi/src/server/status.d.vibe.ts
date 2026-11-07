import { type ServerProvider } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import { PiRpcError, PiRpcTimeoutError } from "./rpc.vibe";
import * as ProviderLatestVersions from "@t3tools/provider-core/server/ProviderLatestVersions";
import { type ServerProviderDraft } from "@t3tools/provider-core/server/snapshotProbe";
import { type ProviderMaintenanceCapabilities } from "@t3tools/provider-core/server/maintenanceResolver";
export { MINIMUM_PI_VERSION, checkPiProviderStatus } from "./status.vibe.platform.js";
export declare const discoverPiCommandsForCwd: (piSettings: {
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
}, environment: NodeJS.ProcessEnv, cwd: string) => Effect.Effect<{
    slashCommands: readonly {
        readonly name: string;
        readonly description?: string | undefined;
        readonly input?: {
            readonly hint: string;
        } | undefined;
    }[];
    skills: readonly {
        readonly name: string;
        readonly description?: string | undefined;
        readonly path: string;
        readonly scope?: string | undefined;
        readonly enabled: boolean;
        readonly displayName?: string | undefined;
        readonly shortDescription?: string | undefined;
        readonly userInvocationOnly?: boolean | undefined;
        readonly userInvocable?: boolean | undefined;
    }[];
}, PiRpcError | PiRpcTimeoutError, import("effect/process/ChildProcessSpawner").ChildProcessSpawner>;
export declare const buildInitialPiProviderSnapshot: (piSettings: {
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
}) => Effect.Effect<ServerProviderDraft>;
export declare const enrichPiSnapshot: (input: {
    readonly snapshot: ServerProvider;
    readonly maintenanceCapabilities: ProviderMaintenanceCapabilities;
    readonly enableProviderUpdateChecks?: boolean;
    readonly publishSnapshot: (snapshot: ServerProvider) => Effect.Effect<void>;
}) => Effect.Effect<void, never, HttpClient.HttpClient | ProviderLatestVersions.ProviderLatestVersions>;
