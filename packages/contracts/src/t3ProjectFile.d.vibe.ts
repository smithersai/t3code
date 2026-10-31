import * as Schema from "effect/Schema";
import type { ServerSettings } from "./settings.vibe";
export declare const T3_PROJECT_FILE_NAME = "t3.json";
export declare const T3_PROJECT_FILE_SCHEMA_URL = "https://t3.codes/schema/t3.json";
export declare const T3ProjectFileScript: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly icon: Schema.optionalKey<Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>>;
    readonly runOnWorktreeCreate: Schema.optionalKey<Schema.Boolean>;
    readonly runOnSettle: Schema.optionalKey<Schema.Boolean>;
    readonly async: Schema.optionalKey<Schema.Boolean>;
    readonly previewUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly autoOpenPreview: Schema.optionalKey<Schema.Boolean>;
}>;
export type T3ProjectFileScript = typeof T3ProjectFileScript.Type;
export declare const T3ProjectFile: Schema.Struct<{
    readonly $schema: Schema.optionalKey<Schema.String>;
    readonly iconPath: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly defaultThreadEnvMode: Schema.optionalKey<Schema.Literals<readonly ["local", "worktree"]>>;
    readonly worktreeSubmodules: Schema.optionalKey<Schema.Literals<readonly ["recursive", "top-level", "none"]>>;
    readonly scripts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly icon: Schema.optionalKey<Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>>;
        readonly runOnWorktreeCreate: Schema.optionalKey<Schema.Boolean>;
        readonly runOnSettle: Schema.optionalKey<Schema.Boolean>;
        readonly async: Schema.optionalKey<Schema.Boolean>;
        readonly previewUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly autoOpenPreview: Schema.optionalKey<Schema.Boolean>;
    }>>>;
}>;
export type T3ProjectFile = typeof T3ProjectFile.Type;
/** Keys must be nullable in ServerSettings so both environment and project overrides can inherit t3.json. */
export declare const PROJECT_FILE_BACKED_SETTINGS: {
    readonly defaultThreadEnvMode: {
        readonly field: "defaultThreadEnvMode";
        readonly builtIn: "local";
    };
    readonly worktreeSubmodules: {
        readonly field: "worktreeSubmodules";
        readonly builtIn: "recursive";
    };
};
export type ProjectFileBackedSettingKey = keyof typeof PROJECT_FILE_BACKED_SETTINGS;
export type ResolvedServerSettings = Omit<ServerSettings, ProjectFileBackedSettingKey> & {
    readonly [K in ProjectFileBackedSettingKey]: Exclude<ServerSettings[K], null>;
};
