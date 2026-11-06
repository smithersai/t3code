import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
export declare const ClaudeCodeProfileSchema: Schema.Struct<{
    readonly effortMap: Schema.optional<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>>;
    readonly modelSuffixes: Schema.optional<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>>>;
    readonly contextWindowTokens: Schema.optional<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Number>>;
    readonly fixedContextWindowTokens: Schema.optional<Schema.Number>;
}>;
export declare const ClaudeProfileAdapterSchema: Schema.Struct<{
    readonly claudeCode: Schema.optional<Schema.Struct<{
        readonly effortMap: Schema.optional<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>>;
        readonly modelSuffixes: Schema.optional<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>>>;
        readonly contextWindowTokens: Schema.optional<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Number>>;
        readonly fixedContextWindowTokens: Schema.optional<Schema.Number>;
    }>>;
}>;
export declare const ClaudeModelAdapterSchema: Schema.Struct<{
    readonly claudeCode: Schema.optional<Schema.Struct<{
        readonly minVersion: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly maxVersionExclusive: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
}>;
export type ClaudeCodeProfile = typeof ClaudeCodeProfileSchema.Type;
export type ClaudeCodeCompatibility = NonNullable<typeof ClaudeModelAdapterSchema.Type.claudeCode>;
export declare const decodeClaudeProfileAdapter: (input: unknown, options?: import("effect/SchemaAST").ParseOptions) => Option.Option<{
    readonly claudeCode?: {
        readonly effortMap?: {
            readonly [x: string]: string | null;
        } | undefined;
        readonly modelSuffixes?: {
            readonly [x: string]: {
                readonly [x: string]: string;
            };
        } | undefined;
        readonly contextWindowTokens?: {
            readonly [x: string]: number;
        } | undefined;
        readonly fixedContextWindowTokens?: number | undefined;
    } | undefined;
}>;
export declare const decodeClaudeModelAdapter: (input: unknown, options?: import("effect/SchemaAST").ParseOptions) => Option.Option<{
    readonly claudeCode?: {
        readonly minVersion?: string | undefined;
        readonly maxVersionExclusive?: string | undefined;
    } | undefined;
}>;
interface ClaudeManifestAdapterInput {
    readonly providers?: Readonly<Record<string, {
        readonly profiles: Readonly<Record<string, {
            readonly adapter?: unknown;
        }>>;
        readonly models: ReadonlyArray<{
            readonly adapter?: unknown;
        }>;
    } | undefined>> | undefined;
}
/** @throws {never} */
export declare function hasValidClaudeManifestAdapters(manifest: ClaudeManifestAdapterInput): boolean;
export {};
