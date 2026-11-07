import { type DeviceToolVersions } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
import type { EnvironmentRegistry } from "../connection/registry.ts";
/** @throws {never} */
export declare function createDeviceEnvironmentAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | R, E>): {
    state: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly input: {};
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly supportsHostRetry?: boolean | undefined;
        readonly supportsToolUpdate?: boolean | undefined;
        readonly supportsToolInspection?: boolean | undefined;
        readonly supportsEasHosts?: boolean | undefined;
        readonly hostStatus: "disabled" | "failed" | "idle" | "installing" | "ready" | "starting";
        readonly hostStatusDetail?: string | undefined;
        readonly hostStatuses: {
            readonly [x: string]: {
                readonly status: "disabled" | "failed" | "idle" | "installing" | "ready" | "starting";
                readonly detail?: string | undefined;
                readonly androidDiscoveryIncomplete?: boolean | undefined;
            };
        };
        readonly devices: readonly {
            readonly hostId: string;
            readonly id: string;
            readonly platform: "android" | "ios";
            readonly name: string;
            readonly version: string;
            readonly booted: boolean;
            readonly physical: boolean;
        }[];
        readonly sessions: readonly {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly hostId: string;
            readonly deviceId: string;
            readonly platform: "android" | "ios";
            readonly openedAt: string;
        }[];
        readonly bootingDevices?: readonly {
            readonly hostId: string;
            readonly id: string;
            readonly platform: "android" | "ios";
            readonly name: string;
            readonly version: string;
            readonly booted: boolean;
            readonly physical: boolean;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        }[] | undefined;
        readonly onboardingCompleted: boolean;
        readonly agentAccessEnabled: boolean;
        readonly hubBasePath: string;
        readonly revision: number;
        readonly hosts: readonly ({
            readonly id: string;
            readonly label: string;
            readonly platforms: readonly {
                readonly platform: "android" | "ios";
                readonly available: boolean;
                readonly reason?: string | undefined;
            }[];
            readonly tools?: {
                readonly hub: {
                    readonly requiredVersion: string;
                    readonly installedVersions: readonly string[];
                    readonly runningVersion: string | null;
                };
                readonly agent: {
                    readonly requiredVersion: string;
                    readonly installedVersions: readonly string[];
                    readonly runningVersion: string | null;
                };
            } | undefined;
            readonly toolInspectionError?: string | undefined;
            readonly hubInstalled: boolean;
            readonly agentDeviceInstalled: boolean;
            readonly kind: "local" | "ssh";
        } | {
            readonly id: string;
            readonly label: string;
            readonly platforms: readonly {
                readonly platform: "android" | "ios";
                readonly available: boolean;
                readonly reason?: string | undefined;
            }[];
            readonly tools?: {
                readonly hub: {
                    readonly requiredVersion: string;
                    readonly installedVersions: readonly string[];
                    readonly runningVersion: string | null;
                };
                readonly agent: {
                    readonly requiredVersion: string;
                    readonly installedVersions: readonly string[];
                    readonly runningVersion: string | null;
                };
            } | undefined;
            readonly toolInspectionError?: string | undefined;
            readonly hubInstalled: boolean;
            readonly agentDeviceInstalled: boolean;
            readonly kind: "eas";
        })[];
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("effect/Cause").NoSuchElementError | import("effect/rpc/RpcClientError").RpcClientError>>;
    configure: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly enabled?: boolean | undefined;
                readonly agentAccessEnabled?: boolean | undefined;
                readonly onboardingCompleted?: boolean | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly supportsHostRetry?: boolean | undefined;
            readonly supportsToolUpdate?: boolean | undefined;
            readonly supportsToolInspection?: boolean | undefined;
            readonly supportsEasHosts?: boolean | undefined;
            readonly hostStatus: "disabled" | "failed" | "idle" | "installing" | "ready" | "starting";
            readonly hostStatusDetail?: string | undefined;
            readonly hostStatuses: {
                readonly [x: string]: {
                    readonly status: "disabled" | "failed" | "idle" | "installing" | "ready" | "starting";
                    readonly detail?: string | undefined;
                    readonly androidDiscoveryIncomplete?: boolean | undefined;
                };
            };
            readonly devices: readonly {
                readonly hostId: string;
                readonly id: string;
                readonly platform: "android" | "ios";
                readonly name: string;
                readonly version: string;
                readonly booted: boolean;
                readonly physical: boolean;
            }[];
            readonly sessions: readonly {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly hostId: string;
                readonly deviceId: string;
                readonly platform: "android" | "ios";
                readonly openedAt: string;
            }[];
            readonly bootingDevices?: readonly {
                readonly hostId: string;
                readonly id: string;
                readonly platform: "android" | "ios";
                readonly name: string;
                readonly version: string;
                readonly booted: boolean;
                readonly physical: boolean;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            }[] | undefined;
            readonly onboardingCompleted: boolean;
            readonly agentAccessEnabled: boolean;
            readonly hubBasePath: string;
            readonly revision: number;
            readonly hosts: readonly ({
                readonly id: string;
                readonly label: string;
                readonly platforms: readonly {
                    readonly platform: "android" | "ios";
                    readonly available: boolean;
                    readonly reason?: string | undefined;
                }[];
                readonly tools?: {
                    readonly hub: {
                        readonly requiredVersion: string;
                        readonly installedVersions: readonly string[];
                        readonly runningVersion: string | null;
                    };
                    readonly agent: {
                        readonly requiredVersion: string;
                        readonly installedVersions: readonly string[];
                        readonly runningVersion: string | null;
                    };
                } | undefined;
                readonly toolInspectionError?: string | undefined;
                readonly hubInstalled: boolean;
                readonly agentDeviceInstalled: boolean;
                readonly kind: "local" | "ssh";
            } | {
                readonly id: string;
                readonly label: string;
                readonly platforms: readonly {
                    readonly platform: "android" | "ios";
                    readonly available: boolean;
                    readonly reason?: string | undefined;
                }[];
                readonly tools?: {
                    readonly hub: {
                        readonly requiredVersion: string;
                        readonly installedVersions: readonly string[];
                        readonly runningVersion: string | null;
                    };
                    readonly agent: {
                        readonly requiredVersion: string;
                        readonly installedVersions: readonly string[];
                        readonly runningVersion: string | null;
                    };
                } | undefined;
                readonly toolInspectionError?: string | undefined;
                readonly hubInstalled: boolean;
                readonly agentDeviceInstalled: boolean;
                readonly kind: "eas";
            })[];
        }, E | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    testHost: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly kind: "ssh";
                readonly id: string;
                readonly label: string;
                readonly target: string;
                readonly identityFile?: string | undefined;
                readonly port?: number | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly id: string;
            readonly label: string;
            readonly platforms: readonly {
                readonly platform: "android" | "ios";
                readonly available: boolean;
                readonly reason?: string | undefined;
            }[];
            readonly tools?: {
                readonly hub: {
                    readonly requiredVersion: string;
                    readonly installedVersions: readonly string[];
                    readonly runningVersion: string | null;
                };
                readonly agent: {
                    readonly requiredVersion: string;
                    readonly installedVersions: readonly string[];
                    readonly runningVersion: string | null;
                };
            } | undefined;
            readonly toolInspectionError?: string | undefined;
            readonly hubInstalled: boolean;
            readonly agentDeviceInstalled: boolean;
            readonly kind: "local" | "ssh";
        } | {
            readonly id: string;
            readonly label: string;
            readonly platforms: readonly {
                readonly platform: "android" | "ios";
                readonly available: boolean;
                readonly reason?: string | undefined;
            }[];
            readonly tools?: {
                readonly hub: {
                    readonly requiredVersion: string;
                    readonly installedVersions: readonly string[];
                    readonly runningVersion: string | null;
                };
                readonly agent: {
                    readonly requiredVersion: string;
                    readonly installedVersions: readonly string[];
                    readonly runningVersion: string | null;
                };
            } | undefined;
            readonly toolInspectionError?: string | undefined;
            readonly hubInstalled: boolean;
            readonly agentDeviceInstalled: boolean;
            readonly kind: "eas";
        }, E | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    easAccount: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly hostId?: string | undefined;
                readonly accessToken?: string | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly signedInAs: string;
            readonly credentialSource: "eas-login" | "env" | "settings";
            readonly apps: readonly {
                readonly id: string;
                readonly fullName: string;
            }[];
        }, E | import("@t3tools/contracts").DeviceEasAccountError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    list: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly updateTool?: "agent" | "hub" | undefined;
                readonly inspectOnly?: boolean | undefined;
                readonly retryHostId?: string | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly supportsHostRetry?: boolean | undefined;
            readonly supportsToolUpdate?: boolean | undefined;
            readonly supportsToolInspection?: boolean | undefined;
            readonly supportsEasHosts?: boolean | undefined;
            readonly hostStatus: "disabled" | "failed" | "idle" | "installing" | "ready" | "starting";
            readonly hostStatusDetail?: string | undefined;
            readonly hostStatuses: {
                readonly [x: string]: {
                    readonly status: "disabled" | "failed" | "idle" | "installing" | "ready" | "starting";
                    readonly detail?: string | undefined;
                    readonly androidDiscoveryIncomplete?: boolean | undefined;
                };
            };
            readonly devices: readonly {
                readonly hostId: string;
                readonly id: string;
                readonly platform: "android" | "ios";
                readonly name: string;
                readonly version: string;
                readonly booted: boolean;
                readonly physical: boolean;
            }[];
            readonly sessions: readonly {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly hostId: string;
                readonly deviceId: string;
                readonly platform: "android" | "ios";
                readonly openedAt: string;
            }[];
            readonly bootingDevices?: readonly {
                readonly hostId: string;
                readonly id: string;
                readonly platform: "android" | "ios";
                readonly name: string;
                readonly version: string;
                readonly booted: boolean;
                readonly physical: boolean;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            }[] | undefined;
            readonly onboardingCompleted: boolean;
            readonly agentAccessEnabled: boolean;
            readonly hubBasePath: string;
            readonly revision: number;
            readonly hosts: readonly ({
                readonly id: string;
                readonly label: string;
                readonly platforms: readonly {
                    readonly platform: "android" | "ios";
                    readonly available: boolean;
                    readonly reason?: string | undefined;
                }[];
                readonly tools?: {
                    readonly hub: {
                        readonly requiredVersion: string;
                        readonly installedVersions: readonly string[];
                        readonly runningVersion: string | null;
                    };
                    readonly agent: {
                        readonly requiredVersion: string;
                        readonly installedVersions: readonly string[];
                        readonly runningVersion: string | null;
                    };
                } | undefined;
                readonly toolInspectionError?: string | undefined;
                readonly hubInstalled: boolean;
                readonly agentDeviceInstalled: boolean;
                readonly kind: "local" | "ssh";
            } | {
                readonly id: string;
                readonly label: string;
                readonly platforms: readonly {
                    readonly platform: "android" | "ios";
                    readonly available: boolean;
                    readonly reason?: string | undefined;
                }[];
                readonly tools?: {
                    readonly hub: {
                        readonly requiredVersion: string;
                        readonly installedVersions: readonly string[];
                        readonly runningVersion: string | null;
                    };
                    readonly agent: {
                        readonly requiredVersion: string;
                        readonly installedVersions: readonly string[];
                        readonly runningVersion: string | null;
                    };
                } | undefined;
                readonly toolInspectionError?: string | undefined;
                readonly hubInstalled: boolean;
                readonly agentDeviceInstalled: boolean;
                readonly kind: "eas";
            })[];
        }, E | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    open: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly platform: "android" | "ios";
                readonly boot?: boolean | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly hostId: string;
            readonly deviceId: string;
            readonly platform: "android" | "ios";
            readonly openedAt: string;
        }, E | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    close: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly hostId?: string | undefined;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly deviceId?: string | undefined;
                readonly shutdown?: boolean | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    shutdown: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly platform: "android" | "ios";
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    detail: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
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
        }, E | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    action: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "setAppearance";
                readonly value: "dark" | "light";
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "setTextSize";
                readonly value: "default" | "extra-large" | "large" | "small";
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "setToggle";
                readonly setting: "increaseContrast" | "networkEnabled" | "reduceMotion" | "reduceTransparency" | "showBorders" | "voiceOver";
                readonly value: boolean;
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "setLiquidGlass";
                readonly value: "clear" | "tinted";
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "setColorFilter";
                readonly value: "blue-yellow" | "grayscale" | "green-red" | "none" | "red-green";
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "setOrientation";
                readonly value: "landscape_left" | "landscape_right" | "portrait" | "portrait_upside_down";
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "setLocation";
                readonly latitude: number;
                readonly longitude: number;
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "clearLocation";
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "setPermission";
                readonly appId: string;
                readonly permission: "calendar" | "camera" | "contacts" | "faceid" | "location" | "media-library" | "microphone" | "motion" | "notifications" | "photos" | "reminders";
                readonly decision: "grant" | "reset" | "revoke";
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "openUrl";
                readonly url: string;
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "launchApp";
                readonly appId: string;
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "terminateApp";
                readonly appId: string;
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "shake";
            } | {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly type: "sendPush";
                readonly appId: string;
                readonly payload: string | {
                    readonly [x: string]: unknown;
                };
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
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
        }, E | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
};
/** @throws {never} */
export declare function deviceToolVersionLabels(tools: DeviceToolVersions | undefined): string[];
/** @throws {never} */
export declare function deviceToolUpdatePolicy(tools: DeviceToolVersions | undefined): "Required tools are installed automatically when needed. Checking versions does not install or start anything." | "Update pending. Required tools will install automatically when next used. The host needs network access; an older install is not used as a fallback." | "Versions have not been checked. Reconnect the host and check versions.";
export declare const deviceToolUpdateOwnership = "This environment's T3 server chooses device tool versions for itself and its SSH hosts. Update that server to receive newer tool versions; updating only your browser or mobile app does not update a remote server.";
