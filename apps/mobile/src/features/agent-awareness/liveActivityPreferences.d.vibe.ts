import * as Effect from "effect/Effect";
import type { EnvironmentId } from "@t3tools/contracts";
import type { SavedRemoteConnection } from "../../lib/connection";
export declare const setLiveActivityUpdatesEnabled: (input: {
    readonly enabled: boolean;
    readonly previousEnabled: boolean;
    readonly clerkToken: string | null;
    readonly connections: ReadonlyArray<SavedRemoteConnection>;
    /** @throws {never} */
    readonly canConfigureEnvironment: (environmentId: EnvironmentId) => boolean;
}) => Effect.Effect<void, unknown, import("effect/http/HttpClient").HttpClient | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayClient | import("../../persistence/mobile-storage.vibe.platform.ts").MobileStorage>;
