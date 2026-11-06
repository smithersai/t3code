import type { AtomCommand } from "@t3tools/client-runtime/state/runtime";
import { EnvironmentAuthorizationError, type EnvironmentId } from "@t3tools/contracts";
export declare const attachmentEnvironment: {
    createUploadUrl: AtomCommand<{
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly type: "file";
            readonly name: string;
            readonly mimeType: string;
            readonly sizeBytes: number;
        } | {
            readonly type?: "image" | undefined;
            readonly name: string;
            readonly mimeType: "image/gif" | "image/jpeg" | "image/png" | "image/webp";
            readonly sizeBytes: number;
        };
    }, {
        readonly attachmentId: string;
        readonly relativeUrl: string;
        readonly expiresAt: number;
    }, import("@t3tools/contracts").AttachmentUploadSigningKeyError | import("@t3tools/client-runtime/platform").ConnectionPersistenceError | EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>;
    remove: AtomCommand<{
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly attachmentId: string;
        };
    }, void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>;
};
