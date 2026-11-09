// The platform code of localSshDeviceHost.vibe, which a .vibe file does not import as a value (EK4402).
import * as NodeDnsPromises from "node:dns/promises";
import * as NodeNet from "node:net";
import * as NodeOS from "node:os";
import * as Context from "effect/Context";

export const LocalDeviceHostAddresses = Context.Reference<ReadonlySet<string>>(
  "LocalDeviceHostAddresses",
  {
    defaultValue: () =>
      new Set(
        Object.values(NodeOS.networkInterfaces()).flatMap(
          (entries) => entries?.map((entry) => entry.address) ?? [],
        ),
      ),
  },
);

/** @throws {never} */
export function isIpAddress(value: string): number {
  return NodeNet.isIP(value);
}

export function lookupAllAddresses(hostname: string) {
  return NodeDnsPromises.lookup(hostname, { all: true });
}
