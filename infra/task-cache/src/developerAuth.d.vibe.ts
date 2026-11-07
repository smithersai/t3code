import * as Effect from "effect/Effect";
export declare const developerIdentity: (request: Request, encodedKeys: string | undefined) => Effect.Effect<string | null | undefined, never, never>;
