import type { CloudPublicConfig } from "./publicConfig.vibe.throwing.js";
export { CloudPublicConfigMissingError, resolveCloudPublicConfig, resolveRelayClerkTokenOptions } from "./publicConfig.vibe.throwing.js";
export type { CloudPublicConfig } from "./publicConfig.vibe.throwing.js";
export declare function hasCloudPublicConfig(): boolean;
type Configured<T> = {
    readonly [Key in keyof T]: NonNullable<T[Key]>;
};
type TracingPublicConfig = Omit<CloudPublicConfig, "observability"> & {
    readonly observability: Configured<CloudPublicConfig["observability"]>;
};
export declare function hasTracingPublicConfig(config?: CloudPublicConfig): config is TracingPublicConfig;
