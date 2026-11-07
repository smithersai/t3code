import { type MessageBus } from "dbus-next";
import type { DesktopCaptureExtensionState } from "@t3tools/contracts";
type SetupPaths = {
    readonly bundle: string;
    readonly dataHome: string;
};
/** @throws {never} */
export declare function installGnomeCaptureBundle({ bundle, dataHome }: SetupPaths): Promise<void>;
export declare class GnomeCaptureSetup {
    private readonly disconnected;
    private readonly paths;
    private readonly bus;
    private failure;
    /** @throws {never} */
    constructor(paths: SetupPaths, bus?: MessageBus);
    /** @throws {never} */
    close(): void;
    private call;
    /** @throws {never} */
    state(): Promise<DesktopCaptureExtensionState>;
    /** @throws {never} */
    perform(action: "install-extension" | "enable-extension" | "disable-extension"): Promise<void>;
}
export {};
