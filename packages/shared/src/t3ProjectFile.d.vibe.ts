import * as Schema from "effect/Schema";
import { T3ProjectFile } from "@t3tools/contracts";
export declare const T3ProjectFileFromJson: Schema.decodeTo<Schema.Struct<{
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
}>, Schema.String, never, never>;
export declare function parseT3ProjectFile(contents: string): T3ProjectFile | null;
export declare function buildT3ProjectFileJsonSchema(): Record<string, unknown>;
