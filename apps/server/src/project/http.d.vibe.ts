import * as ServerRuntimeStartup from "../serverRuntimeStartup.ts";
import * as ProjectService from "./ProjectService.ts";
export declare const layer: import("effect/Layer").Layer<import("effect/http-api/HttpApiGroup").Service<"environment", "projects">, never, import("@t3tools/contracts").EnvironmentAuthenticatedAuth | ProjectService.ProjectService | ServerRuntimeStartup.ServerRuntimeStartup>;
