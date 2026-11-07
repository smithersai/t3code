export { completeQueuedMessageDelivery, createThreadOutboxDelivery, prepareQueuedMessageAttachments, recoverEditedCreationAfterDelivery, removeAcknowledgedExistingThreadMessage, restoreRejectedQueuedMessage, } from "./threadOutboxDelivery.vibe.platform.js";
/**
 * App-lifetime: loads the persisted outbox and delivers queued messages.
 * @throws {never}
 */
export declare function installThreadOutboxDelivery(): 
/** @throws {never} */
() => void;
