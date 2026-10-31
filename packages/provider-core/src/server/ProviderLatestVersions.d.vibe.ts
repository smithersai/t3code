import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
declare const ProviderLatestVersions_base: Context.ServiceClass<ProviderLatestVersions, "@t3tools/provider-core/server/ProviderLatestVersions", {
    readonly cached: <E, R>(key: string, lookup: Effect.Effect<string | null, E, R>, options?: {
        readonly fresh?: boolean;
    }) => Effect.Effect<string | null, E, R>;
    readonly invalidate: (key: string) => Effect.Effect<void>;
}>;
export declare class ProviderLatestVersions extends ProviderLatestVersions_base {
}
export declare const make: (seed?: Iterable<readonly [key: string, version: string | null]> | undefined) => Effect.Effect<{
    readonly cached: <E, R>(key: string, lookup: Effect.Effect<string | null, E, R>, options?: {
        readonly fresh?: boolean;
    }) => Effect.Effect<string | null, E, R>;
    readonly invalidate: (key: string) => Effect.Effect<void>;
}, never, never>;
export declare const layer: Layer.Layer<ProviderLatestVersions, never, never>;
export {};
