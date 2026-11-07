import * as Schema from "effect/Schema";
export declare const CodexAuthHandoff: Schema.Struct<{
    readonly authorizationUrl: Schema.String;
    readonly returnUrl: Schema.String;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly flowId: Schema.NonEmptyString;
}>;
export type CodexAuthHandoff = typeof CodexAuthHandoff.Type;
/** @throws {never} */
export declare function codexAuthorizationRequest(value: string): {
    authorizationUrl: string;
    redirectUri: string;
    state: string;
};
/** @throws {never} */
export declare function codexCallbackUrl(value: string, redirectUri: string, state: string): URL;
/** @throws {never} */
export declare function codexAuthHandoffUrl(input: CodexAuthHandoff, development?: boolean): string;
/** @throws {never} */
export declare function readCodexAuthHandoff(value: string, development: boolean): {
    readonly authorizationUrl: string;
    readonly returnUrl: string;
    readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
    readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
    readonly flowId: string;
} | undefined;
/**
 * Codes travel in a fragment, never in hosted web requests or a token store on the helper.
 * @throws {never}
 */
export declare function codexAuthDeliveryUrl(input: CodexAuthHandoff, callbackUrl: string): string;
/** @throws {never} */
export declare function readCodexAuthDelivery(value: string): {
    environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
    instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
    flowId: string;
    callbackUrl: string;
    returnHash: string;
    returnUrl: string;
} | undefined;
