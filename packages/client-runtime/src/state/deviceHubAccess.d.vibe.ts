/**
 * `<img>`, `EventSource`, and `WebSocket` cannot set bearer or DPoP headers, so bearer and DPoP
 * connections mint a short-lived WebSocket ticket and pass it as `wsTicket`, the same way the
 * app's own `/ws` upgrade authenticates. Callers fetch a fresh one each time they (re)connect a
 * stream.
 */
import * as Effect from "effect/Effect";
import type { HttpClient } from "effect/http";
import type { PreparedConnection } from "../connection/model.vibe";
import type { RemoteEnvironmentRequestError } from "../rpc/http.ts";
import type { DeviceHubAccess } from "../device/hubAccess.ts";
export { type DeviceHubAccess, withDeviceHubQuery } from "../device/hubAccess.ts";
export declare const resolveDeviceHubAccess: (input: {
    readonly prepared: PreparedConnection;
    readonly hubBasePath: string;
}) => Effect.Effect<DeviceHubAccess, RemoteEnvironmentRequestError, HttpClient.HttpClient>;
