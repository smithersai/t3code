import { type EnvironmentId } from "@t3tools/contracts";
/**
 * EAS hosts belong to one environment: its server holds the Expo credential and runs the sessions.
 * @throws {never}
 */
export declare function EasDeviceHostsSettings(props: {
    environmentId: EnvironmentId | null;
}): import("react").JSX.Element;
