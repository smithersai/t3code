import * as NodeOS from "node:os";
import * as Effect from "effect/Effect";

export const readCpu = Effect.sync(() => {
  const cpus = NodeOS.cpus();
  const cpu = cpus.reduce(
    (sum, { times }) => ({
      idle: sum.idle + times.idle,
      total: sum.total + times.user + times.nice + times.sys + times.idle + times.irq,
    }),
    { idle: 0, total: 0 },
  );
  return { ...cpu, count: cpus.length };
});

export const totalMemory = Effect.sync(() => NodeOS.totalmem());
export const availableMemory = Effect.sync(() => NodeOS.freemem());
