import type { OpenCodeClient } from "@opencode/client/effect";
import * as Effect from "effect/Effect";
import * as OpenCodeRuntime from "./OpenCodeRuntime.ts";
import type { OpenCode2Model } from "./status.ts";
/** Provider names are optional decoration; bound their read so models cannot stall. */
export declare const loadOpenCode2Catalog: (client: OpenCodeClient, directory: string) => Effect.Effect<ReadonlyArray<OpenCode2Model>, OpenCodeRuntime.OpenCodeRuntimeError>;
