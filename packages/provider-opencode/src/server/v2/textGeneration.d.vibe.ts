import * as Effect from "effect/Effect";
import * as ProviderHost from "@t3tools/provider-core/server/ProviderHost";
import * as OpenCode2Server from "./OpenCode2Server.vibe";
export declare const make: () => Effect.Effect<import("@t3tools/provider-core/server/textGeneration").ProviderTextGeneration, never, OpenCode2Server.OpenCode2Server | ProviderHost.ProviderHost>;
