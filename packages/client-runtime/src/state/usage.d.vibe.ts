import type { EnvironmentId, ServerProvider, UsageSummary, UsageSummaryInput } from "@t3tools/contracts";
import type { AtomRegistry } from "effect/reactivity";
import type { createEnvironmentPresentationAtoms } from "./presentation.ts";
import type { createServerEnvironmentAtoms } from "./server.ts";
export declare function needsCursorKeychainAccess(summary: UsageSummary | null, providers: readonly ServerProvider[] | null): boolean;
/**
 * Any environment reading a Cursor account already reports that account's
 * history from every machine, so the prompt only adds duplicates there.
 */
export declare function cursorKeychainAccessEnvironments<E extends {
    readonly summary: UsageSummary | null;
    readonly needsCursorKeychainAccess: boolean;
}>(environments: readonly E[]): readonly E[];
/** @throws {never} */
export declare function refreshUsageLimits<A>(environmentId: EnvironmentId, refresh: () => Promise<A>, automatic?: boolean, afterPending?: boolean): Promise<A | undefined>;
/** @throws {never} */
export declare function refreshUsage({ registry, server, presentations, environmentIds, input, }: {
    registry: AtomRegistry.AtomRegistry;
    server: Pick<ReturnType<typeof createServerEnvironmentAtoms>, "usageSummary" | "refreshUsageRates">;
    presentations: Pick<ReturnType<typeof createEnvironmentPresentationAtoms>, "presentationAtom">;
    environmentIds: readonly EnvironmentId[];
    input: UsageSummaryInput;
}): Promise<void>;
