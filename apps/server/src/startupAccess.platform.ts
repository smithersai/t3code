import * as NodeNet from "node:net";
import * as NodeOS from "node:os";

/** @throws {never} */
export function isIPv4(input: string): boolean {
  return NodeNet.isIPv4(input);
}

/** @throws {never} */
export function readNetworkInterfaces(): ReturnType<typeof NodeOS.networkInterfaces> {
  return NodeOS.networkInterfaces();
}
