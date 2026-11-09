import type * as NodeNet from "node:net";
import * as Effect from "effect/Effect";

export const readFrame = <E>(
  socket: NodeNet.Socket,
  maxBytes: number,
  timeoutMs: number,
  ErrorType: new () => E,
) =>
  Effect.callback<string, E>((resume) => {
    let bytes = Buffer.alloc(0);
    const fail = () => resume(Effect.fail(new ErrorType()));
    const onData = (chunk: Buffer) => {
      if (bytes.length + chunk.length > maxBytes) return fail();
      bytes = Buffer.concat([bytes, chunk]);
      const end = bytes.indexOf(10);
      if (end < 0) return;
      if (end !== bytes.length - 1) return fail();
      resume(Effect.succeed(bytes.subarray(0, end).toString("utf8")));
    };
    socket.on("data", onData);
    socket.once("error", fail);
    socket.once("close", fail);
    socket.once("end", fail);
    return Effect.sync(() => {
      socket.off("data", onData);
      socket.off("error", fail);
      socket.off("close", fail);
      socket.off("end", fail);
    });
  }).pipe(
    Effect.timeoutOrElse({ duration: timeoutMs, orElse: () => Effect.fail(new ErrorType()) }),
  );

export const writeFrame = <E>(
  socket: NodeNet.Socket,
  frame: string,
  maxBytes: number,
  timeoutMs: number,
  ErrorType: new () => E,
) =>
  Effect.callback<void, E>((resume) => {
    if (socket.destroyed || Buffer.byteLength(frame) + 1 > maxBytes) {
      resume(Effect.fail(new ErrorType()));
      return;
    }
    const fail = () => resume(Effect.fail(new ErrorType()));
    socket.once("error", fail);
    socket.once("close", fail);
    socket.end(`${frame}\n`, () => resume(Effect.void));
    return Effect.sync(() => {
      socket.off("error", fail);
      socket.off("close", fail);
    });
  }).pipe(
    Effect.timeoutOrElse({
      duration: timeoutMs,
      orElse: () => Effect.fail(new ErrorType()),
    }),
  );
