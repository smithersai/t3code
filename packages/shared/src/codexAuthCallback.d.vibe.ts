import * as Schema from "effect/Schema";
export { receiveCodexAuthCallback } from "./codexAuthCallback.vibe.platform.js";
declare const CodexAuthCallbackError_base: Schema.Class<CodexAuthCallbackError, Schema.TaggedStruct<"CodexAuthCallbackError", {
    readonly detail: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class CodexAuthCallbackError extends CodexAuthCallbackError_base {
    get message(): string;
}
/** @throws {never} */
export declare function cancelCodexAuthCallback(authorizationUrl: string): void;
