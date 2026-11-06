import { Atom } from "effect/reactivity";
import type { EnvironmentRegistry } from "../connection/registry.ts";
/** @throws {never} */
export declare function createPreviewEnvironmentAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | R, E>): {
    list: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly input: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        };
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly sessions: readonly {
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
        readonly serverEpoch: string;
        readonly revision: number;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | import("effect/rpc/RpcClientError").RpcClientError>>;
    events: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly input: {};
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly threadId: string;
        readonly tabId: string;
        readonly createdAt: string;
        readonly serverEpoch: string;
        readonly revision: number;
        readonly type: "opened";
        readonly snapshot: {
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
        };
    } | {
        readonly threadId: string;
        readonly tabId: string;
        readonly createdAt: string;
        readonly serverEpoch: string;
        readonly revision: number;
        readonly type: "navigated";
        readonly snapshot: {
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
        };
    } | {
        readonly threadId: string;
        readonly tabId: string;
        readonly createdAt: string;
        readonly serverEpoch: string;
        readonly revision: number;
        readonly type: "closed";
    } | {
        readonly threadId: string;
        readonly tabId: string;
        readonly createdAt: string;
        readonly serverEpoch: string;
        readonly revision: number;
        readonly type: "resized";
        readonly snapshot: {
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
        };
        readonly request?: {
            readonly hardReload?: boolean | undefined;
            readonly clear?: "cache" | "cookies" | undefined;
        } | undefined;
    } | {
        readonly threadId: string;
        readonly tabId: string;
        readonly createdAt: string;
        readonly serverEpoch: string;
        readonly revision: number;
        readonly type: "failed";
        readonly url: string;
        readonly title: string;
        readonly code: number;
        readonly description: string;
        readonly download?: {
            readonly id: string;
            readonly fileName: string;
        } | undefined;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("effect/Cause").NoSuchElementError | import("effect/rpc/RpcClientError").RpcClientError>>;
    discoveredServers: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly input: {
            readonly configuredUrls?: readonly string[] | undefined;
        };
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly servers: readonly {
            readonly host: string;
            readonly port: number;
            readonly url: string;
            readonly processName: string | null;
            readonly pid: number | null;
            readonly terminal: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly terminalId: string;
            } | null;
            readonly agent?: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            } | null;
        }[];
        readonly scannedAt: string;
        readonly configuredUrlProbing?: true | undefined;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("effect/Cause").NoSuchElementError | import("effect/rpc/RpcClientError").RpcClientError>>;
    open: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly url?: string | undefined;
                readonly viewport?: {
                    readonly _tag?: "fill";
                } | {
                    readonly _tag?: "freeform";
                    readonly width: number;
                    readonly height: number;
                } | {
                    readonly _tag?: "preset";
                    readonly width: number;
                    readonly height: number;
                    readonly presetId: "asus-zenbook-fold" | "desktop-1440x900" | "desktop-1920x1080" | "galaxy-s24" | "galaxy-z-fold-5" | "ipad-air" | "ipad-mini" | "ipad-pro" | "ipad-pro-11" | "iphone-12-pro" | "iphone-14-pro-max" | "iphone-15-pro" | "iphone-se" | "iphone-xr" | "laptop-1280x800" | "laptop-1366x768" | "nest-hub" | "nest-hub-max" | "pixel-7" | "pixel-8" | "samsung-galaxy-a51-71" | "samsung-galaxy-s20-ultra" | "samsung-galaxy-s8-plus" | "surface-duo" | "surface-pro-7";
                } | undefined;
                readonly profileId?: string | undefined;
                readonly runtime?: "desktop" | "server" | undefined;
                readonly reveal?: boolean | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
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
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").PreviewControlRequiredError | import("@t3tools/contracts").PreviewInvalidUrlError | import("@t3tools/contracts").PreviewSessionLookupError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    navigate: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly tabId: string;
                readonly url: string;
                readonly resolvedTitle?: string | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
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
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").PreviewControlRequiredError | import("@t3tools/contracts").PreviewInvalidUrlError | import("@t3tools/contracts").PreviewSessionLookupError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    resize: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly tabId: string;
                readonly viewport: {
                    readonly _tag?: "fill";
                } | {
                    readonly _tag?: "freeform";
                    readonly width: number;
                    readonly height: number;
                } | {
                    readonly _tag?: "preset";
                    readonly width: number;
                    readonly height: number;
                    readonly presetId: "asus-zenbook-fold" | "desktop-1440x900" | "desktop-1920x1080" | "galaxy-s24" | "galaxy-z-fold-5" | "ipad-air" | "ipad-mini" | "ipad-pro" | "ipad-pro-11" | "iphone-12-pro" | "iphone-14-pro-max" | "iphone-15-pro" | "iphone-se" | "iphone-xr" | "laptop-1280x800" | "laptop-1366x768" | "nest-hub" | "nest-hub-max" | "pixel-7" | "pixel-8" | "samsung-galaxy-a51-71" | "samsung-galaxy-s20-ultra" | "samsung-galaxy-s8-plus" | "surface-duo" | "surface-pro-7";
                };
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
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
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").PreviewControlRequiredError | import("@t3tools/contracts").PreviewInvalidUrlError | import("@t3tools/contracts").PreviewSessionLookupError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    adjust: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly tabId: string;
                readonly colorScheme?: "dark" | "light" | "system" | undefined;
                readonly zoomFactor?: 0.25 | 0.33 | 0.5 | 0.67 | 0.75 | 0.8 | 0.9 | 1 | 1.1 | 1.25 | 1.5 | 1.75 | 2 | 2.5 | 3 | 4 | 5 | undefined;
                readonly hardReload?: boolean | undefined;
                readonly clear?: "cache" | "cookies" | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
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
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").PreviewControlRequiredError | import("@t3tools/contracts").PreviewInvalidUrlError | import("@t3tools/contracts").PreviewSessionLookupError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    refresh: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly tabId: string;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").PreviewControlRequiredError | import("@t3tools/contracts").PreviewInvalidUrlError | import("@t3tools/contracts").PreviewSessionLookupError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    close: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly tabId?: string | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").PreviewControlRequiredError | import("@t3tools/contracts").PreviewInvalidUrlError | import("@t3tools/contracts").PreviewSessionLookupError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    clearProfile: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly profileId: string;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").PreviewClearProfileError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    reportProfiles: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly profiles: readonly {
                    readonly id: string;
                    readonly name: string;
                    readonly kind: "incognito" | "persistent";
                }[];
                readonly defaultProfileId: string;
                readonly recordingFrameRate?: 30 | 60 | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    stopLocalServer: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly pid: number;
                readonly port: number;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").PreviewStopLocalServerError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    reportStatus: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly tabId: string;
                readonly navStatus: {
                    readonly _tag?: "Idle";
                } | {
                    readonly _tag?: "LoadFailed";
                    readonly url: string;
                    readonly title: string;
                    readonly code: number;
                    readonly description: string;
                    readonly download?: {
                        readonly id: string;
                        readonly fileName: string;
                    } | undefined;
                } | {
                    readonly _tag?: "Loading";
                    readonly url: string;
                    readonly title: string;
                } | {
                    readonly _tag?: "Success";
                    readonly url: string;
                    readonly title: string;
                };
                readonly canGoBack: boolean;
                readonly canGoForward: boolean;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").PreviewControlRequiredError | import("@t3tools/contracts").PreviewInvalidUrlError | import("@t3tools/contracts").PreviewSessionLookupError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
};
