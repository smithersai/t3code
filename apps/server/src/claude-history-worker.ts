// Source runs spawn this file without a loader; resolve it at runtime to keep it out of the packaged worker.
if (import.meta.url.endsWith(".ts")) {
  await import(import.meta.resolve("vibelang/register"));
}
const { runClaudeHistoryWorker } = await import("./claudeHistoryWorker.vibe");

const [method, sessionId, rawOptions] = process.argv.slice(2);
await runClaudeHistoryWorker(method, sessionId, rawOptions);
