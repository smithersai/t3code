import { type MessageBus } from "dbus-next";
import type { SnapShotKeyChord } from "@t3tools/contracts";
export { portalShortcutTrigger } from "./linuxCaptureSession.ts";
export interface PortalShortcutState {
    readonly shortcutActionRegistered?: boolean;
    readonly shortcutRegistered: boolean;
    readonly shortcutPending: boolean;
    readonly shortcutCanRetry?: boolean;
    readonly shortcutLabel?: string;
    readonly shortcutMessage: string | null;
}
export declare class PortalCaptureShortcut {
    state: PortalShortcutState;
    readonly ready: Promise<void>;
    private closed;
    private owner;
    private namespace;
    private session;
    private shortcutId;
    private version;
    private pending;
    private responses;
    private readonly stopped;
    private rejectStopped;
    private readonly onCapture;
    private readonly onStateChanged;
    private readonly bus;
    private readonly managedByHyprland;
    /** @throws {never} */
    constructor(appId: string, shortcut: SnapShotKeyChord, onCapture: 
    /** @throws {never} */
    () => void, onStateChanged: 
    /** @throws {never} */
    () => void, bus?: MessageBus, managedByHyprland?: boolean);
    /** @throws {never} */
    close: () => void;
    get hasSession(): boolean;
    /** @throws {never} */
    configure(): Promise<void>;
    private update;
    private failed;
    private wait;
    private call;
    private closeObject;
    private message;
    private request;
    private bound;
    private initialize;
}
