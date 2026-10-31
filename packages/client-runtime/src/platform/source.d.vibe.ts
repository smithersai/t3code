import * as Context from "effect/Context";
import type * as Stream from "effect/Stream";
import type { PlatformConnectionRegistration } from "../connection/catalog.vibe";
declare const PlatformConnectionSource_base: Context.ServiceClass<PlatformConnectionSource, "@t3tools/client-runtime/platform/source/PlatformConnectionSource", {
    readonly registrations: Stream.Stream<ReadonlyArray<PlatformConnectionRegistration>>;
}>;
export declare class PlatformConnectionSource extends PlatformConnectionSource_base {
}
export {};
