// The platform code of CliTokenManager.vibe, which a .vibe file does not import as a value (EK4402).
// @effect-diagnostics nodeBuiltinImport:off - The CLI loopback OAuth callback is a Node HTTP boundary.
import * as NodeHttp from "node:http";

import * as NodeHttpServer from "@effect/platform-node/NodeHttpServer";

export const loopbackCallbackServerLayer = (port: number) =>
  NodeHttpServer.layer(NodeHttp.createServer, {
    host: "127.0.0.1",
    port,
    disablePreemptiveShutdown: true,
  });
