/** id is CGWindowNumber on macOS or HWND on Windows, matching the capture backend. */
export type ActiveWindow = {
    readonly platform: "macos" | "windows";
    readonly id: number;
    readonly title: string;
    readonly bounds: {
        readonly x: number;
        readonly y: number;
        readonly width: number;
        readonly height: number;
    };
    readonly owner: {
        readonly name: string;
        readonly processId: number;
        readonly path: string;
        readonly bundleId?: string;
    };
};
/** @throws {never} */
export declare function activeWindow(platform: NodeJS.Platform): Promise<ActiveWindow | undefined>;
