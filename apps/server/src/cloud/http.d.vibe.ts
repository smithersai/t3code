import * as CloudLink from "./CloudLink.ts";
import * as ConnectReachability from "./ConnectReachability.ts";
export declare const layer: import("effect/Layer").Layer<import("effect/http-api/HttpApiGroup").Service<"environment", "connect">, never, CloudLink.CloudLink | ConnectReachability.ConnectReachability | import("@t3tools/contracts").EnvironmentAuthenticatedAuth>;
