import * as Effect from "effect/Effect";
import * as SourceControlProviderRegistry from "../sourceControl/SourceControlProviderRegistry.js";
export declare const resolveThreadTitleLinks: (input: {
    message: string;
    cwd: string;
}) => Effect.Effect<string | undefined, never, SourceControlProviderRegistry.SourceControlProviderRegistry>;
