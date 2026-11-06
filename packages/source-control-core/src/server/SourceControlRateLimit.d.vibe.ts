import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import { type SourceControlProviderKind } from "@t3tools/contracts";
export declare const CredentialScope: Context.Reference<string>;
/** Interactive requests may use reserved quota and bypass pauses caused by background reads. */
export declare const Interactive: Context.Reference<boolean>;
interface RateLimitKey {
    readonly provider: SourceControlProviderKind;
    readonly host: string;
}
interface RateLimitLease extends RateLimitKey {
    readonly lease: number;
}
declare const SourceControlRateLimitPausedError_base: Schema.Class<SourceControlRateLimitPausedError, Schema.TaggedStruct<"SourceControlRateLimitPausedError", {
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly host: Schema.String;
    readonly retryAt: Schema.Number;
}>, import("effect/Cause").YieldableError>;
export declare class SourceControlRateLimitPausedError extends SourceControlRateLimitPausedError_base {
    get detail(): string;
    get message(): string;
}
declare const SourceControlRateLimit_base: Context.ServiceClass<SourceControlRateLimit, "@t3tools/source-control-core/server/SourceControlRateLimit", {
    readonly check: (key: RateLimitKey, options?: {
        readonly allowPaused: boolean;
    }) => Effect.Effect<number, SourceControlRateLimitPausedError>;
    readonly recordRateLimit: (input: RateLimitLease & {
        readonly retryAt?: number | undefined;
    }) => Effect.Effect<void>;
    readonly recordSuccess: (input: RateLimitLease) => Effect.Effect<void>;
}>;
export declare class SourceControlRateLimit extends SourceControlRateLimit_base {
}
/** @throws {never} */
export declare function retryAtFromHeader(value: string | undefined, now: number): number | undefined;
/** @public */
export declare const make: Effect.Effect<{
    readonly check: (key: RateLimitKey, options?: {
        readonly allowPaused: boolean;
    }) => Effect.Effect<number, SourceControlRateLimitPausedError>;
    readonly recordRateLimit: (input: RateLimitLease & {
        readonly retryAt?: number | undefined;
    }) => Effect.Effect<void>;
    readonly recordSuccess: (input: RateLimitLease) => Effect.Effect<void>;
}, never, never>;
export declare const layer: Layer.Layer<SourceControlRateLimit, never, never>;
export {};
