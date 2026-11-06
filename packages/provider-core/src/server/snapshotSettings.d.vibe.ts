import type { ServerSettingsError } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";
import * as ProviderHost from "./ProviderHost.vibe";
export interface ProviderSnapshotSettings<Settings> {
    readonly provider: Settings;
    readonly enableProviderUpdateChecks: boolean;
}
/** @throws {never} */
export declare function haveProviderSnapshotSettingsChanged<Settings>(previous: ProviderSnapshotSettings<Settings>, next: ProviderSnapshotSettings<Settings>): boolean;
export declare const makeProviderSnapshotSettingsSource: <Settings>(provider: Settings) => Effect.Effect<{
    readonly getSettings: Effect.Effect<ProviderSnapshotSettings<Settings>, ServerSettingsError>;
    readonly streamSettings: Stream.Stream<ProviderSnapshotSettings<Settings>>;
}, never, ProviderHost.ProviderHost>;
