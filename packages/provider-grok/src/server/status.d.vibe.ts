import { type ServerProvider } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import * as ProviderLatestVersions from "@t3tools/provider-core/server/ProviderLatestVersions";
import { type ServerProviderDraft } from "@t3tools/provider-core/server/snapshotProbe";
import { type ProviderMaintenanceCapabilities } from "@t3tools/provider-core/server/maintenanceResolver";
export { buildGrokModelCapabilities, checkGrokProviderStatus, grokSlashCommandsFromInitialize, parseGrokModelsCliOutput, } from "./status.vibe.platform.js";
export type { GrokModelsCliOutput } from "./status.vibe.platform.js";
export declare const buildInitialGrokProviderSnapshot: (grokSettings: {
    readonly enabled: boolean;
    readonly binaryPath: string;
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
export declare const enrichGrokSnapshot: (input: {
    readonly snapshot: ServerProvider;
    readonly maintenanceCapabilities: ProviderMaintenanceCapabilities;
    readonly enableProviderUpdateChecks?: boolean;
    readonly publishSnapshot: (snapshot: ServerProvider) => Effect.Effect<void>;
}) => Effect.Effect<void, never, HttpClient.HttpClient | ProviderLatestVersions.ProviderLatestVersions>;
