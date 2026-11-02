import type { DeviceHubAccess } from "@t3tools/client-runtime/state/deviceHubAccess";
import type { DeviceActionInput, DeviceSummary, EnvironmentId } from "@t3tools/contracts";
type ActionBody = DeviceActionInput extends infer A ? A extends {
    readonly type: string;
} ? Omit<A, "hostId" | "deviceId"> : never : never;
/** Mount keyed by device. */
export declare function useDeviceControls(options: {
    environmentId: EnvironmentId;
    device: DeviceSummary;
    access: DeviceHubAccess | null;
    visible: boolean;
}): {
    detail: {
        readonly hostId: string;
        readonly deviceId: string;
        readonly settings: {
            readonly appearance?: "dark" | "light" | undefined;
            readonly textSize?: "default" | "extra-large" | "large" | "small" | undefined;
            readonly reduceMotion?: boolean | undefined;
            readonly increaseContrast?: boolean | undefined;
            readonly reduceTransparency?: boolean | undefined;
            readonly showBorders?: boolean | undefined;
            readonly voiceOver?: boolean | undefined;
            readonly liquidGlass?: "clear" | "tinted" | undefined;
            readonly colorFilter?: "blue-yellow" | "grayscale" | "green-red" | "none" | "red-green" | undefined;
            readonly networkEnabled?: boolean | undefined;
            readonly location?: {
                readonly latitude: number;
                readonly longitude: number;
            } | null | undefined;
        };
        readonly foregroundApp: {
            readonly id: string;
            readonly name?: string | undefined;
            readonly version?: string | undefined;
        } | null;
        readonly readAt: string;
    } | null;
    pending: boolean;
    error: string | null;
    act: (body: ActionBody) => Promise<void>;
    disabled: boolean;
    foregroundApp: import("./deviceHubApi.ts").DeviceForegroundInfo | {
        readonly id: string;
        readonly name?: string | undefined;
        readonly version?: string | undefined;
    } | null;
};
export type DeviceControls = ReturnType<typeof useDeviceControls>;
export {};
