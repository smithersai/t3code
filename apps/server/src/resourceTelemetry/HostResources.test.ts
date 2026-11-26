import * as NodeServices from "@effect/platform-node/NodeServices";
import { expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as HostResources from "./HostResources.vibe";

it.live("samples host CPU and memory through the platform services", () =>
  Effect.gen(function* () {
    const resources = yield* HostResources.HostResources;
    const snapshot = yield* resources.read;
    expect(snapshot.cpuCount).toBeGreaterThanOrEqual(0);
    expect(Number.isFinite(snapshot.totalMemoryBytes)).toBe(true);
    expect(snapshot.totalMemoryBytes).toBeGreaterThan(0);
    expect(snapshot.availableMemoryBytes).toBeGreaterThanOrEqual(0);
    expect(snapshot.availableMemoryBytes).toBeLessThanOrEqual(snapshot.totalMemoryBytes);
    if (snapshot.cpuUtilization !== null) {
      expect(snapshot.cpuUtilization).toBeGreaterThanOrEqual(0);
      expect(snapshot.cpuUtilization).toBeLessThanOrEqual(1);
    }
  }).pipe(Effect.provide(HostResources.layer), Effect.provide(NodeServices.layer), Effect.scoped),
);
