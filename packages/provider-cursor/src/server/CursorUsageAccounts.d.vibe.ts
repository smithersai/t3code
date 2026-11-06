import * as ProviderHost from "@t3tools/provider-core/server/ProviderHost";
import type { ProviderUsageScan } from "@t3tools/provider-core/server/usage";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as CursorAccountReader from "./CursorAccountReader.vibe";
declare const CursorUsageAccounts_base: Context.ServiceClass<CursorUsageAccounts, "@t3tools/provider-cursor/server/CursorUsageAccounts", {
    readonly scan: (input: {
        readonly keychainUsageEnabled: boolean;
        readonly windowStartMs: number;
        readonly retentionCutoffMs: number;
        readonly awaitRefresh: boolean;
    }) => Effect.Effect<readonly ProviderUsageScan[]>;
    readonly awaitPersisted: Effect.Effect<void>;
}>;
export declare class CursorUsageAccounts extends CursorUsageAccounts_base {
}
export declare const layer: Layer.Layer<CursorUsageAccounts, never, CursorAccountReader.CursorAccountReader | FileSystem.FileSystem | Path.Path | ProviderHost.ProviderHost>;
export {};
