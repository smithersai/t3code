import * as Layer from "effect/Layer";
import * as MobileDatabase from "./mobile-database";
import * as MobilePreferences from "./mobile-preferences";
import * as MobileSecureStorage from "./mobile-secure-storage.vibe";
import * as MobileStorage from "./mobile-storage";
export declare const layer: Layer.Layer<import("../../node_modules/@t3tools/client-runtime/src/platform/persistence.ts").EnvironmentCacheStore | MobileDatabase.MobileDatabase | MobilePreferences.MobilePreferencesStore | MobileSecureStorage.MobileSecureStorage | MobileStorage.MobileStorage, never, never>;
