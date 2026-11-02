import { type DeckSnapshot } from "@betteroffice/pptx";
/** A text style a deck draws with. */
export type FontStyle = {
    readonly bold: boolean;
    readonly italic: boolean;
};
/** A family the deck names, with the styles its text asks for. */
export type DeckFamily = {
    readonly name: string;
    readonly styles: readonly FontStyle[];
};
/** The scripts the bundled Latin faces may lack, which have a bundled fallback face. */
export type FallbackScript = "hebrew" | "arabic";
/** What a deck's text needs from the fonts, and which slides it hides. */
export type DeckText = {
    /** Most important first: the face registered first also draws every family the deck names but nobody found. */
    readonly families: readonly DeckFamily[];
    readonly scripts: readonly FallbackScript[];
    /** One flag per slide, in deck order. */
    readonly hidden: readonly boolean[];
};
/**
 * Reads the families, styles and scripts a deck's text uses, from its slides, layouts, masters and theme. When the
 * engine's inspection does not decode, the slides' own runs stand in, without theme fonts or hidden flags.
 */
export declare function deckText(bytes: Uint8Array, snapshot: DeckSnapshot): DeckText;
