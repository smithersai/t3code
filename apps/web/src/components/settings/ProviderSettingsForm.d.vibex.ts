import { type ProviderSettingsFormControl, type ProviderSettingsFormOption } from "@t3tools/contracts";
import type { ProviderClientDefinition } from "@t3tools/provider-core/client";
export type SettingsFormDefinition = Pick<ProviderClientDefinition, "settingsSchema"> & {
    readonly driverKind?: ProviderClientDefinition["driverKind"];
};
export interface ProviderSettingsFieldModel {
    readonly key: string;
    readonly control: ProviderSettingsFormControl;
    readonly label: string;
    readonly description?: string | undefined;
    readonly placeholder?: string | undefined;
    readonly clearWhenEmpty: "omit" | "persist";
    /** Kept in the server's secret store: a saved value arrives as `SECRET_REDACTED` and never shows. */
    readonly secret?: boolean | undefined;
    readonly defaultBooleanValue?: boolean | undefined;
    readonly options?: ReadonlyArray<ProviderSettingsFormOption> | undefined;
}
/** @throws {never} */
export declare function deriveProviderSettingsFields(definition: SettingsFormDefinition, value?: unknown): ReadonlyArray<ProviderSettingsFieldModel>;
/**
 * Editable rows seeded from a configured value. `seen` is the value the rows
 * were last reconciled against; `lastPublished` is what the rows last sent to
 * the owner, so its echo does not reseed rows (and drop their ids) mid-edit.
 */
export interface RowsDraft<V, R> {
    readonly rows: ReadonlyArray<R>;
    readonly seen: V;
    readonly lastPublished: V | undefined;
}
/** @throws {never} */
export declare function seedRowsDraft<V, R>(value: V, toRows: 
/** @throws {never} */
(value: V) => ReadonlyArray<R>): RowsDraft<V, R>;
/**
 * Reseeds the rows when the configured value changes from outside this editor.
 * @throws {never}
 */
export declare function reconcileRowsDraft<V, R>(draft: RowsDraft<V, R>, incoming: V, equal: 
/** @throws {never} */
(left: V, right: V) => boolean, toRows: 
/** @throws {never} */
(value: V) => ReadonlyArray<R>): RowsDraft<V, R>;
/** @throws {never} */
export declare function nextProviderConfigWithFieldValue(config: unknown, field: ProviderSettingsFieldModel, value: string | boolean): Record<string, unknown> | undefined;
interface ProviderSettingsFormProps {
    readonly definition: SettingsFormDefinition;
    readonly value: unknown;
    readonly idPrefix: string;
    readonly variant: "card" | "dialog" | "settings";
    /** @throws {never} */
    readonly onChange: (nextConfig: Record<string, unknown> | undefined) => void;
}
/** @throws {never} */
export declare function ProviderSettingsForm({ definition, value, idPrefix, variant, onChange, }: ProviderSettingsFormProps): import("react").JSX.Element | null;
export {};
