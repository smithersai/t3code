import { type ProviderDriverKind, type ServerProvider, type ServerProviderCompatibilityAdvisory } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
export declare const ProviderCompatibilityPolicy: Schema.Struct<{
    readonly driver: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly t3CodeRange: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly recommendedRange: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly recommendedVersion: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly ranges: Schema.$Array<Schema.Struct<{
        readonly range: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly status: Schema.Literals<readonly ["unknown", "supported", "graceful", "unsupported", "broken"]>;
    }>>;
}>;
export type ProviderCompatibilityPolicy = typeof ProviderCompatibilityPolicy.Type;
export declare function resolveProviderCompatibility(policies: ReadonlyArray<ProviderCompatibilityPolicy> | undefined, driver: ProviderDriverKind, version: string | null, t3CodeVersion?: string): ServerProviderCompatibilityAdvisory | undefined;
export declare function applyProviderCompatibility(snapshot: ServerProvider, policies: ReadonlyArray<ProviderCompatibilityPolicy> | undefined, fallback: ReadonlyArray<ProviderCompatibilityPolicy> | undefined): ServerProvider;
