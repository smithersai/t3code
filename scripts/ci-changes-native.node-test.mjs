import * as NodeAssert from "node:assert/strict";
import * as NodeModule from "node:module";
import * as NodeTest from "node:test";
import fc from "fast-check";

const require = NodeModule.createRequire(import.meta.url);
const { decide } = require("../.github/scripts/ci-changes.cjs");
const packages = [
  { name: "shared", dir: "packages/shared", hasTest: true, deps: [] },
  { name: "consumer", dir: "packages/consumer", hasTest: true, deps: ["shared"] },
  { name: "island", dir: "packages/island", hasTest: true, deps: [] },
];
const setup = fc.constantFrom("HostProcess", "testing/longTempDir");
const otherPaths = fc.array(
  fc.constantFrom("docs/guide.md", "packages/shared/src/other.ts", "packages/island/src/other.ts"),
  { maxLength: 5 },
);

NodeTest.test("TypeScript shared setup changes run every CI job", (t) => {
  t.mock.method(console, "error", () => {});
  for (const name of ["HostProcess", "testing/longTempDir"]) {
    const result = decide(["packages/shared/src/" + name + ".ts"], packages, false);
    NodeAssert.equal(result.outputs.rust, true);
    NodeAssert.equal(result.outputs.test_packages, "");
    NodeAssert.deepEqual(result.affected, ["consumer", "island", "shared"]);
  }
});

NodeTest.test("native shared setup preserves the TypeScript CI decision", (t) => {
  t.mock.method(console, "error", () => {});
  fc.assert(
    fc.property(setup, fc.constantFrom("vibe", "vibex"), otherPaths, (name, kind, others) => {
      const before = decide(["packages/shared/src/" + name + ".ts", ...others], packages, false);
      const after = decide(
        ["packages/shared/src/" + name + "." + kind, ...others],
        packages,
        false,
      );
      NodeAssert.deepEqual(after, before);
    }),
    { numRuns: 100 },
  );
});

NodeTest.test("generated native declarations do not select every CI job", (t) => {
  t.mock.method(console, "error", () => {});
  fc.assert(
    fc.property(
      setup,
      fc.constantFrom("vibe", "vibex"),
      fc.stringMatching(/^[a-z][a-z0-9]{0,12}$/),
      (name, kind, body) => {
        for (const suffix of [".d." + kind + ".ts", "." + kind + "." + body + ".d.ts"]) {
          const result = decide(["packages/shared/src/" + name + suffix], packages, false);
          NodeAssert.equal(result.outputs.rust, false);
          NodeAssert.equal(result.affected.includes("island"), false);
          NodeAssert.deepEqual(result.affected, ["consumer", "shared"]);
        }
      },
    ),
    { numRuns: 100 },
  );
});
