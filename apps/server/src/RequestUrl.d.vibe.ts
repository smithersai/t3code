import { HttpServerRequest } from "effect/http";
import type * as Option from "effect/Option";
/**
 * The request's URL with Effect 4.0's origin rule: `x-forwarded-proto: https`
 * marks an HTTPS origin behind a TLS proxy such as Tailscale Serve. Effect
 * 4.1's `toURL` reads only a protocol that trusted-proxy middleware set.
 * @throws {never}
 */
export declare const toURL: (request: HttpServerRequest.HttpServerRequest) => Option.Option<URL>;
