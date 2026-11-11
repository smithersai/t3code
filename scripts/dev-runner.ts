#!/usr/bin/env node
export * from "./dev-runner.main.vibe";
if (import.meta.main) (await import("./dev-runner.main.vibe")).main();
