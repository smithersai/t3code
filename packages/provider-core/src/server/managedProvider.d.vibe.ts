import { type ServerProvider, ServerSettingsError } from "@t3tools/contracts";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Scope from "effect/Scope";
import * as Stream from "effect/Stream";
import * as ProviderHost from "./ProviderHost.vibe";
import type { ManagedServerProvider } from "./snapshot.vibe";
export declare const makeManagedServerProvider: <Settings>(input: {
    readonly resolveMaintenance: ManagedServerProvider["resolveMaintenance"];
    readonly getSettings: Effect.Effect<Settings, ServerSettingsError>;
    readonly streamSettings: Stream.Stream<Settings>;
    /** @throws {never} */
    readonly haveSettingsChanged: (previous: Settings, next: Settings) => boolean;
    readonly initialSnapshot: (settings: Settings) => Effect.Effect<ServerProvider>;
    readonly checkProvider: Effect.Effect<ServerProvider, ServerSettingsError>;
    readonly enrichSnapshot?: (input: {
        readonly settings: Settings;
        readonly snapshot: ServerProvider;
        readonly getSnapshot: Effect.Effect<ServerProvider>;
        readonly publishSnapshot: (snapshot: ServerProvider) => Effect.Effect<void>;
    }) => Effect.Effect<void>;
    readonly refreshInterval?: Duration.Input;
    readonly refreshOnInterval?: boolean | (
    /** @throws {never} */
    (snapshot: ServerProvider) => boolean);
    /** @throws {never} */
    readonly checkProviderOnSettingsChange?: (previous: Settings, next: Settings) => boolean;
}) => Effect.Effect<ManagedServerProvider, ServerSettingsError, Scope.Scope | ProviderHost.ProviderHost>;
