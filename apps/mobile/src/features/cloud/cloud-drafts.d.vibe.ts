import { EnvironmentRegistry } from "@t3tools/client-runtime/connection";
import * as Schema from "effect/Schema";
declare const CloudDraftArchiveError_base: Schema.Class<CloudDraftArchiveError, Schema.TaggedStruct<"CloudDraftArchiveError", {
    readonly environmentCount: Schema.Number;
    readonly hasAccountId: Schema.Boolean;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class CloudDraftArchiveError extends CloudDraftArchiveError_base {
    get message(): string;
}
export declare const removeCloudEnvironments: import("@t3tools/client-runtime/state/runtime").AtomCommand<string | null, void, CloudDraftArchiveError | import("@t3tools/client-runtime/platform").ConnectionPersistenceError | EnvironmentRegistry.PlatformEnvironmentRemovalError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>;
export {};
