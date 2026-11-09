import * as NodeNet from "node:net";
import * as NodeEvents from "node:events";
import { expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Fiber from "effect/Fiber";
import { readFrame, writeFrame } from "./CodexManagedTokenProtocol.vibe";

function sockets<A, E, R>(
  run: (socket: NodeNet.Socket, peer: NodeNet.Socket) => Effect.Effect<A, E, R>,
) {
  return Effect.scoped(
    Effect.gen(function* () {
      const listener = yield* Effect.acquireRelease(
        Effect.sync(() => NodeNet.createServer()),
        (server) =>
          Effect.promise(() => new Promise<void>((resolve) => server.close(() => resolve()))),
      );
      listener.listen(0, "127.0.0.1");
      yield* Effect.promise(() => NodeEvents.EventEmitter.once(listener, "listening"));
      const address = listener.address();
      if (address === null || typeof address === "string")
        throw new Error("Expected a TCP listener");
      const accepted = NodeEvents.EventEmitter.once(listener, "connection");
      const peer = yield* Effect.acquireRelease(
        Effect.sync(() => NodeNet.createConnection(address.port, "127.0.0.1")),
        (connection) => Effect.sync(() => connection.destroy()),
      );
      const connected = NodeEvents.EventEmitter.once(peer, "connect");
      const [socket] = yield* Effect.promise(() => accepted as Promise<[NodeNet.Socket]>);
      yield* Effect.addFinalizer(() => Effect.sync(() => socket.destroy()));
      yield* Effect.promise(() => connected);
      return yield* run(socket, peer);
    }),
  );
}

it.live.each(["", "a", "hello", "é", "漢字", "🙂", "a".repeat(127), "🙂".repeat(64)])(
  "reads and writes a complete UTF-8 frame: %j",
  (text) =>
    Effect.gen(function* () {
      yield* sockets((socket, peer) =>
        Effect.gen(function* () {
          const received = yield* Effect.forkChild(
            readFrame(socket, Buffer.byteLength(text) + 1, 1000),
          );
          peer.write(text + "\n");
          expect(yield* Fiber.join(received)).toBe(text);
        }),
      );
      yield* sockets((socket, peer) =>
        Effect.gen(function* () {
          const chunks: Buffer[] = [];
          peer.on("data", (chunk) => chunks.push(chunk));
          const ended = NodeEvents.EventEmitter.once(peer, "end");
          yield* writeFrame(socket, text, Buffer.byteLength(text) + 1);
          yield* Effect.promise(() => ended);
          expect(Buffer.concat(chunks).toString("utf8")).toBe(text + "\n");
        }),
      );
    }),
);

it.live("rejects an oversized incoming UTF-8 frame", () =>
  sockets((socket, peer) =>
    Effect.gen(function* () {
      const failure = yield* Effect.forkChild(readFrame(socket, 2, 1000).pipe(Effect.flip));
      peer.write("🙂\n");
      expect((yield* Fiber.join(failure))._tag).toBe("ManagedTokenProtocolError");
    }),
  ),
);

it.live("rejects an oversized outgoing UTF-8 frame", () =>
  sockets((socket) =>
    Effect.gen(function* () {
      const failure = yield* writeFrame(socket, "🙂", 4).pipe(Effect.flip);
      expect(failure._tag).toBe("ManagedTokenProtocolError");
    }),
  ),
);

it.live("releases frame listeners when an idle peer times out", () =>
  sockets((socket) =>
    Effect.gen(function* () {
      const failure = yield* readFrame(socket, 1024, 20).pipe(Effect.flip);
      expect(failure._tag).toBe("ManagedTokenProtocolError");
      expect(socket.listenerCount("data")).toBe(0);
    }),
  ),
);
