import * as MobilePreferences from "./mobile-preferences";
import * as MobileStorage from "./mobile-storage.vibe";
export type { Preferences } from "./mobile-preferences";
export type { AgentAwarenessRegistrationRecord, RecentThreadShortcut } from "./mobile-storage.vibe";
export { MobilePreferencesLoadError, MobilePreferencesSaveError } from "./mobile-preferences";
export { MobileDeviceIdGenerationError, MobileStorageDecodeError, MobileStorageEncodeError, } from "./mobile-storage.vibe";
export { MobileSecureStorageError } from "./mobile-secure-storage.vibe";
/** @throws {never} */
export declare const loadSavedConnections: () => Promise<readonly import("../lib/connection.ts").SavedRemoteConnection[]>;
/** @throws {never} */
export declare const saveConnection: (connection: Parameters<MobileStorage.MobileStorage["Service"]["saveConnection"]>[0]) => Promise<void>;
/** @throws {never} */
export declare const loadPreferences: () => Promise<MobilePreferences.Preferences>;
/** @throws {never} */
export declare const savePreferencesPatch: (patch: Partial<MobilePreferences.Preferences>) => Promise<MobilePreferences.Preferences>;
/** @throws {never} */
export declare const updatePreferences: (transform: 
/** @throws {never} */
(current: MobilePreferences.Preferences) => Partial<MobilePreferences.Preferences>) => Promise<MobilePreferences.Preferences>;
/** @throws {never} */
export declare const loadOrCreateAgentAwarenessDeviceId: () => Promise<string>;
/** @throws {never} */
export declare const loadAgentAwarenessDeviceId: () => Promise<string | null>;
/** @throws {never} */
export declare const loadAgentAwarenessRegistrationRecord: () => Promise<MobileStorage.AgentAwarenessRegistrationRecord | null>;
/** @throws {never} */
export declare const saveAgentAwarenessRegistrationRecord: (record: MobileStorage.AgentAwarenessRegistrationRecord) => Promise<void>;
/** @throws {never} */
export declare const clearAgentAwarenessRegistrationRecord: () => Promise<void>;
/** @throws {never} */
export declare const loadRecentThreadShortcuts: () => Promise<readonly MobileStorage.RecentThreadShortcut[]>;
/** @throws {never} */
export declare const saveRecentThreadShortcuts: (threads: ReadonlyArray<MobileStorage.RecentThreadShortcut>) => Promise<void>;
