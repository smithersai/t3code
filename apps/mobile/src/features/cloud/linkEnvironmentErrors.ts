import { ManagedRelay, relayRequestFailureDetail } from "@t3tools/client-runtime/relay";
import { CloudEnvironmentLinkError } from "./linkEnvironmentError.vibe";

export { CloudEnvironmentLinkError } from "./linkEnvironmentError.vibe";

/** @throws {never} */
export function decodedRelayClientError(message: string) {
  return (cause: ManagedRelay.ManagedRelayClientError) => {
    const failed = cause._tag === "ManagedRelayRequestFailedError" ? cause : undefined;
    const traceId = failed?.traceId;
    const detail = failed ? relayRequestFailureDetail(failed) : null;
    return new CloudEnvironmentLinkError({
      message: detail ? `${message}: ${detail}` : message,
      cause,
      ...(traceId ? { traceId } : {}),
    });
  };
}
