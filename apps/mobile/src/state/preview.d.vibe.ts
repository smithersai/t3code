import type { EnvironmentId, ThreadId } from "@t3tools/contracts";
export { previewEnvironment } from "./preview.vibe.platform.js";
/** @throws {never} */
export declare function useThreadServerBrowserTabs(input: {
    readonly environmentId: EnvironmentId;
    readonly threadId: ThreadId;
    readonly enabled: boolean;
}): {
    tabs: {
        readonly threadId: string;
        readonly tabId: string;
        readonly navStatus: {
            readonly _tag: "Idle";
        } | {
            readonly _tag: "Loading";
            readonly url: string;
            readonly title: string;
        } | {
            readonly _tag: "Success";
            readonly url: string;
            readonly title: string;
        } | {
            readonly _tag: "LoadFailed";
            readonly url: string;
            readonly title: string;
            readonly code: number;
            readonly description: string;
            readonly download?: {
                readonly id: string;
                readonly fileName: string;
            } | undefined;
        };
        readonly canGoBack: boolean;
        readonly canGoForward: boolean;
        readonly viewport?: {
            readonly _tag: "fill";
        } | {
            readonly _tag: "freeform";
            readonly width: number;
            readonly height: number;
        } | {
            readonly _tag: "preset";
            readonly width: number;
            readonly height: number;
            readonly presetId: "asus-zenbook-fold" | "desktop-1440x900" | "desktop-1920x1080" | "galaxy-s24" | "galaxy-z-fold-5" | "ipad-air" | "ipad-mini" | "ipad-pro" | "ipad-pro-11" | "iphone-12-pro" | "iphone-14-pro-max" | "iphone-15-pro" | "iphone-se" | "iphone-xr" | "laptop-1280x800" | "laptop-1366x768" | "nest-hub" | "nest-hub-max" | "pixel-7" | "pixel-8" | "samsung-galaxy-a51-71" | "samsung-galaxy-s20-ultra" | "samsung-galaxy-s8-plus" | "surface-duo" | "surface-pro-7";
        } | undefined;
        readonly colorScheme?: "dark" | "light" | "system" | undefined;
        readonly zoomFactor?: 0.25 | 0.33 | 0.5 | 0.67 | 0.75 | 0.8 | 0.9 | 1 | 1.1 | 1.25 | 1.5 | 1.75 | 2 | 2.5 | 3 | 4 | 5 | undefined;
        readonly profileId?: string | undefined;
        readonly runtime?: "desktop" | "server" | undefined;
        readonly headless?: boolean | undefined;
        readonly automationOwner?: string | undefined;
        readonly reveal?: boolean | undefined;
        readonly revealRequest?: {
            readonly id: string;
            readonly force: boolean;
        } | undefined;
        readonly updatedAt: string;
    }[];
    loaded: boolean;
};
/** @throws {never} */
export declare function usePreviewStreamAccess(environmentId: EnvironmentId): {
    access: import("@t3tools/client-runtime/device/hub-access").DeviceHubAccess | null;
    error: string | null;
    refresh: 
    /** @throws {never} */
    () => void;
    /** @throws {never} */
    retryAfter: (delayMs: number) => void;
};
