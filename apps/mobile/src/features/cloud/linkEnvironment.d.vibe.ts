import * as Effect from "effect/Effect";
import { HttpClient } from "effect/http";
import { ManagedRelay } from "@t3tools/client-runtime/relay";
import type { SavedRemoteConnection } from "../../lib/connection";
import * as MobileStorage from "../../persistence/mobile-storage.vibe";
declare const CloudEnvironmentLinkError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "CloudEnvironmentLinkError";
} & Readonly<A>;
export declare class CloudEnvironmentLinkError extends CloudEnvironmentLinkError_base<{
    readonly message: string;
    readonly cause?: unknown;
    readonly traceId?: string;
}> {
}
interface LinkEnvironmentToCloudInput {
    readonly connection: SavedRemoteConnection;
    readonly clerkToken: string;
}
type LinkEnvironmentToCloudRequirements = HttpClient.HttpClient | ManagedRelay.ManagedRelayClient | MobileStorage.MobileStorage;
export declare const linkEnvironmentToCloudWithPreference: (input: LinkEnvironmentToCloudInput & {
    readonly liveActivitiesEnabled: boolean;
}) => Effect.Effect<void, CloudEnvironmentLinkError, LinkEnvironmentToCloudRequirements>;
export {};
