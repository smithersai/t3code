import { type AntigravitySettings, UsageReadError } from "@t3tools/contracts";
import * as ProviderHost from "@t3tools/provider-core/server/ProviderHost";
import type { ProviderUsageInstance, ProviderUsageReader, ProviderUsageScan } from "@t3tools/provider-core/server/usage";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
declare const AntigravityUsage_base: Context.ServiceClass<AntigravityUsage, "t3/provider/Drivers/AntigravityUsage", {
    readonly scan: (input: {
        readonly instances: readonly ProviderUsageInstance<AntigravitySettings>[];
        readonly windowStartMs: number;
    }) => Effect.Effect<readonly ProviderUsageScan[], UsageReadError>;
}>;
export declare class AntigravityUsage extends AntigravityUsage_base {
}
export declare const layer: Layer.Layer<AntigravityUsage, never, Crypto.Crypto | FileSystem.FileSystem | Path.Path | ProviderHost.ProviderHost>;
export declare const antigravityUsageReader: ProviderUsageReader<AntigravitySettings, AntigravityUsage>;
export {};
