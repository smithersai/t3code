type Token = {
    value: string;
    start: number;
    end: number;
    quoted: boolean;
};
export type KdlNode = {
    name: string;
    header: Token[];
    children: KdlNode[];
    start: number;
    end: number;
    close: number | undefined;
};
/** @throws {never} */
export declare function readKdlNodes(source: string): KdlNode[];
export {};
