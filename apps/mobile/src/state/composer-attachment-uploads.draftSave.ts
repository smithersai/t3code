import { ComposerDraftPersistenceError } from "./use-composer-drafts.vibe";

export function keepUploadedReferenceOnDraftSaveFailure(error: unknown): void {
  if (!(error instanceof ComposerDraftPersistenceError)) throw error;
  console.warn("[composer-attachments] could not save the uploaded reference", error);
}
