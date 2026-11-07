import * as PullRequestService from "./PullRequestService.ts";
export declare const layer: import("effect/Layer").Layer<import("effect/http-api/HttpApiGroup").Service<"environment", "pullRequests">, never, import("@t3tools/contracts").EnvironmentAuthenticatedAuth | PullRequestService.PullRequestService>;
