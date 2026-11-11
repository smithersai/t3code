// `alchemy deploy` and `alchemy destroy` load alchemy.run.ts by name; the stack is defined in alchemy.run.main.vibe.
import "vibelang/register";

export default (await import("./alchemy.run.main.vibe")).default;
