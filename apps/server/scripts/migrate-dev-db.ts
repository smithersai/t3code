#!/usr/bin/env node
import "vibelang/register";
if (import.meta.main) (await import("./migrate-dev-db.main.vibe")).main();
