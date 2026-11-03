import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { BrokerStartError } from "./CodexManagedTokenBroker.vibe.platform.js";
declare const CodexManagedTokenBroker_base: Context.ServiceClass<CodexManagedTokenBroker, "t3/provider/CodexManagedTokenBroker", {
    readonly endpoint: Effect.Effect<string, BrokerStartError>;
    readonly awaitIdle: Effect.Effect<void>;
}>;
export declare class CodexManagedTokenBroker extends CodexManagedTokenBroker_base {
}
export declare const layer: Layer.Layer<CodexManagedTokenBroker, never, import("@t3tools/shared/Crypto").Crypto | import("effect/http/HttpClient").HttpClient | import("../environment/ServerEnvironment.ts").ServerEnvironmentIdentity | import("../auth/ServerSecretStore.ts").ServerSecretStore>;
export {};
