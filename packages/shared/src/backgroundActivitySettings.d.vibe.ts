import { type BackgroundActivityProfile, type BackgroundActivitySettings, type ServerSettings } from "@t3tools/contracts";
import * as Duration from "effect/Duration";
export interface ResolvedBackgroundActivitySettings {
    readonly profile: BackgroundActivityProfile;
    readonly automaticGitFetchInterval: Duration.Duration;
    readonly providerHealthRefreshInterval: Duration.Duration;
    readonly hostPowerMonitorActiveInterval: Duration.Duration;
    readonly hostPowerMonitorIdleInterval: Duration.Duration;
    readonly idleClientTtl: Duration.Duration;
    readonly pauseWhenHostLocked: boolean;
    readonly pauseWhenHostLowPower: boolean;
    readonly pauseWhenClientLowPower: boolean;
    readonly pauseWhenOnBattery: boolean;
}
/** @throws {never} */
export declare function getBackgroundActivityPresetSettings(profile: BackgroundActivityProfile): ResolvedBackgroundActivitySettings;
/** @throws {never} */
export declare function getBackgroundActivityBaseProfile(backgroundActivity: BackgroundActivitySettings): BackgroundActivityProfile;
/** @throws {never} */
export declare function resolveBackgroundActivitySettings(backgroundActivity: BackgroundActivitySettings): ResolvedBackgroundActivitySettings;
/** @throws {never} */
export declare function normalizeBackgroundActivitySettings(backgroundActivity: BackgroundActivitySettings): BackgroundActivitySettings;
/** @throws {never} */
export declare function resolveServerBackgroundActivitySettings(settings: ServerSettings): ResolvedBackgroundActivitySettings;
/** @throws {never} */
export declare function normalizeServerBackgroundActivitySettings(settings: ServerSettings): BackgroundActivitySettings;
