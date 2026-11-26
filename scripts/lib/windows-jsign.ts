// electron-builder loads this signing hook by path (win.signtoolOptions.sign) in its own process;
// the hook is defined in windows-jsign.main.vibe.
import "vibelang/register";

export default (await import("./windows-jsign.main.vibe")).default;
