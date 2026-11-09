// The platform code of ConnectReachability.vibe, which a .vibe file does not import as a value (EK4402).
import * as NodeNet from "node:net";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";

export const canOpenTcp = (host: string, port: number, timeout: Duration.Duration) =>
  Effect.callback<boolean>((resume) => {
    const socket = NodeNet.connect({ host, port });
    const finish = (connected: boolean) => {
      socket.destroy();
      resume(Effect.succeed(connected));
    };
    socket.setTimeout(Duration.toMillis(timeout), () => finish(false));
    socket.once("connect", () => finish(true));
    socket.once("error", () => finish(false));
    return Effect.sync(() => socket.destroy());
  });
