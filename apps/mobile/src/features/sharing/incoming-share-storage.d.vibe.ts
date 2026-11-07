import { type IncomingShareDraft } from "./incoming-share-model.vibe";
export { IncomingShareStorageError, loadIncomingShareDrafts } from "./incoming-share-storage.vibe.platform.js";
/** @throws {never} */
export declare function writeIncomingShareDraft(draft: IncomingShareDraft): Promise<void>;
/** @throws {never} */
export declare function removeIncomingShareDraft(shareId: string): Promise<void>;
