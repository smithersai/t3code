import { SourceControlProviderKind } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { SourceControlProviderError, type SourceControlProviderDiscoveryItem } from "@t3tools/contracts";
import * as BuiltInDrivers from "./builtInDrivers.ts";
import * as SourceControlProvider from "@t3tools/source-control-core/server/SourceControlProvider";
import { type SourceControlProviderDiscoverySpec } from "@t3tools/source-control-core/server/discovery";
import * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
import * as ServerConfig from "../config.ts";
import * as ServerSettings from "../serverSettings.ts";
import * as VcsDriverRegistry from "../vcs/VcsDriverRegistry.ts";
export interface SourceControlProviderRegistration {
    readonly kind: SourceControlProviderKind;
    readonly provider: SourceControlProvider.SourceControlProvider["Service"];
    readonly discovery: SourceControlProviderDiscoverySpec;
}
export interface SourceControlProviderHandle {
    readonly provider: SourceControlProvider.SourceControlProvider["Service"];
    readonly context: SourceControlProvider.SourceControlProviderContext | null;
}
declare const SourceControlProviderRegistry_base: Context.ServiceClass<SourceControlProviderRegistry, "t3/sourceControl/SourceControlProviderRegistry", {
    readonly resolveLink: SourceControlProvider.ResolveSourceControlLink;
    readonly get: (kind: SourceControlProviderKind) => Effect.Effect<SourceControlProvider.SourceControlProvider["Service"], SourceControlProviderError>;
    readonly resolveHandle: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
    }) => Effect.Effect<SourceControlProviderHandle, SourceControlProviderError>;
    readonly resolve: (input: {
        readonly cwd: string;
    }) => Effect.Effect<SourceControlProvider.SourceControlProvider["Service"], SourceControlProviderError>;
    readonly discover: Effect.Effect<readonly SourceControlProviderDiscoveryItem[]>;
}>;
export declare class SourceControlProviderRegistry extends SourceControlProviderRegistry_base {
}
/** @public */
export declare const makeWithProviders: (registrations: readonly SourceControlProviderRegistration[]) => Effect.Effect<{
    readonly resolveLink: SourceControlProvider.ResolveSourceControlLink;
    readonly get: (kind: SourceControlProviderKind) => Effect.Effect<SourceControlProvider.SourceControlProvider["Service"], SourceControlProviderError>;
    readonly resolveHandle: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
    }) => Effect.Effect<SourceControlProviderHandle, SourceControlProviderError>;
    readonly resolve: (input: {
        readonly cwd: string;
    }) => Effect.Effect<SourceControlProvider.SourceControlProvider["Service"], SourceControlProviderError>;
    readonly discover: Effect.Effect<ReadonlyArray<SourceControlProviderDiscoveryItem>>;
}, never, import("effect/Scope").Scope | ServerConfig.ServerConfig | ServerSettings.ServerSettingsService | SourceControlHost.SourceControlHost | VcsDriverRegistry.VcsDriverRegistry>;
export declare const layer: Layer.Layer<SourceControlProviderRegistry, never, ServerConfig.ServerConfig | ServerSettings.ServerSettingsService | BuiltInDrivers.SourceControlDrivers | SourceControlHost.SourceControlHost | VcsDriverRegistry.VcsDriverRegistry>;
export {};
