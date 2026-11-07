import type { RelayAgentActivityAggregateState } from "@t3tools/contracts/relay";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
import { type ApnsCredentials } from "../Config.vibe";
import type { ApnsLiveActivityAlert, ApnsNotificationPayload } from "./apnsDeliveryJobs.ts";
import type { ApnsJwtEncodingError, ApnsJwtSigningError } from "./apnsJwt.ts";
import * as ApnsProviderTokens from "./ApnsProviderTokens.ts";
export { ApnsJwtEncodingError, ApnsJwtSigningError } from "./apnsJwt.ts";
declare const ApnsLiveActivityEventSchema: Schema.Literals<readonly ["start", "update", "end"]>;
export type ApnsLiveActivityEvent = typeof ApnsLiveActivityEventSchema.Type;
interface ApnsLiveActivityRequest {
    readonly token: string;
    readonly event: ApnsLiveActivityEvent;
    readonly priority: "5" | "10";
    readonly payload: unknown;
}
interface ApnsPushNotificationRequest {
    readonly token: string;
    readonly priority: "10";
    readonly payload: unknown;
}
export interface ApnsDeliveryResult {
    readonly ok: boolean;
    readonly status: number;
    readonly reason?: string;
    readonly apnsId: string | null;
}
declare const ApnsHttpRequestError_base: Schema.Class<ApnsHttpRequestError, Schema.TaggedStruct<"ApnsHttpRequestError", {
    readonly requestKind: Schema.Literals<readonly ["live-activity", "push-notification"]>;
    readonly event: Schema.NullOr<Schema.Literals<readonly ["start", "update", "end"]>>;
    readonly environment: Schema.Literals<readonly ["sandbox", "production"]>;
    readonly bundleId: Schema.String;
    readonly tokenSuffix: Schema.String;
    readonly stage: Schema.Literals<readonly ["send", "read-response"]>;
    readonly status: Schema.NullOr<Schema.Number>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ApnsHttpRequestError extends ApnsHttpRequestError_base {
    get message(): string;
}
export type ApnsError = ApnsJwtEncodingError | ApnsJwtSigningError | ApnsHttpRequestError;
interface LiveActivityRequestBase {
    readonly token: string;
    readonly nowEpochSeconds: number;
    readonly nowIso: string;
}
type MakeLiveActivityRequestInput = (LiveActivityRequestBase & {
    readonly event: "end";
    readonly state: RelayAgentActivityAggregateState | null;
    readonly alert?: ApnsLiveActivityAlert | null;
}) | (LiveActivityRequestBase & {
    readonly event: "start" | "update";
    readonly state: RelayAgentActivityAggregateState;
    readonly alert?: ApnsLiveActivityAlert | null;
});
/** @throws {never} */
declare function makeLiveActivityRequest(input: MakeLiveActivityRequestInput): ApnsLiveActivityRequest;
/** @throws {never} */
declare function makePushNotificationRequest(input: {
    readonly token: string;
    readonly notification: ApnsNotificationPayload;
}): ApnsPushNotificationRequest;
declare const ApnsClient_base: Context.ServiceClass<ApnsClient, "t3code-relay/agentActivity/ApnsClient", {
    readonly makeLiveActivityRequest: typeof makeLiveActivityRequest;
    readonly makePushNotificationRequest: typeof makePushNotificationRequest;
    readonly sendLiveActivityRequest: (input: {
        readonly credentials: ApnsCredentials;
        readonly request: ApnsLiveActivityRequest;
        readonly issuedAtUnixSeconds: number;
    }) => Effect.Effect<ApnsDeliveryResult, ApnsError>;
    readonly sendPushNotificationRequest: (input: {
        readonly credentials: ApnsCredentials;
        readonly request: ApnsPushNotificationRequest;
        readonly issuedAtUnixSeconds: number;
    }) => Effect.Effect<ApnsDeliveryResult, ApnsError>;
}>;
export declare class ApnsClient extends ApnsClient_base {
}
export declare const make: Effect.Effect<{
    readonly makeLiveActivityRequest: typeof makeLiveActivityRequest;
    readonly makePushNotificationRequest: typeof makePushNotificationRequest;
    readonly sendLiveActivityRequest: (input: {
        readonly credentials: ApnsCredentials;
        readonly request: ApnsLiveActivityRequest;
        readonly issuedAtUnixSeconds: number;
    }) => Effect.Effect<ApnsDeliveryResult, ApnsError>;
    readonly sendPushNotificationRequest: (input: {
        readonly credentials: ApnsCredentials;
        readonly request: ApnsPushNotificationRequest;
        readonly issuedAtUnixSeconds: number;
    }) => Effect.Effect<ApnsDeliveryResult, ApnsError>;
}, never, ApnsProviderTokens.ApnsProviderTokens | HttpClient.HttpClient>;
export declare const layer: Layer.Layer<ApnsClient, never, ApnsProviderTokens.ApnsProviderTokens | HttpClient.HttpClient>;
