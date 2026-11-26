import * as Effect from "effect/Effect";

export const readImportMetaEnvBASEURL = Effect.sync(() => import.meta.env.BASE_URL);
