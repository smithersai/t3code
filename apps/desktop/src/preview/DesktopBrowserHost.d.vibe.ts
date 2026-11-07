/** The manager owns the single debugger attachment; the relay shares it. */
import * as Layer from "effect/Layer";
import { DesktopBrowserHost } from "./DesktopBrowserHost.vibe.platform.js";
export { DesktopBrowserHost, make } from "./DesktopBrowserHost.vibe.platform.js";
export type { DesktopBrowserTabDebugger, DesktopBrowserTabKey } from "./DesktopBrowserHost.vibe.platform.js";
export declare const layer: Layer.Layer<DesktopBrowserHost, never, never>;
