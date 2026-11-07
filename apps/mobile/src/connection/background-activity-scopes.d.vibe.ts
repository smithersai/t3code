import type { EnvironmentRpcSubscriptionObservation } from "@t3tools/client-runtime/rpc";
import { type BackgroundScope, type EnvironmentId } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
export declare function retainedMobileBackgroundScopes(environmentId: EnvironmentId): ReadonlyArray<BackgroundScope>;
export declare function observeMobileBackgroundActivitySubscription(observation: EnvironmentRpcSubscriptionObservation): Effect.Effect<Effect.Effect<void>>;
export declare function onRetainedMobileBackgroundScopesChange(listener: () => void): () => void;
