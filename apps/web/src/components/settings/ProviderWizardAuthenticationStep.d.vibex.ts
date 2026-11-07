import type { EnvironmentId, ProviderInstanceId } from "@t3tools/contracts";
/** @throws {never} */
export declare function ProviderWizardAuthenticationStep({ environmentId, environmentLabel, instanceId, onFinish, }: {
    readonly environmentId: EnvironmentId;
    readonly environmentLabel: string;
    readonly instanceId: ProviderInstanceId;
    /** @throws {never} */
    readonly onFinish: () => void;
}): import("react").JSX.Element;
