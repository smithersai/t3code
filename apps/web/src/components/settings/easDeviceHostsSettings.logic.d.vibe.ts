import { type EasDeviceHostConfig as EasDeviceHostConfigType } from "@t3tools/contracts";
export declare const parseEasDeviceHostDraft: (input: unknown, options?: import("effect/SchemaAST").ParseOptions) => import("effect/Option").Option<{
    readonly kind: "eas";
    readonly id: string;
    readonly label: string;
    readonly appId?: string | undefined;
    readonly accessToken: string;
    readonly maxSessionMinutes: number;
    readonly idleMinutes: number;
    readonly maxConcurrentSessions: number;
}>;
export declare const newEasDeviceHost: (id: string) => EasDeviceHostConfigType;
/** Adds, replaces, or removes one EAS host. */
export declare function updateEasDeviceHosts(hosts: ReadonlyArray<EasDeviceHostConfigType>, host: EasDeviceHostConfigType, remove: boolean): ReadonlyArray<EasDeviceHostConfigType>;
export declare function easSessionLimits(host: EasDeviceHostConfigType): string;
