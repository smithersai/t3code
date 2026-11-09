import * as NodeOS from "node:os";
import * as Effect from "effect/Effect";

export const readOSNetworkInterfaces = Effect.sync(() => NodeOS.networkInterfaces());

// The platform code of DirectEndpoints.vibe, which a .vibe file does not import as a value (EK4402).

import * as NodeNet from "node:net";

import { isTailnetHost } from "@t3tools/shared/hostClassification";
import { isPrivateNetworkAddress } from "../startupAccess.ts";

export type NetworkInterfacesMap = ReturnType<typeof NodeOS.networkInterfaces>;
// Credentials travel over HTTP; public IPs leak them and hostnames can resolve differently per client.
export const isAdvertisableAddress = (address: string): boolean =>
  NodeNet.isIPv4(address) && !address.startsWith("127.") && isPrivateNetworkAddress(address);
// macOS utun names need Tailscale's IPv6 range to identify them; WARP shares its IPv4 range.
export const isTailscaleInterface = (
  name: string,
  entries: ReadonlyArray<NodeOS.NetworkInterfaceInfo>,
): boolean =>
  /^tailscale/i.test(name) ||
  entries.some((entry) => entry.family === "IPv6" && isTailnetHost(entry.address));
/**
 * AWS, GCP, Azure, DigitalOcean, Hetzner, Linode, Vultr, and Oracle all serve
 * instance metadata at this address. A plain TCP connect skips HTTP proxies,
 * which would otherwise answer for a machine that is not in a cloud.
 */
const CLOUD_METADATA_ADDRESS = "169.254.169.254";
const CLOUD_METADATA_TIMEOUT_MS = 300;
export const probeCloudMetadata = Effect.callback<boolean>((resume) => {
  const socket = NodeNet.connect({
    host: CLOUD_METADATA_ADDRESS,
    port: 80,
    timeout: CLOUD_METADATA_TIMEOUT_MS,
  });
  let settled = false;
  const settle = (found: boolean) => {
    if (settled) return;
    settled = true;
    socket.destroy();
    resume(Effect.succeed(found));
  };
  socket.once("connect", () => settle(true));
  socket.once("timeout", () => settle(false));
  socket.once("error", () => settle(false));
  return Effect.sync(() => socket.destroy());
});
