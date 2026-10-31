import * as Schema from "effect/Schema";
export declare const PiSettings: Schema.Struct<{
    readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly binaryPath: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>, never>;
    readonly launchArgs: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly customModels: Schema.withDecodingDefault<Schema.$Array<Schema.Union<readonly [Schema.String, Schema.Struct<{
        readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly capabilities: Schema.optional<Schema.Struct<{
            readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"select">;
                readonly options: Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly isDefault: Schema.optional<Schema.Boolean>;
                }>>;
                readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>, Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"boolean">;
                readonly currentValue: Schema.optional<Schema.Boolean>;
            }>]>>>;
        }>>;
    }>]>>, never>;
}>;
export type PiSettings = typeof PiSettings.Type;
