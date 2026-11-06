import type { ProviderDriverKind, ThreadId } from "@t3tools/contracts";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import type * as ProviderEventLoggers from "@t3tools/provider-core/server/ProviderEventLoggers";
import type * as AcpSessionRuntime from "./AcpSessionRuntime.ts";
export declare const makeAcpNativeLoggerFactory: () => Effect.Effect<
/** @throws {never} */
(input: {
    readonly nativeEventLogger: ProviderEventLoggers.EventNdjsonLogger | undefined;
    readonly provider: ProviderDriverKind;
    readonly threadId: ThreadId;
    readonly verboseProtocolLogging?: boolean;
}) => Pick<AcpSessionRuntime.AcpSessionRuntimeOptions, "requestLogger" | "protocolLogging">, never, Crypto.Crypto>;
