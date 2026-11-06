import * as ModelCatalog from "@t3tools/provider-core/server/ModelCatalog";
import type { ServerProviderDraft } from "@t3tools/provider-core/server/snapshotProbe";
/** @throws {never} */
export declare function applyCodexModelCatalog(draft: ServerProviderDraft, catalog: ModelCatalog.ProviderCatalog | undefined): ServerProviderDraft;
