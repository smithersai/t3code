#!/usr/bin/env node
export * from "./apply-web-brand-assets.main.vibe";
if (import.meta.main) (await import("./apply-web-brand-assets.main.vibe")).main();
