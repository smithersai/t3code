import { CommandId, type MessageId, type ServerSettingsError, type ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServerSettings from "../serverSettings.ts";
import * as TextGeneration from "../textGeneration/TextGeneration.ts";
import type { OrchestratorV2Error } from "./Orchestrator.ts";
import * as ProjectStore from "./ProjectStore.ts";
import * as ThreadManagementService from "./ThreadManagementService.ts";
export { formatThreadTitleContext } from "@t3tools/provider-core/server/threadTitleContext";
declare const ThreadTitleRegenerationService_base: Context.ServiceClass<ThreadTitleRegenerationService, "t3/orchestration-v2/ThreadTitleRegenerationService", {
    readonly execute: (input: {
        readonly threadId: ThreadId;
        readonly requestId: CommandId;
        readonly kind: {
            readonly type: "initial";
            readonly messageId: MessageId;
        } | {
            readonly type: "regenerate";
        };
    }) => Effect.Effect<void, OrchestratorV2Error | ProjectStore.ProjectStoreV2Error | ServerSettingsError | ThreadManagementService.ThreadManagementProviderInstanceDisabledError>;
}>;
export declare class ThreadTitleRegenerationService extends ThreadTitleRegenerationService_base {
}
export declare const layer: Layer.Layer<ThreadTitleRegenerationService, never, ProjectStore.ProjectStoreV2 | ServerSettings.ServerSettingsService | TextGeneration.TextGeneration | ThreadManagementService.ThreadManagementService>;
