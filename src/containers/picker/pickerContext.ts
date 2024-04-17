import { CardType } from "../../types";

export type PickerSectionData = {
    vetoes: number;
};

export type PickerContext = {
    collections: { [collection in CardType]: PickerSectionData };
};
