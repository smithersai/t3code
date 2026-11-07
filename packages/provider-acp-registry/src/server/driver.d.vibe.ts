import { type AcpRegistryOperationError, type ServerProvider } from "@t3tools/contracts";
import { AcpRegistrySettings } from "../settings.vibe";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as ProviderHost from "@t3tools/provider-core/server/ProviderHost";
import { type AcpRegistryAdapterV2DriverEnv } from "./adapter.ts";
import { type ProviderDriver, type ProviderInstance } from "@t3tools/provider-core/server/driver";
import { type AcpRegistryAvailableCommands, type AcpRegistryConfigurationProbe, type AcpRegistryConfigurationProbeResult, type AcpRegistryLiveConfiguration } from "./probe.vibe";
import * as AcpRegistrySupport from "./AcpRegistrySupport.ts";
interface SnapshotIdentity {
    readonly instanceId: ProviderInstance["instanceId"];
    readonly displayName: string | undefined;
    readonly accentColor: string | undefined;
    readonly continuationKey: string;
}
/** @throws {never} */
export declare function applyAcpRegistryAvailableCommands(provider: ServerProvider, commands: Option.Option<AcpRegistryAvailableCommands>): ServerProvider;
/** @throws {never} */
export declare function applyAcpRegistryLiveConfiguration(provider: ServerProvider, configuration: AcpRegistryLiveConfiguration, customModels: ReadonlyArray<string>): ServerProvider;
/** @throws {never} */
export declare function buildCheckedAcpRegistrySnapshot(input: SnapshotIdentity & {
    readonly settings: AcpRegistrySettings;
    readonly checkedAt: string;
    readonly inspection: AcpRegistrySupport.AcpRegistryInspection | {
        readonly status: "failed";
        readonly message: string;
    };
    readonly probe?: AcpRegistryConfigurationProbeResult;
    readonly probeError?: AcpRegistryOperationError;
}): ServerProvider;
export declare const checkAcpRegistryProviderStatus: <Requirements>(input: SnapshotIdentity & {
    readonly settings: AcpRegistrySettings;
    readonly cwd: string;
    readonly environment: NodeJS.ProcessEnv;
}, probeConfiguration: AcpRegistryConfigurationProbe<Requirements>) => Effect.Effect<ServerProvider, never, AcpRegistrySupport.AcpRegistryCatalog | Requirements>;
export declare const checkAcpRegistryProviderReadiness: (input: SnapshotIdentity & {
    readonly settings: AcpRegistrySettings;
    readonly environment: NodeJS.ProcessEnv;
}) => Effect.Effect<ServerProvider, never, AcpRegistrySupport.AcpRegistryCatalog>;
export type AcpRegistryDriverEnv = AcpRegistryAdapterV2DriverEnv | ProviderHost.ProviderHost;
export declare const AcpRegistryDriver: ProviderDriver<AcpRegistrySettings, AcpRegistryDriverEnv>;
export {};
