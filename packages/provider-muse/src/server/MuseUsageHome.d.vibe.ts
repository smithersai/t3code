import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
declare const MuseUsageHome_base: Context.ServiceClass<MuseUsageHome, "@t3tools/provider-muse/server/MuseUsageHome", {
    readonly resolve: (input: {
        readonly binaryPath: string;
        readonly environment: NodeJS.ProcessEnv;
    }) => Effect.Effect<string | undefined>;
}>;
export declare class MuseUsageHome extends MuseUsageHome_base {
}
export declare const layer: Layer.Layer<MuseUsageHome, never, never>;
export {};
