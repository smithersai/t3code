
import { ESLint } from "eslint";
import assert from "node:assert/strict";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const linter = new ESLint({ overrideConfigFile: fileURLToPath(new URL("./eslint.config.mjs", import.meta.url)) });
const body = 'import { useEffect } from "react";\nexport function useFixture() {\nDIRECTIVE  useEffect(() => () => {}, []);\n}\n';

for (const [name, directive, reported] of [
  ["an unsuppressed effect", "", true],
  ["a reasoned Oxlint directive", "  // oxlint-disable-next-line t3code/no-unreasoned-state-sync -- owns an external listener until unmount\n", false],
  ["a directive for another rule", "  // oxlint-disable-next-line no-debugger -- another rule\n", true],
  ["a native-only directive", "  // oxlint-disable-next-line react/exhaustive-effect-dependencies -- handled by the native linter\n", true],
  ["a mixed native and mirrored directive", "  // oxlint-disable-next-line react/exhaustive-effect-dependencies, t3code/no-unreasoned-state-sync -- owns an external listener until unmount\n", false],
  ["a reason-only directive", "  // oxlint-disable-next-line -- no rule was selected\n", true],
]) {
  test(name, async () => {
    const result = await linter.lintText(body.replace("DIRECTIVE", directive), { filePath: root + "apps/mobile/src/commentAdapterFixture.vibe" });
    const messages = result.flatMap(result => result.messages);
    assert.equal(messages.some(message => message.ruleId === "t3code/no-unreasoned-state-sync"), reported, JSON.stringify(messages));
    assert(!messages.some(message => message.fatal || /Definition for rule/.test(message.message)), JSON.stringify(messages));
  });
}
test("a suppression still needs its reason", async () => {
  const result = await linter.lintText(body.replace("DIRECTIVE", "  // oxlint-disable-next-line t3code/no-unreasoned-state-sync\n"), { filePath: root + "apps/mobile/src/commentAdapterFixture.vibe" });
  assert(result.flatMap(result => result.messages).some(message => message.ruleId === "t3code/require-suppression-reason"), JSON.stringify(result));
});
