import * as Effect from "effect/Effect";
import * as Cache from "./Cache.js";
export declare const batchSize = 256;
export declare const run: () => Effect.Effect<void, Cache.CacheError, Cache.Cache>;
