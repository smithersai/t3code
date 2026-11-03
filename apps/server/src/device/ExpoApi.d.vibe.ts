/**
 * Expo's GraphQL API for EAS Simulator sessions. The operations in
 * `ExpoApi.graphql` are the ones eas-cli's `simulator:*` commands send; their
 * client is generated from `schema/expo.graphql` (`vp run generate`).
 */
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { HttpClient } from "effect/http";
import type { DeviceRunSessionStatus } from "../../schema/expo.graphql.ts";
export type ExpoCredentialSource = "settings" | "env" | "eas-login";
export interface ExpoCredential {
    readonly source: ExpoCredentialSource;
    readonly header: {
        readonly name: "authorization" | "expo-session";
        readonly value: Redacted.Redacted<string>;
    };
}
declare const ExpoNotSignedInError_base: Schema.Class<ExpoNotSignedInError, Schema.TaggedStruct<"ExpoNotSignedInError", {}>, import("effect/Cause").YieldableError>;
export declare class ExpoNotSignedInError extends ExpoNotSignedInError_base {
    get message(): string;
}
declare const ExpoInvalidCredentialError_base: Schema.Class<ExpoInvalidCredentialError, Schema.TaggedStruct<"ExpoInvalidCredentialError", {
    readonly source: Schema.Literals<readonly ["settings", "env", "eas-login"]>;
}>, import("effect/Cause").YieldableError>;
export declare class ExpoInvalidCredentialError extends ExpoInvalidCredentialError_base {
    get message(): string;
}
declare const ExpoApiError_base: Schema.Class<ExpoApiError, Schema.TaggedStruct<"ExpoApiError", {
    readonly operation: Schema.String;
    readonly detail: Schema.optional<Schema.String>;
    /**
     * Expo answered and refused, so a mutation did nothing. Otherwise (no
     * answer, a server error, an answer that did not decode) it may have run.
     */
    readonly rejected: Schema.optional<Schema.Boolean>;
    /** The HTTP status Expo answered with, when it answered. */
    readonly status: Schema.optional<Schema.Int>;
}>, import("effect/Cause").YieldableError>;
export declare class ExpoApiError extends ExpoApiError_base {
    get message(): string;
}
/** A token saved for the host, then EXPO_TOKEN, then the `eas login` session. */
export declare const resolveExpoCredential: (savedToken: string) => Effect.Effect<{
    source: ExpoCredentialSource;
    header: {
        name: "authorization" | "expo-session";
        value: Redacted.Redacted<string>;
    };
}, ExpoInvalidCredentialError | ExpoNotSignedInError, FileSystem.FileSystem | Path.Path>;
export type EasSessionStatus = DeviceRunSessionStatus;
export interface EasSession {
    readonly id: string;
    readonly status: EasSessionStatus;
    /** Present once the simulator is ready; tokens grant full device control. */
    readonly endpoints: {
        readonly agentDevice: {
            readonly url: string;
            readonly token: Redacted.Redacted<string>;
        };
        readonly preview: {
            readonly url: string;
            readonly token: Redacted.Redacted<string>;
        } | null;
    } | null;
}
export interface EasApp {
    readonly id: string;
    readonly fullName: string;
}
export interface CreateEasSessionInput {
    readonly appId: string;
    readonly platform: "ios" | "android";
    readonly name: string;
    readonly maxRunTimeMinutes: number;
    readonly maxIdleTimeMinutes: number;
}
/** Typed calls against Expo's API with one resolved credential. */
export declare const makeExpoApi: (http: HttpClient.HttpClient, credential: ExpoCredential) => {
    credential: ExpoCredential;
    viewer: Effect.Effect<{
        name: string;
        apps: EasApp[];
    }, ExpoApiError, never>;
    availability: (appId: string) => Effect.Effect<{
        account: string;
        available: boolean;
    }, ExpoApiError, never>;
    create: (input: CreateEasSessionInput) => Effect.Effect<string, ExpoApiError, never>;
    session: (id: string) => Effect.Effect<EasSession, ExpoApiError, never>;
    activeSessions: (appId: string) => Effect.Effect<{
        readonly id: string;
        readonly status: "ERRORED" | "IN_PROGRESS" | "NEW" | "QUEUED" | "STARTING" | "STOPPED";
        readonly name: string | null;
    }[], ExpoApiError, never>;
    stop: (id: string) => Effect.Effect<"ERRORED" | "IN_PROGRESS" | "NEW" | "QUEUED" | "STARTING" | "STOPPED", ExpoApiError, never>;
};
export type ExpoApi = ReturnType<typeof makeExpoApi>;
export {};
