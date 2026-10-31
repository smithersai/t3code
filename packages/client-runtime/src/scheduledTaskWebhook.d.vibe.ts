import { ScheduledTaskWebhookFilter, type ScheduledTaskWebhookFilterOp } from "@t3tools/contracts";
export declare const DEFAULT_WEBHOOK_PROMPT = "Handle this webhook:\n{{body}}";
/** Blank means "no limit"; undefined means the input is not a valid limit, which blocks saving. */
export declare function parseMaxDeliveryAge(value: string): number | null | undefined;
/**
 * One editable filter row. `in` takes a comma-separated list, which is
 * lossless because list values can't contain commas; `exists` ignores the value.
 */
export interface WebhookFilterDraft {
    /** Stable row identity for the form; never sent to the server. */
    readonly id: string;
    readonly path: string;
    readonly op: ScheduledTaskWebhookFilterOp;
    readonly value: string;
}
export declare const WEBHOOK_FILTER_OPS: ReadonlyArray<{
    readonly op: ScheduledTaskWebhookFilterOp;
    readonly label: string;
}>;
export declare function emptyWebhookFilterDraft(): WebhookFilterDraft;
/** By id, so a removed row's identity never passes to the row after it. */
export declare function removeWebhookFilterDraft(drafts: ReadonlyArray<WebhookFilterDraft>, id: string): ReadonlyArray<WebhookFilterDraft>;
export declare function webhookFilterDrafts(filters: ReadonlyArray<ScheduledTaskWebhookFilter> | undefined): ReadonlyArray<WebhookFilterDraft>;
/**
 * Checks each row with the server's own schema, so a draft that parses here
 * also saves. The error names the first row that would not.
 */
export declare function parseWebhookFilterDrafts(drafts: ReadonlyArray<WebhookFilterDraft>): {
    readonly filters: ReadonlyArray<ScheduledTaskWebhookFilter>;
} | {
    readonly error: string;
};
/**
 * Whether a form's filter rows differ from the ones it opened with. A save
 * leaves `filters` out unless they did, so editing only the title can't
 * overwrite filters another device changed in the meantime.
 */
export declare function webhookFilterDraftsChanged(saved: ReadonlyArray<WebhookFilterDraft>, current: ReadonlyArray<WebhookFilterDraft>): boolean;
