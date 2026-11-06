import { ComposerContextRecord } from "@t3tools/contracts";
/** Converts in memory on read; never rewrites event history. */
export interface UpgradedLegacyContext {
    text: string;
    records: ComposerContextRecord[];
}
/** @throws {never} */
export declare function upgradeLegacyContextMessage(text: string): UpgradedLegacyContext;
