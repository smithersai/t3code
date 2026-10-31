import { ProviderDriverKind, type ProviderInstanceEnvironment, ProviderInstanceId } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import type * as Effect from "effect/Effect";
import type * as Scope from "effect/Scope";
import type * as ProviderAdapter from "@t3tools/provider-core/server/ProviderAdapter";
declare const ProviderAdapterDriverCreateError_base: Schema.Class<ProviderAdapterDriverCreateError, Schema.TaggedStruct<"ProviderAdapterDriverCreateError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly detail: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterDriverCreateError extends ProviderAdapterDriverCreateError_base {
    get message(): string;
}
export interface ProviderAdapterDriverCreateInput<Config> {
    readonly instanceId: ProviderInstanceId;
    readonly displayName: string | undefined;
    readonly accentColor?: string | undefined;
    readonly environment: ProviderInstanceEnvironment;
    readonly enabled: boolean;
    readonly config: Config;
}
export interface ProviderAdapterDriver<Config, R = never> {
    readonly driverKind: ProviderDriverKind;
    readonly configSchema: Schema.Codec<Config, unknown>;
    readonly defaultConfig: () => Config;
    readonly create: (input: ProviderAdapterDriverCreateInput<Config>) => Effect.Effect<ProviderAdapter.ProviderAdapterV2["Service"], ProviderAdapterDriverCreateError, R | Scope.Scope>;
}
export type AnyProviderAdapterDriver<R = never> = ProviderAdapterDriver<any, R>;
export {};
