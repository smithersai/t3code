import type { EnvironmentId, PreviewOpenInput, PreviewRuntime, PreviewSessionSnapshot, PreviewViewportSetting, ScopedThreadRef } from "@t3tools/contracts";
import type { AtomCommandResult } from "@t3tools/client-runtime/state/runtime";
import { BrowserSettingsReadError } from "~/browser/openFileInPreview";
interface OpenPreviewSessionInput<E> {
    openPreview: (input: {
        readonly environmentId: EnvironmentId;
        readonly input: PreviewOpenInput;
    }) => Promise<AtomCommandResult<PreviewSessionSnapshot, E>>;
    threadRef: ScopedThreadRef;
    url?: string;
    viewport?: PreviewViewportSetting;
    profileId?: string;
    runtime?: PreviewRuntime;
}
export declare function openPreviewSession<E>(input: OpenPreviewSessionInput<E>): Promise<AtomCommandResult<PreviewSessionSnapshot, E | BrowserSettingsReadError>>;
export {};
