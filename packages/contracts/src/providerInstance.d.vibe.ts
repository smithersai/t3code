import * as Schema from "effect/Schema";
export declare const ProviderDriverKind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
export type ProviderDriverKind = typeof ProviderDriverKind.Type;
export declare const isProviderDriverKind: (value: unknown) => value is ProviderDriverKind;
export declare const ProviderInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
export type ProviderInstanceId = typeof ProviderInstanceId.Type;
export declare const ProviderInstanceRef: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
}>;
export type ProviderInstanceRef = typeof ProviderInstanceRef.Type;
export declare const ProviderInstanceEnvironmentVariableName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type ProviderInstanceEnvironmentVariableName = typeof ProviderInstanceEnvironmentVariableName.Type;
export declare const ProviderInstanceEnvironmentVariable: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly value: Schema.withDecodingDefault<Schema.String, never>;
    readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
}>;
export type ProviderInstanceEnvironmentVariable = typeof ProviderInstanceEnvironmentVariable.Type;
export declare const ProviderInstanceEnvironment: Schema.$Array<Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly value: Schema.withDecodingDefault<Schema.String, never>;
    readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
}>>;
export type ProviderInstanceEnvironment = typeof ProviderInstanceEnvironment.Type;
/** Drivers decode their own config; unknown-driver envelopes round-trip verbatim across versions. */
export declare const ProviderInstanceConfig: Schema.Struct<{
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly value: Schema.withDecodingDefault<Schema.String, never>;
        readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
    }>>>;
    readonly enabled: Schema.optionalKey<Schema.Boolean>;
    readonly config: Schema.optionalKey<Schema.Unknown>;
}>;
export type ProviderInstanceConfig = typeof ProviderInstanceConfig.Type;
export declare const ProviderInstanceMutation: Schema.Union<readonly [Schema.Struct<{
    readonly operation: Schema.Literal<"create">;
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly instance: Schema.Struct<{
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.withDecodingDefault<Schema.String, never>;
            readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
        }>>>;
        readonly enabled: Schema.optionalKey<Schema.Boolean>;
        readonly config: Schema.optionalKey<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly operation: Schema.Literal<"upsert">;
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly instance: Schema.Struct<{
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.withDecodingDefault<Schema.String, never>;
            readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
        }>>>;
        readonly enabled: Schema.optionalKey<Schema.Boolean>;
        readonly config: Schema.optionalKey<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly operation: Schema.Literal<"remove">;
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
}>]>;
export type ProviderInstanceMutation = typeof ProviderInstanceMutation.Type;
export declare const ProviderInstanceConfigMap: Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly value: Schema.withDecodingDefault<Schema.String, never>;
        readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
    }>>>;
    readonly enabled: Schema.optionalKey<Schema.Boolean>;
    readonly config: Schema.optionalKey<Schema.Unknown>;
}>>;
export type ProviderInstanceConfigMap = typeof ProviderInstanceConfigMap.Type;
/** Driver-kind ids keep stored selections routable without migration. */
export declare const defaultInstanceIdForDriver: (driver: ProviderDriverKind) => ProviderInstanceId;
