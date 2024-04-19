import { createContext } from "react";
import { CardData, CardType } from "../../types";

export type Player = "red" | "blue";
export type VetoType = CardType | "pass";

export type PickerSectionData = {
    vetoes: number;
    cards: CardData[];
    currentPlayer: Player;
    finished: boolean;
};

export const PickerSectionContext = createContext<PickerSectionData>({
    vetoes: 0,
    cards: [],
    currentPlayer: "blue",
    finished: false,
});

export type PickerContextData = {
    collections: { [collection in CardType]: string[] };
    vetoes: VetoType[];
    currentPlayer: Player;
    addVeto: (veto: VetoType) => void;
};

export const PickerContext = createContext<PickerContextData>({
    vetoes: [],
    collections: {
        objective: ["B", "BR", "HE", "ItT"],
        deployment: [],
        condition: [],
    },
    currentPlayer: "blue",
    addVeto: () => {},
});
