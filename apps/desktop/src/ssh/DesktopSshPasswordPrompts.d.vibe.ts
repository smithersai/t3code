import { DesktopSshPasswordPromptResolutionInputSchema } from "@t3tools/contracts";
import type { SshPasswordRequest } from "@t3tools/ssh/auth";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as ElectronWindow from "../electron/ElectronWindow.ts";
type DesktopSshPasswordPromptResolutionInput = typeof DesktopSshPasswordPromptResolutionInputSchema.Type;
declare const DesktopSshPromptRequestIdGenerationError_base: Schema.Class<DesktopSshPromptRequestIdGenerationError, Schema.TaggedStruct<"DesktopSshPromptRequestIdGenerationError", {
    readonly destination: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSshPromptRequestIdGenerationError extends DesktopSshPromptRequestIdGenerationError_base {
    get message(): string;
}
declare const DesktopSshPromptWindowUnavailableError_base: Schema.Class<DesktopSshPromptWindowUnavailableError, Schema.TaggedStruct<"DesktopSshPromptWindowUnavailableError", {
    readonly destination: Schema.String;
    readonly requestId: Schema.NullOr<Schema.String>;
    readonly stage: Schema.Literals<readonly ["before-request", "before-presentation", "after-send", "after-restore"]>;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSshPromptWindowUnavailableError extends DesktopSshPromptWindowUnavailableError_base {
    get message(): string;
}
declare const DesktopSshPromptPresentationError_base: Schema.Class<DesktopSshPromptPresentationError, Schema.TaggedStruct<"DesktopSshPromptPresentationError", {
    readonly requestId: Schema.NullOr<Schema.String>;
    readonly destination: Schema.String;
    readonly operation: Schema.Literals<readonly ["check-window-before-request", "check-window-before-presentation", "register-window-close-listener", "send-prompt-request", "check-window-after-send", "check-window-minimized", "restore-window", "check-window-after-restore", "focus-window", "remove-window-close-listener"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSshPromptPresentationError extends DesktopSshPromptPresentationError_base {
    get message(): string;
}
declare const DesktopSshPromptTimedOutError_base: Schema.Class<DesktopSshPromptTimedOutError, Schema.TaggedStruct<"DesktopSshPromptTimedOutError", {
    readonly requestId: Schema.String;
    readonly destination: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSshPromptTimedOutError extends DesktopSshPromptTimedOutError_base {
    get message(): string;
}
declare const DesktopSshPromptCancelledError_base: Schema.Class<DesktopSshPromptCancelledError, Schema.TaggedStruct<"DesktopSshPromptCancelledError", {
    readonly requestId: Schema.String;
    readonly destination: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSshPromptCancelledError extends DesktopSshPromptCancelledError_base {
    get message(): string;
}
declare const DesktopSshPromptWindowClosedError_base: Schema.Class<DesktopSshPromptWindowClosedError, Schema.TaggedStruct<"DesktopSshPromptWindowClosedError", {
    readonly requestId: Schema.String;
    readonly destination: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSshPromptWindowClosedError extends DesktopSshPromptWindowClosedError_base {
    get message(): string;
}
declare const DesktopSshPromptServiceStoppedError_base: Schema.Class<DesktopSshPromptServiceStoppedError, Schema.TaggedStruct<"DesktopSshPromptServiceStoppedError", {
    readonly requestId: Schema.String;
    readonly destination: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSshPromptServiceStoppedError extends DesktopSshPromptServiceStoppedError_base {
    get message(): string;
}
declare const DesktopSshPromptInvalidRequestIdError_base: Schema.Class<DesktopSshPromptInvalidRequestIdError, Schema.TaggedStruct<"DesktopSshPromptInvalidRequestIdError", {
    readonly requestId: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSshPromptInvalidRequestIdError extends DesktopSshPromptInvalidRequestIdError_base {
    get message(): string;
}
declare const DesktopSshPromptExpiredError_base: Schema.Class<DesktopSshPromptExpiredError, Schema.TaggedStruct<"DesktopSshPromptExpiredError", {
    readonly requestId: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopSshPromptExpiredError extends DesktopSshPromptExpiredError_base {
    get message(): string;
}
export type DesktopSshPasswordPromptRequestError = DesktopSshPromptRequestIdGenerationError | DesktopSshPromptWindowUnavailableError | DesktopSshPromptPresentationError | DesktopSshPromptTimedOutError | DesktopSshPromptCancelledError | DesktopSshPromptWindowClosedError | DesktopSshPromptServiceStoppedError;
export type DesktopSshPasswordPromptResolveError = DesktopSshPromptInvalidRequestIdError | DesktopSshPromptExpiredError;
export declare const DesktopSshPasswordPromptCancellation: Schema.Union<readonly [typeof DesktopSshPromptCancelledError, typeof DesktopSshPromptWindowClosedError, typeof DesktopSshPromptServiceStoppedError, typeof DesktopSshPromptTimedOutError]>;
export type DesktopSshPasswordPromptCancellation = typeof DesktopSshPasswordPromptCancellation.Type;
export declare const isDesktopSshPasswordPromptCancellation: <I>(input: I) => input is I & (DesktopSshPromptCancelledError | DesktopSshPromptServiceStoppedError | DesktopSshPromptTimedOutError | DesktopSshPromptWindowClosedError);
declare const DesktopSshPasswordPrompts_base: Context.ServiceClass<DesktopSshPasswordPrompts, "@t3tools/desktop/ssh/DesktopSshPasswordPrompts", {
    readonly request: (request: SshPasswordRequest) => Effect.Effect<string, DesktopSshPasswordPromptRequestError>;
    readonly resolve: (input: DesktopSshPasswordPromptResolutionInput) => Effect.Effect<void, DesktopSshPasswordPromptResolveError>;
}>;
export declare class DesktopSshPasswordPrompts extends DesktopSshPasswordPrompts_base {
}
export interface DesktopSshPasswordPromptsOptions {
    readonly passwordPromptTimeoutMs?: number;
}
/** @public */
export declare const make: (options?: DesktopSshPasswordPromptsOptions | undefined) => Effect.Effect<{
    readonly request: (request: SshPasswordRequest) => Effect.Effect<string, DesktopSshPasswordPromptRequestError>;
    readonly resolve: (input: DesktopSshPasswordPromptResolutionInput) => Effect.Effect<void, DesktopSshPasswordPromptResolveError>;
}, never, Crypto.Crypto | ElectronWindow.ElectronWindow | import("effect/Scope").Scope>;
export declare const layer: (options?: DesktopSshPasswordPromptsOptions) => Layer.Layer<DesktopSshPasswordPrompts, never, Crypto.Crypto | ElectronWindow.ElectronWindow>;
export {};
