import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as WebCrypto from "../WebCrypto.vibe";
declare const FcmAssertionSigningError_base: Schema.Class<FcmAssertionSigningError, Schema.TaggedStruct<"FcmAssertionSigningError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class FcmAssertionSigningError extends FcmAssertionSigningError_base {
    get message(): string;
}
declare const FcmAssertionSigner_base: Context.ServiceClass<FcmAssertionSigner, "t3code-relay/agentActivity/FcmAssertionSigner", {
    readonly sign: (input: {
        readonly privateKey: string;
        readonly clientEmail: string;
        readonly issuedAt: number;
    }) => Effect.Effect<string, FcmAssertionSigningError>;
}>;
export declare class FcmAssertionSigner extends FcmAssertionSigner_base {
}
export declare const make: Effect.Effect<{
    readonly sign: (input: {
        readonly privateKey: string;
        readonly clientEmail: string;
        readonly issuedAt: number;
    }) => Effect.Effect<string, FcmAssertionSigningError>;
}, never, WebCrypto.WebCrypto>;
export declare const layer: Layer.Layer<FcmAssertionSigner, never, WebCrypto.WebCrypto>;
export {};
