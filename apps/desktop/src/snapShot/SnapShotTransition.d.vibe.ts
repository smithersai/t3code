import * as Electron from "electron";
type SnapShotAnimationDetails = {
    readonly appName: string;
    readonly windowTitle: string;
    readonly appIconDataUrl?: string | undefined;
};
export type SnapShotAnimationDestination = {
    readonly frame: Electron.Rectangle;
    readonly relativeFrame?: Electron.Rectangle | undefined;
    readonly backgroundColor: string;
    readonly borderColor: string;
    readonly borderWidth: number;
    readonly cornerRadius: number;
    readonly scaleFactor: number;
    readonly details?: SnapShotAnimationDetails | undefined;
};
type SnapShotTransitionOptions = {
    readonly showWindow?: ((window: Electron.BaseWindow) => void) | undefined;
    readonly boundOverlayToCaptureDisplays?: boolean | undefined;
    readonly waitForCompositorFrame?: boolean | undefined;
    readonly alwaysOnTopLevel?: NonNullable<Parameters<Electron.BrowserWindow["setAlwaysOnTop"]>[1]> | undefined;
};
export declare function snapShotAnimationDisplayBounds(displays: ReadonlyArray<Pick<Electron.Display, "bounds">>, source: Electron.Rectangle, destination: Electron.Rectangle): Array<Electron.Rectangle>;
export declare class SnapShotTransition {
    private active;
    private readonly boundOverlayToCaptureDisplays;
    private readonly waitForCompositorFrame;
    private readonly alwaysOnTopLevel;
    private readonly showWindow;
    get isAnimating(): boolean;
    constructor(options?: SnapShotTransitionOptions);
    begin(id: string, source: Electron.Rectangle, snapshotDataUrl: string, flash: boolean, destinationWindowBounds?: Electron.Rectangle): Promise<void>;
    private showOverlays;
    animateTo(id: string, destination: SnapShotAnimationDestination): void;
    private runFlight;
    waitForLanding(id: string): Promise<void>;
    complete(id: string): Promise<void>;
    dismiss(id: string): void;
    dispose(): void;
}
export {};
