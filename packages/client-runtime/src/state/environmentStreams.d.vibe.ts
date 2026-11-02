import type { EnvironmentId as EnvironmentIdType } from "@t3tools/contracts";
import * as Stream from "effect/Stream";
import * as EnvironmentRegistry from "../connection/registry.ts";
import type * as EnvironmentSupervisor from "../connection/supervisor.ts";
export declare function runStreamInEnvironment<A, E, R>(environmentId: EnvironmentIdType, stream: Stream.Stream<A, E, R>): Stream.Stream<A, E | EnvironmentRegistry.EnvironmentNotRegisteredError, EnvironmentRegistry.EnvironmentRegistry | Exclude<R, EnvironmentSupervisor.EnvironmentSupervisor>>;
export declare function followStreamInEnvironment<A, E, R>(environmentId: EnvironmentIdType, stream: Stream.Stream<A, E, R>): Stream.Stream<A, E, EnvironmentRegistry.EnvironmentRegistry | Exclude<R, EnvironmentSupervisor.EnvironmentSupervisor>>;
