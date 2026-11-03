import { OrchestratorMcpFailure, type OrchestrationV2LinkOrigin, type OrchestrationV2ThreadShell } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import type { Caller } from "./threadAccess.ts";
/**
 * Below full access, work a link starts here (all of it carries that session in `linkOrigin`)
 * may change only work from the same link: not the user's threads, projects or settings, nor
 * this environment's links. Reads are not fenced. It is a routing rule for T3's tools; agents
 * still run as this environment's user, so a full-access link is not fenced at all.
 */
/** The link a caller acts for: its own session, or the link that started its thread. */
export declare const callerLinkOrigin: (caller: Pick<Caller, "scope" | "caller">) => OrchestrationV2LinkOrigin | undefined;
/** A thread a fenced caller may change: one its own link started. */
export declare const assertSameLink: (caller: Pick<Caller, "scope" | "caller">, target: Pick<OrchestrationV2ThreadShell, "id" | "linkOrigin">) => Effect.Effect<void, never, never> | Effect.Effect<never, OrchestratorMcpFailure, never>;
/** Fenced work never changes what the environment already has: projects, settings, scheduled runs. */
export declare const assertNotLinked: (caller: Pick<Caller, "scope" | "caller">, what: string) => Effect.Effect<void, never, never> | Effect.Effect<never, OrchestratorMcpFailure, never>;
