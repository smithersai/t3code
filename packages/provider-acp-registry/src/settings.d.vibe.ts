import * as Schema from "effect/Schema";
export declare const AcpRegistryDistributionPreference: Schema.Literals<readonly ["auto", "binary", "npx", "uvx"]>;
export type AcpRegistryDistributionPreference = typeof AcpRegistryDistributionPreference.Type;
export declare const AcpRegistrySettings: Schema.Struct<{
    readonly source: Schema.withDecodingDefault<Schema.Literals<readonly ["registry", "local"]>, never>;
    readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly agentId: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly commandPath: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly commandArgs: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
    readonly authMethodId: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly distribution: Schema.withDecodingDefault<Schema.Literals<readonly ["auto", "binary", "npx", "uvx"]>, never>;
    readonly customModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
}>;
export type AcpRegistrySettings = typeof AcpRegistrySettings.Type;
