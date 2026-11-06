import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
import * as RelayConfiguration from "../Config.vibe";
import * as FcmAssertionSigner from "./FcmAssertionSigner.vibe";
declare const FcmClientError_base: Schema.Class<FcmClientError, Schema.TaggedStruct<"FcmClientError", {
    readonly operation: Schema.Literals<readonly ["configuration", "authorize", "send"]>;
    readonly status: Schema.NullOr<Schema.Number>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class FcmClientError extends FcmClientError_base {
    get message(): string;
}
declare const FcmClient_base: Context.ServiceClass<FcmClient, "t3code-relay/agentActivity/FcmClient", {
    readonly send: (input: {
        readonly token: string;
        readonly packageName: string | null;
        readonly data: Readonly<Record<string, string>>;
        readonly alert: boolean;
    }) => Effect.Effect<{
        readonly unregistered: boolean;
    }, FcmClientError>;
}>;
export declare class FcmClient extends FcmClient_base {
}
export declare const make: Effect.Effect<{
    readonly send: (input: {
        readonly token: string;
        readonly packageName: string | null;
        readonly data: Readonly<Record<string, string>>;
        readonly alert: boolean;
    }) => Effect.Effect<{
        readonly unregistered: boolean;
    }, FcmClientError>;
}, never, FcmAssertionSigner.FcmAssertionSigner | HttpClient.HttpClient | RelayConfiguration.RelayConfiguration>;
export declare const layer: Layer.Layer<FcmClient, never, FcmAssertionSigner.FcmAssertionSigner | HttpClient.HttpClient | RelayConfiguration.RelayConfiguration>;
export {};
