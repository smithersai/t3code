#!/usr/bin/env node
import "vibelang/register";
if (import.meta.main) (await import("./t3-sqlite-state.main.vibe")).main();
