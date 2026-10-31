import * as Schema from "effect/Schema";
export declare const FILESYSTEM_METADATA_BATCH_LIMIT = 64;
export declare const FilesystemGetMetadataInput: Schema.Struct<{
    readonly paths: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type FilesystemGetMetadataInput = typeof FilesystemGetMetadataInput.Type;
export declare const FilesystemEntryMetadata: Schema.Struct<{
    readonly kind: Schema.Literals<readonly ["file", "directory", "other"]>;
    readonly byteLength: Schema.optionalKey<Schema.Int>;
    readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type FilesystemEntryMetadata = typeof FilesystemEntryMetadata.Type;
export declare const FilesystemGetMetadataResult: Schema.Struct<{
    readonly entries: Schema.$Array<Schema.NullOr<Schema.Struct<{
        readonly kind: Schema.Literals<readonly ["file", "directory", "other"]>;
        readonly byteLength: Schema.optionalKey<Schema.Int>;
        readonly mimeType: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>>;
}>;
export type FilesystemGetMetadataResult = typeof FilesystemGetMetadataResult.Type;
export declare const FilesystemBrowseInput: Schema.Struct<{
    readonly partialPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type FilesystemBrowseInput = typeof FilesystemBrowseInput.Type;
export declare const FilesystemBrowseEntry: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly fullPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type FilesystemBrowseEntry = typeof FilesystemBrowseEntry.Type;
export declare const FilesystemBrowseResult: Schema.Struct<{
    readonly parentPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly entries: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fullPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export type FilesystemBrowseResult = typeof FilesystemBrowseResult.Type;
export declare const FilesystemBrowseFailure: Schema.Literals<readonly ["windows_path_unsupported", "current_project_required", "read_directory_failed"]>;
export type FilesystemBrowseFailure = typeof FilesystemBrowseFailure.Type;
declare const FilesystemBrowseError_base: Schema.Class<FilesystemBrowseError, Schema.TaggedStruct<"FilesystemBrowseError", {
    readonly partialPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly cwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly failure: Schema.optional<Schema.Literals<readonly ["windows_path_unsupported", "current_project_required", "read_directory_failed"]>>;
    readonly parentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly platform: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class FilesystemBrowseError extends FilesystemBrowseError_base {
    constructor(props: {
        readonly partialPath: string;
        readonly cwd?: string | undefined;
        readonly failure: FilesystemBrowseFailure;
        readonly parentPath?: string;
        readonly platform?: string;
        readonly cause?: unknown;
    });
}
export {};
