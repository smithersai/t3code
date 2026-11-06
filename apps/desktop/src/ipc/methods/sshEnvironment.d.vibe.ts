import { type RemoteEnvironmentAuthError } from "@t3tools/client-runtime/authorization";
import { SshHttpBridgeError } from "@t3tools/ssh/errors";
import * as Schema from "effect/Schema";
import * as DesktopIpc from "../DesktopIpc.ts";
import * as DesktopSshEnvironment from "../../ssh/DesktopSshEnvironment.vibe";
import * as DesktopSshPasswordPrompts from "../../ssh/DesktopSshPasswordPrompts.ts";
type DesktopSshEnvironmentRequestOperation = "fetch-environment-descriptor" | "bootstrap-bearer-session" | "fetch-session-state" | "issue-websocket-ticket";
type DesktopSshEnvironmentRequestCause = RemoteEnvironmentAuthError | SshHttpBridgeError;
declare const DesktopSshEnvironmentRequestError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "DesktopSshEnvironmentRequestError";
} & Readonly<A>;
export declare class DesktopSshEnvironmentRequestError extends DesktopSshEnvironmentRequestError_base<{
    readonly operation: DesktopSshEnvironmentRequestOperation;
    readonly cause: DesktopSshEnvironmentRequestCause;
    readonly sshHttpStatus: number | null;
}> {
    get message(): string;
}
export declare const discoverSshHosts: DesktopIpc.DesktopIpcMethod<Schema.SchemaError | import("@t3tools/ssh/errors").SshHostDiscoveryError, DesktopSshEnvironment.DesktopSshEnvironment>;
export declare const resolveSshHost: DesktopIpc.DesktopIpcMethod<Schema.SchemaError | import("@t3tools/ssh/errors").SshCommandError | import("@t3tools/ssh/errors").SshInvalidTargetError, DesktopSshEnvironment.DesktopSshEnvironment>;
export declare const ensureSshEnvironment: DesktopIpc.DesktopIpcMethod<import("@t3tools/shared/Net").NetError | Schema.SchemaError | import("@t3tools/ssh/errors").SshCommandError | import("@t3tools/ssh/errors").SshInvalidTargetError | import("@t3tools/ssh/errors").SshLaunchError | import("@t3tools/ssh/errors").SshPairingError | import("@t3tools/ssh/errors").SshReadinessError, DesktopSshEnvironment.DesktopSshEnvironment>;
export declare const disconnectSshEnvironment: DesktopIpc.DesktopIpcMethod<Schema.SchemaError | DesktopSshEnvironment.DesktopSshEnvironmentOperationError, DesktopSshEnvironment.DesktopSshEnvironment>;
export declare const fetchSshEnvironmentDescriptor: DesktopIpc.DesktopIpcMethod<DesktopSshEnvironmentRequestError | Schema.SchemaError, import("effect/http/HttpClient").HttpClient>;
export declare const bootstrapSshBearerSession: DesktopIpc.DesktopIpcMethod<DesktopSshEnvironmentRequestError | Schema.SchemaError, import("effect/http/HttpClient").HttpClient>;
export declare const fetchSshSessionState: DesktopIpc.DesktopIpcMethod<DesktopSshEnvironmentRequestError | Schema.SchemaError, import("effect/http/HttpClient").HttpClient>;
export declare const issueSshWebSocketTicket: DesktopIpc.DesktopIpcMethod<DesktopSshEnvironmentRequestError | Schema.SchemaError, import("effect/http/HttpClient").HttpClient>;
export declare const resolveSshPasswordPrompt: DesktopIpc.DesktopIpcMethod<Schema.SchemaError | DesktopSshPasswordPrompts.DesktopSshPasswordPromptResolveError, DesktopSshPasswordPrompts.DesktopSshPasswordPrompts>;
export {};
