import type { EnvironmentId, ProviderDriverKind } from "@t3tools/contracts";
/**
 * Shown while adding a Claude or Codex account when the environment already has one signed in.
 * @throws {never}
 */
export declare function MultipleAccountsNote({ environmentId, driver, }: {
    readonly environmentId: EnvironmentId;
    readonly driver: ProviderDriverKind;
}): import("react").JSX.Element | null;
