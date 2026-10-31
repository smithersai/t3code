import * as Schema from "effect/Schema";
export declare const BrowserImportSourceId: Schema.Literals<readonly ["chrome", "edge", "brave", "vivaldi", "opera", "arc", "helium", "firefox", "zen", "safari"]>;
export type BrowserImportSourceId = typeof BrowserImportSourceId.Type;
export declare const BrowserImportUnavailableReason: Schema.Literals<readonly ["notInstalled", "needsKeychainApproval", "keychainItemMissing", "needsFullDiskAccess", "browserRunning", "unsupportedPlatform"]>;
export type BrowserImportUnavailableReason = typeof BrowserImportUnavailableReason.Type;
export declare const BrowserImportFailureReason: Schema.Literals<readonly ["notInstalled", "needsKeychainApproval", "keychainItemMissing", "needsFullDiskAccess", "browserRunning", "unsupportedPlatform", "keychainUnavailable", "unknownSource", "unknownSourceProfile", "sessionUnavailable", "profileNotSaved", "profileLimitReached", "readFailed"]>;
export type BrowserImportFailureReason = typeof BrowserImportFailureReason.Type;
export declare const BrowserImportSourceProfile: Schema.Struct<{
    readonly directory: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cookieCount: Schema.optional<Schema.Int>;
}>;
export type BrowserImportSourceProfile = typeof BrowserImportSourceProfile.Type;
export declare const BrowserImportSource: Schema.Struct<{
    readonly id: Schema.Literals<readonly ["chrome", "edge", "brave", "vivaldi", "opera", "arc", "helium", "firefox", "zen", "safari"]>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly profiles: Schema.$Array<Schema.Struct<{
        readonly directory: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly cookieCount: Schema.optional<Schema.Int>;
    }>>;
    readonly unavailable: Schema.optional<Schema.Literals<readonly ["notInstalled", "needsKeychainApproval", "keychainItemMissing", "needsFullDiskAccess", "browserRunning", "unsupportedPlatform"]>>;
}>;
export type BrowserImportSource = typeof BrowserImportSource.Type;
export declare const BrowserImportInput: Schema.Struct<{
    readonly sourceId: Schema.Literals<readonly ["chrome", "edge", "brave", "vivaldi", "opera", "arc", "helium", "firefox", "zen", "safari"]>;
    readonly sourceProfileDirectory: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly targetProfileId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type BrowserImportInput = typeof BrowserImportInput.Type;
export declare const DesktopPreviewImportCookiesInputSchema: Schema.Struct<{
    readonly environmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sourceId: Schema.Literals<readonly ["chrome", "edge", "brave", "vivaldi", "opera", "arc", "helium", "firefox", "zen", "safari"]>;
    readonly sourceProfileDirectory: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly targetProfileId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export declare const BrowserImportResult: Schema.Struct<{
    readonly imported: Schema.Int;
    readonly skipped: Schema.Int;
    readonly skippedDomains: Schema.$Array<Schema.String>;
}>;
export type BrowserImportResult = typeof BrowserImportResult.Type;
export declare const BROWSER_IMPORT_FAILURE_COPY: Readonly<Record<BrowserImportFailureReason, string>>;
