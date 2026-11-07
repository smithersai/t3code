import { type RelayClientInstallProgressEvent, type RelayClientInstallProgressStage } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
declare const RelayClientInstallConfirmationConflictError_base: Schema.Class<RelayClientInstallConfirmationConflictError, Schema.TaggedStruct<"RelayClientInstallConfirmationConflictError", {
    readonly requestedVersion: Schema.String;
    readonly activeVersion: Schema.String;
    readonly activeDialogStatus: Schema.Literals<readonly ["confirming", "installing", "closing"]>;
    readonly activeInstallStage: Schema.optional<Schema.Literals<readonly ["checking", "waiting_for_lock", "downloading", "verifying", "installing", "validating", "activating"]>>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayClientInstallConfirmationConflictError extends RelayClientInstallConfirmationConflictError_base {
    get message(): string;
}
export type RelayClientInstallDialogState = {
    readonly status: "idle";
} | {
    readonly status: "confirming";
    readonly version: string;
} | {
    readonly status: "installing";
    readonly version: string;
    readonly stage: RelayClientInstallProgressStage;
} | {
    readonly status: "closing";
    readonly view: {
        readonly status: "confirming";
        readonly version: string;
    } | {
        readonly status: "installing";
        readonly version: string;
        readonly stage: RelayClientInstallProgressStage;
    };
};
export declare function readRelayClientInstallDialogState(): RelayClientInstallDialogState;
export declare function subscribeRelayClientInstallDialog(listener: () => void): () => void;
export declare function requestRelayClientInstallConfirmation(version: string): Promise<boolean>;
export declare function respondToRelayClientInstallConfirmation(confirmed: boolean): void;
export declare function reportRelayClientInstallProgress(event: RelayClientInstallProgressEvent): void;
export declare function finishRelayClientInstall(): void;
export declare function completeRelayClientInstallDialogClose(): void;
export declare function resetRelayClientInstallDialogForTests(): void;
export {};
