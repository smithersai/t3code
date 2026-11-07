import type { DevicePlatform, DeviceServiceState, EnvironmentId } from "@t3tools/contracts";
export declare const deviceHubDescription = "Enable this environment to open simulators and emulators, whether they run here or on a remote device host.";
export declare const agentDeviceDescription = "Allow new agent sessions in this environment to start and control local and remote devices, with required tools set up automatically.";
/** @throws {never} */
export declare const isAndroidDiscoveryUncertain: (state: DeviceServiceState) => boolean;
/**
 * `hostStatus` only tracks this machine. A machine without simulator tooling never
 * starts its own hub, so setup and the panel must also count remote device hosts.
 * @throws {never}
 */
export declare function deviceHubReadiness(state: DeviceServiceState): {
    ready: boolean;
    busy: boolean;
};
/** @throws {never} */
export declare function DeviceHostDiagnostics(props: {
    readonly hosts: ReadonlyArray<Pick<DeviceServiceState["hosts"][number], "id" | "label">>;
    readonly hostStatuses: DeviceServiceState["hostStatuses"];
    readonly className?: string;
}): import("react").JSX.Element | null;
/** @throws {never} */
export declare function platformSetupStatus(state: DeviceServiceState, platform: DevicePlatform): {
    ready: boolean;
    message: string;
};
/** @throws {never} */
export declare function DeviceSetup(props: {
    readonly environmentId: EnvironmentId;
    readonly state: DeviceServiceState;
    /** @throws {never} */
    readonly onComplete?: () => void;
}): import("react").JSX.Element;
/** @throws {never} */
export declare function DeviceHubSetupStatus({ state, pending, compact, }: {
    readonly state: DeviceServiceState;
    readonly pending: boolean;
    readonly compact?: boolean;
}): import("react").JSX.Element | null;
/** @throws {never} */
export declare function AgentDeviceSetupStatus(props: {
    readonly state: DeviceServiceState;
    readonly pending: boolean;
    readonly compact?: boolean;
}): import("react").JSX.Element | null;
/** @throws {never} */
export declare function PlatformStatus(props: {
    readonly platform: string;
    readonly status: {
        readonly ready: boolean;
        readonly message: string;
    };
    readonly compact?: boolean;
}): import("react").JSX.Element;
