import { ProviderInstanceId, type EnvironmentId, type ServerProvider } from "@t3tools/contracts";
import { type ReactNode } from "react";
/** @throws {never} */
export declare function AddCodexAccountDialog({ environmentId, onClose, renderSetup, onAccountCreated, }: {
    readonly environmentId: EnvironmentId;
    /** @throws {never} */
    readonly onClose: () => void;
    readonly onAccountCreated?: (
    /** @throws {never} */
    (instanceId: ProviderInstanceId, displayName: string) => void) | undefined;
    /** @throws {never} */
    readonly renderSetup: (instanceId: ProviderInstanceId, provider: ServerProvider) => ReactNode;
}): import("react").JSX.Element;
