import { type AttachmentCreateUploadUrlInput, type AttachmentCreateUploadUrlResult, type AttachmentDeleteInput, type EnvironmentId } from "@t3tools/contracts";
import type { AsyncResult, Atom, AtomRegistry } from "effect/reactivity";
import type { EnvironmentRegistry } from "../connection/registry.vibe";
import { type AtomCommand } from "./runtime.ts";
/** @throws {never} */
export declare function createAttachmentEnvironmentAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | R, E>): {
    createUploadUrl: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly type: "file";
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
            } | {
                readonly type?: "image";
                readonly name: string;
                readonly mimeType: "image/gif" | "image/jpeg" | "image/png" | "image/webp";
                readonly sizeBytes: number;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly attachmentId: string;
            readonly relativeUrl: string;
            readonly expiresAt: number;
        }, E | import("@t3tools/contracts").AttachmentUploadSigningKeyError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.vibe.platform.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    remove: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly attachmentId: string;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.vibe.platform.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
};
/**
 * Pending uploads expire, so this is the signal to upload the bytes again rather than retry the
 * lookup. A structural `_tag` check rather than a schema check: the squashed cause of a failed
 * RPC is not guaranteed to be a decoded error class instance, only a tagged value.
 * @throws {never}
 */
export declare function isAssetAttachmentNotFoundFailure(error: unknown): boolean;
export type PersistedAttachmentVerification = {
    readonly status: "verified";
} | {
    readonly status: "missing";
} | {
    readonly status: "failed";
    readonly error: unknown;
};
/** @throws {never} */
export declare function verifyPersistedAttachmentUpload<A, E>(input: {
    readonly registry: AtomRegistry.AtomRegistry;
    /** @throws {never} */
    readonly createAssetUrl: (query: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly resource: {
                readonly _tag: "attachment";
                readonly attachmentId: string;
            };
        };
    }) => Atom.Atom<AsyncResult.AsyncResult<A, E>>;
    readonly environmentId: EnvironmentId;
    readonly attachmentId: string;
}): Promise<PersistedAttachmentVerification>;
type AttachmentCreateUploadUrlCommand<E> = AtomCommand<{
    readonly environmentId: EnvironmentId;
    readonly input: AttachmentCreateUploadUrlInput;
}, AttachmentCreateUploadUrlResult, E>;
type AttachmentRemoveCommand<E> = AtomCommand<{
    readonly environmentId: EnvironmentId;
    readonly input: AttachmentDeleteInput;
}, unknown, E>;
/** @throws {never} */
export declare function deletePendingAttachmentUpload<E>(input: {
    readonly registry: AtomRegistry.AtomRegistry;
    readonly remove: AttachmentRemoveCommand<E>;
    readonly environmentId: EnvironmentId;
    readonly attachmentId: string;
}): void;
export interface AttachmentByteUpload {
    readonly done: Promise<void>;
    /** @throws {never} */
    readonly abort: () => void;
}
export type AttachmentUploadCycleResult = {
    readonly status: "uploaded";
    readonly attachmentId: string;
} | {
    readonly status: "cancelled";
    readonly attachmentId: string | null;
} | {
    readonly status: "failed";
    readonly step: "mint" | "resolve-url" | "transfer";
    readonly attachmentId: string | null;
    readonly error: unknown;
};
/**
 * The cycle never deletes the minted pending upload on failure: callers keep the returned
 * `attachmentId` and decide between retry and release. The one exception is `onMinted`
 * returning `"cancel"`, where the caller already abandoned the upload and the fresh mint is
 * deleted before returning.
 * @throws {never}
 */
export declare function runAttachmentUploadCycle<E, RE>(input: {
    readonly registry: AtomRegistry.AtomRegistry;
    readonly createUploadUrl: AttachmentCreateUploadUrlCommand<E>;
    readonly remove: AttachmentRemoveCommand<RE>;
    readonly environmentId: EnvironmentId;
    readonly upload: AttachmentCreateUploadUrlInput;
    /** @throws {never} */
    readonly resolveUploadUrl: (relativeUrl: string) => string | null;
    /** @throws {never} */
    readonly transport: (url: string) => AttachmentByteUpload;
    /** @throws {never} */
    readonly onMinted?: (attachmentId: string) => "continue" | "cancel";
    /** @throws {never} */
    readonly onTransferStart?: (abort: 
    /** @throws {never} */
    () => void) => void;
}): Promise<AttachmentUploadCycleResult>;
/**
 * The contract caps what a turn may reference, so a larger advertised value must not admit
 * files the send would then refuse.
 * @throws {never}
 */
export declare function clampFileAttachmentUploadBytes(advertisedMaxUploadBytes: number): number;
/** @throws {never} */
export declare function formatAttachmentSize(sizeBytes: number): string;
/** @throws {never} */
export declare function fileAttachmentTooLargeMessage(name: string, maxUploadBytes: number): string;
export {};
