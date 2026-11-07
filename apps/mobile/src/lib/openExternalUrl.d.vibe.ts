import * as Schema from "effect/Schema";
declare const ExternalUrlTarget: Schema.Literals<readonly ["file-preview", "markdown-link", "pull-request", "provider-auth", "html-render", "mcp-app"]>;
export type ExternalUrlTarget = typeof ExternalUrlTarget.Type;
declare const ExternalUrlOpenError_base: Schema.Class<ExternalUrlOpenError, Schema.TaggedStruct<"ExternalUrlOpenError", {
    readonly target: Schema.Literals<readonly ["file-preview", "markdown-link", "pull-request", "provider-auth", "html-render", "mcp-app"]>;
    readonly scheme: Schema.String;
    readonly host: Schema.optional<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ExternalUrlOpenError extends ExternalUrlOpenError_base {
    get message(): string;
}
/** @throws {never} */
export declare function tryOpenExternalUrl(url: string, target: ExternalUrlTarget): Promise<boolean>;
export {};
