import * as Layer from "effect/Layer";
import { MobileStorage } from "./mobile-storage.vibe.platform.js";
export { MobileDeviceIdGenerationError, MobileStorage, MobileStorageDecodeError, MobileStorageEncodeError, make, } from "./mobile-storage.vibe.platform.js";
export type { AgentAwarenessRegistrationRecord, RecentThreadShortcut } from "./mobile-storage.vibe.platform.js";
export declare const layer: Layer.Layer<MobileStorage, never, import("./mobile-secure-storage.vibe").MobileSecureStorage>;
