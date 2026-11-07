import { type DeviceHubAccess } from "@t3tools/client-runtime/state/deviceHubAccess";
import { type DeviceDetail, type DeviceServiceState, type EnvironmentId } from "@t3tools/contracts";
import { AsyncResult, Atom, AtomRegistry } from "effect/reactivity";
export declare const deviceEnvironment: {
    state: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {};
    }) => Atom.Atom<AsyncResult.AsyncResult<{
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
    }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("effect/Cause").NoSuchElementError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    configure: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly enabled?: boolean | undefined;
                readonly agentAccessEnabled?: boolean | undefined;
                readonly onboardingCompleted?: boolean | undefined;
            };
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
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
        }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    testHost: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly kind: "ssh";
                readonly id: string;
                readonly label: string;
                readonly target: string;
                readonly identityFile?: string | undefined;
                readonly port?: number | undefined;
            };
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
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
        }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    easAccount: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly hostId?: string | undefined;
                readonly accessToken?: string | undefined;
            };
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
            readonly signedInAs: string;
            readonly credentialSource: "eas-login" | "env" | "settings";
            readonly apps: readonly {
                readonly id: string;
                readonly fullName: string;
            }[];
        }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").DeviceEasAccountError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    list: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly updateTool?: "agent" | "hub" | undefined;
                readonly inspectOnly?: boolean | undefined;
                readonly retryHostId?: string | undefined;
            };
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
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
        }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    open: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly platform: "android" | "ios";
                readonly boot?: boolean | undefined;
            };
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly hostId: string;
            readonly deviceId: string;
            readonly platform: "android" | "ios";
            readonly openedAt: string;
        }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    close: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly hostId?: string | undefined;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly deviceId?: string | undefined;
                readonly shutdown?: boolean | undefined;
            };
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    shutdown: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
                readonly platform: "android" | "ios";
            };
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    detail: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly hostId?: string | undefined;
                readonly deviceId: string;
            };
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
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
        }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    action: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
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
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
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
        }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").DeviceActionUnavailableError | import("@t3tools/contracts").DeviceBootError | import("@t3tools/contracts").DeviceHostUnavailableError | import("@t3tools/contracts").DeviceNotFoundError | import("@t3tools/contracts").DeviceOperationError | import("@t3tools/contracts").DevicePlatformUnavailableError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
};
export declare function useDeviceState(environmentId: EnvironmentId | null): {
    readonly state: DeviceServiceState;
    readonly loaded: boolean;
};
export declare function useDeviceHubAccess(environmentId: EnvironmentId | null, hostId?: string): DeviceHubAccess | null;
export declare function refreshDeviceHubAccess(environmentId: EnvironmentId): void;
/** Mints a fresh hub ticket for a one-off request that failed with 401. Resolves null on failure. */
export declare function renewDeviceHubAccess(environmentId: EnvironmentId, hostId?: string): Promise<DeviceHubAccess | null>;
export interface DeviceDetailKey {
    readonly environmentId: EnvironmentId;
    readonly hostId: string;
    readonly deviceId: string;
}
export interface DeviceDetailView {
    /** Settings the host last confirmed, by a read or by an action's answer. */
    readonly detail: DeviceDetail | null;
    readonly error: string | null;
}
export declare const deviceDetailAtom: (arg: DeviceDetailKey) => Atom.Writable<DeviceDetailView, DeviceDetailView>;
/**
 * Reads a device's settings into its detail view while mounted. Reads and
 * actions share one serial lane per environment, so a read never answers
 * before an action that was sent ahead of it.
 */
export declare const deviceDetailReadAtom: (arg: DeviceDetailKey) => Atom.Atom<AsyncResult.AsyncResult<void, never>>;
/**
 * Probes the environment's device hosts while mounted. Remote hosts report
 * their platforms only after a probe. Probing never installs or starts helpers.
 */
export declare const deviceHostProbeAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<AsyncResult.AsyncResult<void, never>>;
export declare const NO_DEVICE_PROBE_ATOM: Atom.Writable<AsyncResult.Initial<void, never>, AsyncResult.Initial<void, never>>;
/**
 * The Expo account an EAS host editor shows as it opens, for the saved
 * credential. Each open checks again; edits and manual checks use the command.
 */
export declare const deviceEasAccountCheck: (target: {
    readonly environmentId: EnvironmentId;
    readonly input: {
        readonly hostId?: string | undefined;
        readonly accessToken?: string | undefined;
    };
}) => Atom.Atom<AsyncResult.AsyncResult<{
    readonly signedInAs: string;
    readonly credentialSource: "eas-login" | "env" | "settings";
    readonly apps: readonly {
        readonly id: string;
        readonly fullName: string;
    }[];
}, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").DeviceEasAccountError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | Error | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
