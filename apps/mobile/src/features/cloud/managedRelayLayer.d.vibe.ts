import { ManagedRelay } from "@t3tools/client-runtime/relay";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Layer from "effect/Layer";
export declare const layer: (relayUrl: string) => Layer.Layer<ManagedRelay.ManagedRelayClient | ManagedRelay.ManagedRelayDpopSigner, never, Crypto.Crypto | import("effect/http/HttpClient").HttpClient>;
