import * as Effect from "effect/Effect";
import { HttpClient } from "effect/http";
import { type EnvironmentCloudLinkStateResult } from "@t3tools/contracts";
import { EnvironmentRegistry } from "@t3tools/client-runtime/connection";
import { ManagedRelay } from "@t3tools/client-runtime/relay";
declare const CloudEnvironmentLinkError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "CloudEnvironmentLinkError";
} & Readonly<A>;
export declare class CloudEnvironmentLinkError extends CloudEnvironmentLinkError_base<{
    readonly message: string;
    readonly cause?: unknown;
    readonly traceId?: string;
}> {
}
export interface CloudLinkTarget {
    readonly environmentId: string;
    readonly label: string;
    readonly httpBaseUrl: string;
    readonly wsBaseUrl: string;
}
export type CloudLinkState = EnvironmentCloudLinkStateResult;
export declare const readPrimaryCloudLinkState: (input: {
    readonly target: CloudLinkTarget;
}) => Effect.Effect<CloudLinkState | null, CloudEnvironmentLinkError, HttpClient.HttpClient>;
export declare const updatePrimaryCloudPreferences: (input: {
    readonly target: CloudLinkTarget;
    readonly publishAgentActivity: boolean;
    readonly holdWebhooksWhileOffline?: boolean;
}) => Effect.Effect<CloudLinkState, CloudEnvironmentLinkError, HttpClient.HttpClient>;
export declare const unlinkPrimaryEnvironmentFromCloud: (input: {
    readonly target: CloudLinkTarget;
    readonly clerkToken: string | null;
}) => Effect.Effect<void, CloudEnvironmentLinkError, HttpClient.HttpClient | ManagedRelay.ManagedRelayClient>;
export type CloudLinkMode = "managed" | "publish_only";
export declare const linkPrimaryEnvironmentToCloud: (input: {
    readonly target: CloudLinkTarget;
    readonly clerkToken: string;
    readonly mode?: CloudLinkMode;
}) => Effect.Effect<void, CloudEnvironmentLinkError, EnvironmentRegistry.EnvironmentRegistry | HttpClient.HttpClient | ManagedRelay.ManagedRelayClient>;
export {};
