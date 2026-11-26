import { expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Cause from "effect/Cause";
import * as Exit from "effect/Exit";
import * as Schema from "effect/Schema";
import * as RelayDb from "../db.vibe";
import * as CloudflareApiPause from "./CloudflareApiPause.vibe";
import * as ManagedEndpointAllocations from "./ManagedEndpointAllocations.vibe";

it.effect.prop(
  "keeps pause query construction in the fiber and preserves its defect",
  { detail: Schema.String, until: Schema.Int },
  ({ detail, until }) =>
    Effect.gen(function* () {
      const defect = { detail };
      let calls = 0;
      const db = {
        select: () => ({
          from: () => ({ where: () => ({ limit: () => Effect.succeed([]) }) }),
        }),
        insert: () => {
          calls++;
          throw defect;
        },
      };
      const pause = yield* CloudflareApiPause.make.pipe(Effect.provideService(RelayDb.RelayDb, db));
      const program = pause.pauseUntil(until);
      expect(calls).toBe(0);
      const exit = yield* Effect.exit(program);
      expect(Exit.isFailure(exit)).toBe(true);
      expect(exit.cause.reasons.filter(Cause.isDieReason).map((reason) => reason.defect)).toEqual([
        defect,
      ]);
      expect(calls).toBe(1);
    }),
  { arbitrary: { runs: 100 } },
);

it.effect.prop(
  "keeps batched allocation query defects distinct from database failures",
  {
    detail: Schema.String,
    step: Schema.Literals(["select", "from", "leftJoin", "where"]),
    databaseFailure: Schema.Boolean,
  },
  ({ detail, step, databaseFailure }) =>
    Effect.gen(function* () {
      const defect = { detail };
      const visited = [];
      const query = {
        select: () => advance("select"),
        from: () => advance("from"),
        leftJoin: () => advance("leftJoin"),
        where: () => {
          advance("where");
          return Effect.fail(defect);
        },
      };
      function advance(current) {
        visited.push(current);
        if (!databaseFailure && current === step) throw defect;
        return query;
      }
      const allocations = yield* ManagedEndpointAllocations.make.pipe(
        Effect.provideService(RelayDb.RelayDb, query),
      );
      const program = allocations.listByTunnelNames(["first", "second"]);
      expect(visited).toEqual([]);
      const exit = yield* Effect.exit(program);
      expect(Exit.isFailure(exit)).toBe(true);
      if (databaseFailure) {
        const failures = exit.cause.reasons.filter(Cause.isFailReason);
        expect(failures).toHaveLength(1);
        expect(failures[0].error.operation).toBe("list-tunnels");
        expect(failures[0].error.cause).toBe(defect);
      } else {
        expect(exit.cause.reasons.filter(Cause.isDieReason).map((reason) => reason.defect)).toEqual(
          [defect],
        );
      }
    }),
  { arbitrary: { runs: 100 } },
);
