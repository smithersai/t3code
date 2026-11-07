import type { EnvironmentProject, EnvironmentThreadShell } from "@t3tools/client-runtime/state/shell";
import { EnvironmentId, type ComposerContextRecord, type ScopedProjectRef, type ScopedThreadRef, type ServerConfig } from "@t3tools/contracts";
/** @throws {never} */
export declare function waitForProject(ref: ScopedProjectRef, timeoutMs?: number): Promise<EnvironmentProject | null>;
/** @throws {never} */
export declare function useProjects(): ReadonlyArray<EnvironmentProject>;
/** @throws {never} */
export declare function useThreadShells(): ReadonlyArray<EnvironmentThreadShell>;
/** @throws {never} */
export declare function useNavigationThreadShells(): ReadonlyArray<EnvironmentThreadShell>;
/** @throws {never} */
export declare function useProject(ref: ScopedProjectRef | null): EnvironmentProject | null;
/** @throws {never} */
export declare function useThreadShell(ref: ScopedThreadRef | null): EnvironmentThreadShell | null;
/**
 * Streaming timestamps, item counts, and the latest message can be stale during a run.
 * @throws {never}
 */
export declare function useQuietThreadShell(ref: ScopedThreadRef | null): EnvironmentThreadShell | null;
/** @throws {never} */
export declare function useChildThreadInputs(ref: ScopedThreadRef): readonly EnvironmentThreadShell[];
/** @throws {never} */
export declare function useLiveThreadLinkLabels(markdown: string, environmentId: EnvironmentId): string;
/** @throws {never} */
export declare function useThreadChipIcons(environmentId: EnvironmentId, markdown: string, records?: ReadonlyArray<ComposerContextRecord>): ReadonlyMap<string, string>;
/** @throws {never} */
export declare function useEnvironmentServerConfig(environmentId: EnvironmentId | null): ServerConfig | null;
/** @throws {never} */
export declare function useServerConfigs(): ReadonlyMap<EnvironmentId, ServerConfig>;
/** @throws {never} */
export declare function useThreadReportedModelSelection(ref: ScopedThreadRef | null): {
    readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
    readonly model: string;
    readonly options?: readonly {
        readonly id: string;
        readonly value: string | boolean;
    }[] | undefined;
} | null;
