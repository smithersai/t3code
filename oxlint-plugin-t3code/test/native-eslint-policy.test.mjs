import { describe, expect, it } from "vitest";
import { Linter } from "eslint";
import { fileURLToPath } from "node:url";
import nativeConfig from "../../.vibelang/eslint.config.mjs";

const root = fileURLToPath(new URL("../../", import.meta.url));
const source = 'import { makeClient } from "../rpc/protocol.ts";';
const messagesFor = (filename) =>
  new Linter({ cwd: root })
    .verify(source, nativeConfig, { filename: root + filename })
    .filter((message) => message.ruleId === "t3code/no-rpc-permission-bypass");

describe("native modules keep the configured RPC boundary policy", () => {
  it("keeps the native-only bridge valid for ordinary TypeScript test paths", () => {
    const filename = root + "packages/client-runtime/src/connection/example.test.ts";
    expect(() => new Linter({ cwd: root }).verify("export const value = 1;", nativeConfig, { filename })).not.toThrow();
  });
  it("keeps the reviewed host update boundary allowed", () => {
    expect(messagesFor("packages/client-runtime/src/connection/outdatedHostUpdate.vibe")).toEqual([]);
  });
  it("rejects the same raw import outside the reviewed boundary", () => {
    expect(messagesFor("packages/client-runtime/src/state/unapproved-native-access.vibe")).toHaveLength(1);
  });
  it("also protects unreviewed native JSX modules", () => {
    expect(messagesFor("packages/client-runtime/src/state/unapproved-native-access.vibex")).toHaveLength(1);
  });
});
