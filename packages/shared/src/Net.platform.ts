import * as NodeNet from "node:net";

import * as Effect from "effect/Effect";
import * as Predicate from "effect/Predicate";

const isErrnoExceptionWithCode = (
  cause: unknown,
): cause is {
  readonly code: string;
} =>
  Predicate.isObject(cause) &&
  Predicate.hasProperty(cause, "code") &&
  Predicate.isString(cause.code);

const closeServer = (server: NodeNet.Server) => {
  try {
    server.close();
  } catch {}
};

export const canListenOnHost = (port: number, host: string): Effect.Effect<boolean> =>
  Effect.callback<boolean>((resume) => {
    const server = NodeNet.createServer();
    let settled = false;

    const settle = (value: boolean) => {
      if (settled) return;
      settled = true;
      resume(Effect.succeed(value));
    };

    server.unref();

    server.once("error", (cause) => {
      // Missing IPv6 addresses or kernel support do not mean the port is occupied.
      if (
        isErrnoExceptionWithCode(cause) &&
        (cause.code === "EADDRNOTAVAIL" || cause.code === "EAFNOSUPPORT")
      ) {
        settle(true);
        return;
      }
      settle(false);
    });

    server.once("listening", () => {
      server.close(() => {
        settle(true);
      });
    });

    server.listen({ host, port });

    return Effect.sync(() => {
      closeServer(server);
    });
  });

export const hasListenerOnHost = (port: number, host: string): Effect.Effect<boolean> =>
  Effect.callback<boolean>((resume) => {
    const socket = NodeNet.createConnection({ host, port });
    let settled = false;

    const settle = (value: boolean) => {
      if (settled) return;
      settled = true;
      socket.destroy();
      resume(Effect.succeed(value));
    };

    socket.unref();
    socket.setTimeout(250);
    socket.once("connect", () => {
      settle(true);
    });
    socket.once("error", () => {
      settle(false);
    });
    socket.once("timeout", () => {
      settle(false);
    });

    return Effect.sync(() => {
      socket.destroy();
    });
  });

export const reserveLoopbackPort = <E>(
  host: string,
  errors: { readonly listenFailed: (cause: unknown) => E; readonly noPort: () => E },
): Effect.Effect<number, E> =>
  Effect.callback<number, E>((resume) => {
    const probe = NodeNet.createServer();
    let settled = false;

    const settle = (effect: Effect.Effect<number, E>) => {
      if (settled) return;
      settled = true;
      resume(effect);
    };

    probe.once("error", (cause) => {
      settle(Effect.fail(errors.listenFailed(cause)));
    });

    probe.listen(0, host, () => {
      const address = probe.address();
      const port = typeof address === "object" && address !== null ? address.port : 0;
      probe.close(() => {
        if (port > 0) {
          settle(Effect.succeed(port));
          return;
        }
        settle(Effect.fail(errors.noPort()));
      });
    });

    return Effect.sync(() => {
      closeServer(probe);
    });
  });
