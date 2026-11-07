import * as Effect from "effect/Effect";
import * as EnvironmentRegistry from "../connection/registry.vibe";
import * as EnvironmentSupervisor from "../connection/supervisor.ts";
import { EnvironmentRpcUnavailableError, type EnvironmentRpcInput, type EnvironmentUnaryRpcTag } from "../rpc/client.vibe";
/**
 * Credentials stay on their environments. Only a verified host and account cross the wire.
 * @throws {never}
 */
export declare function createPullRequestRouter(): <T extends EnvironmentUnaryRpcTag>(tag: T, input: EnvironmentRpcInput<T>) => Effect.Effect<import("../rpc/client.vibe").EnvironmentRpcSuccess<T>, import("@t3tools/contracts").EnvironmentAuthorizationError | EnvironmentRpcUnavailableError | import("../rpc/client.vibe").EnvironmentRpcFailure<T>, EnvironmentRegistry.EnvironmentRegistry | EnvironmentSupervisor.EnvironmentSupervisor>;
