import fc from "fast-check";
import { assert, it } from "@effect/vitest";
import rule from "./no-rpc-permission-bypass.vibe";

const reportsFor = (
  source: string,
  imported: string,
  importKind: "type" | "value" = "value",
  allowGuardInstallation = false,
) => {
  let reports = 0;
  if (rule.create === undefined) throw new Error("Rule visitor is unavailable");
  const visitor = rule.create({
    options: [{ allowGuardInstallation }],
    report: (_diagnostic: unknown) => { reports++; },
  } as never) as unknown as { ImportDeclaration(node: unknown): void };
  visitor.ImportDeclaration({
    type: "ImportDeclaration",
    importKind,
    source: { type: "Literal", value: source },
    specifiers: [{
      type: "ImportSpecifier",
      imported: { type: "Identifier", name: imported },
    }],
  });
  return reports;
};

const prefix = fc.array(fc.constantFrom("..", "src", "nested", "@t3tools"), { maxLength: 5 })
  .map((parts) => parts.length ? parts.join("/") + "/" : "");

it("guards native RPC client and index imports at every prefix", () => {
  fc.assert(fc.property(prefix, fc.constantFrom("client", "index"), (base, entry) => {
    assert.strictEqual(reportsFor(base + "rpc/" + entry + ".vibe", "RpcPermissionGuard"), 1);
  }), { numRuns: 150 });
});

it("blocks native protocol value imports while allowing type imports", () => {
  fc.assert(fc.property(prefix, (base) => {
    const path = base + "rpc/protocol.vibe";
    assert.strictEqual(reportsFor(path, "makeClient"), 1);
    assert.strictEqual(reportsFor(path, "Rpc", "type"), 0);
  }), { numRuns: 150 });
});

it("retains guard installation authority and ordinary public helpers", () => {
  fc.assert(fc.property(prefix, (base) => {
    const path = base + "rpc/client.vibe";
    assert.strictEqual(reportsFor(path, "RpcPermissionGuard", "value", true), 0);
    assert.strictEqual(reportsFor(path, "request"), 0);
  }), { numRuns: 150 });
});

it("does not treat declaration sidecars or similarly named modules as boundaries", () => {
  fc.assert(fc.property(prefix, fc.constantFrom("client.d.vibe.ts", "index.d.vibe.ts", "protocol.d.vibe.ts", "client-extra.vibe"), (base, entry) => {
    assert.strictEqual(reportsFor(base + "rpc/" + entry, "RpcPermissionGuard"), 0);
  }), { numRuns: 150 });
});
