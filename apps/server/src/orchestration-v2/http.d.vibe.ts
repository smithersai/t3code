import * as SqlClient from "effect/sql/SqlClient";
import * as ServerEnvironment from "../environment/ServerEnvironment.ts";
import * as OrchestrationEventStore from "../persistence/OrchestrationEventStore.vibe";
import * as ProjectEnrichmentService from "../project/ProjectEnrichmentService.ts";
import * as ThreadManagementService from "./ThreadManagementService.ts";
import * as ProjectStore from "./ProjectStore.ts";
export declare const layer: import("effect/Layer").Layer<import("effect/http-api/HttpApiGroup").Service<"environment", "orchestration">, never, import("@t3tools/contracts").EnvironmentAuthenticatedAuth | OrchestrationEventStore.OrchestrationEventStore | ProjectEnrichmentService.ProjectEnrichmentService | ProjectStore.ProjectStoreV2 | ServerEnvironment.ServerEnvironmentIdentity | SqlClient.SqlClient | ThreadManagementService.ThreadManagementService>;
