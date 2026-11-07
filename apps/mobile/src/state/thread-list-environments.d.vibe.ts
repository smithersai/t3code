import { type EnvironmentId, type ServerConfig, type ServerProvider } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
export type ThreadListProvider = Pick<ServerProvider, "instanceId" | "driver" | "enabled" | "displayName" | "accentColor" | "iconUrl">;
export declare function createThreadListEnvironmentsAtom(configsAtom: Atom.Atom<ReadonlyMap<EnvironmentId, ServerConfig>>): Atom.Atom<{
    providersByEnvironmentId: Map<string & import("effect/Brand").Brand<"EnvironmentId">, readonly ThreadListProvider[]>;
    machineByEnvironmentId: Map<string & import("effect/Brand").Brand<"EnvironmentId">, "cloud" | "desktop" | "laptop" | "linux" | "mac-mini" | "mac-studio" | "server">;
    settlementEnvironmentIds: Set<string & import("effect/Brand").Brand<"EnvironmentId">>;
    snoozeEnvironmentIds: Set<string & import("effect/Brand").Brand<"EnvironmentId">>;
    pinningEnvironmentIds: Set<string & import("effect/Brand").Brand<"EnvironmentId">>;
    autoSettleOptOutEnvironmentIds: Set<string & import("effect/Brand").Brand<"EnvironmentId">>;
    pinReorderEnvironmentIds: Set<string & import("effect/Brand").Brand<"EnvironmentId">>;
    activeReorderEnvironmentIds: Set<string & import("effect/Brand").Brand<"EnvironmentId">>;
    titleRegenerationEnvironmentIds: Set<string & import("effect/Brand").Brand<"EnvironmentId">>;
}>;
