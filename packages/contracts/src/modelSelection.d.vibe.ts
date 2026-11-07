import * as Schema from "effect/Schema";
export declare const ModelSelection: Schema.decodeTo<Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
    }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
    }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
}>, Schema.Struct<{
    readonly provider: Schema.optional<Schema.Unknown>;
    readonly instanceId: Schema.optional<Schema.Unknown>;
    readonly model: Schema.Unknown;
    readonly options: Schema.optional<Schema.Unknown>;
}>, never, never>;
export type ModelSelection = typeof ModelSelection.Type;
