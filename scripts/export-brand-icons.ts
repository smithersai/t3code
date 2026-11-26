#!/usr/bin/env node
export * from "./export-brand-icons.main.vibe";
if (import.meta.main) (await import("./export-brand-icons.main.vibe")).main();
