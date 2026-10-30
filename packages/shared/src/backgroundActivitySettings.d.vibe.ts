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
export declare function getBackgroundActivityPresetSettings(profile: BackgroundActivityProfile): ResolvedBackgroundActivitySettings;
export declare function getBackgroundActivityBaseProfile(backgroundActivity: BackgroundActivitySettings): BackgroundActivityProfile;
export declare function resolveBackgroundActivitySettings(backgroundActivity: BackgroundActivitySettings): ResolvedBackgroundActivitySettings;
export declare function normalizeBackgroundActivitySettings(backgroundActivity: BackgroundActivitySettings): BackgroundActivitySettings;
export declare function resolveServerBackgroundActivitySettings(settings: ServerSettings): ResolvedBackgroundActivitySettings;
export declare function normalizeServerBackgroundActivitySettings(settings: ServerSettings): BackgroundActivitySettings;
