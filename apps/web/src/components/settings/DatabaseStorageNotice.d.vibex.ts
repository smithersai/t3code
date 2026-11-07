import type { EnvironmentId } from "@t3tools/contracts";
/**
 * Suggests `t3 doctor` on every machine whose database still holds at least 1 GiB of freed pages.
 * @throws {never}
 */
export declare function DatabaseStorageNotice({ environments, }: {
    environments: ReadonlyArray<{
        readonly environmentId: EnvironmentId;
        readonly label: string;
    }>;
}): import("react").JSX.Element | null;
