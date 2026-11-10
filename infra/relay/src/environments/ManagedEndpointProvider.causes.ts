export function isManagedEndpointNotFound(cause: unknown): boolean {
  if (typeof cause !== "object" || cause === null) {
    return false;
  }
  if ("_tag" in cause && (cause._tag === "NotFound" || cause._tag === "TunnelNotFound")) {
    return true;
  }
  if ("status" in cause && cause.status === 404) {
    return true;
  }
  return "cause" in cause && isManagedEndpointNotFound(cause.cause);
}

export function isCloudflareRateLimited(cause: unknown): boolean {
  if (typeof cause !== "object" || cause === null) {
    return false;
  }
  if (
    "_tag" in cause &&
    (cause._tag === "TooManyRequests" ||
      cause._tag === "CloudflareRateLimited" ||
      cause._tag === "CloudflareApiPaused")
  ) {
    return true;
  }
  if ("status" in cause && cause.status === 429) {
    return true;
  }
  return "cause" in cause && isCloudflareRateLimited(cause.cause);
}

/**
 * Cloudflare refuses to delete a tunnel while a connector is still attached,
 * either one that has not finished draining or another runtime still serving
 * the tunnel.
 */
export function isManagedEndpointTunnelInUse(cause: unknown): boolean {
  if (typeof cause !== "object" || cause === null) {
    return false;
  }
  if (
    "message" in cause &&
    typeof cause.message === "string" &&
    cause.message.includes("has active connections")
  ) {
    return true;
  }
  return "cause" in cause && isManagedEndpointTunnelInUse(cause.cause);
}
