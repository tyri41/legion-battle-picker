import { PickerContext, VetoType, Player } from "./pickerContext";
import { PickingSection } from "./PickingSection";
import { useState } from "react";
import { dropLast } from "remeda";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const value = {
    vetoes: [],
    collections: {
        objective: ["B", "BR", "HE", "ItT"],
        deployment: ["AP", "BL", "D", "DC"],
        condition: ["CC", "FP", "HE", "LV"],
    },
    currentPlayer: "blue",
};

export const Picker = () => {
    const collections = value.collections;
    const [vetoes, setVetoes] = useState<VetoType[]>([]);
    const [currentPlayer, setCurrentPlayer] = useState<Player>("blue");
    const togglePlayer = () =>
        setCurrentPlayer((player) => (player === "blue" ? "red" : "blue"));
    const addVeto = (veto: VetoType) => {
        setVetoes((vetoes) => [...vetoes, veto]);
        togglePlayer();
    };

    const dropVeto = () => {
        setVetoes((vetoes) => dropLast(vetoes, 1));
        if (vetoes.length > 0) togglePlayer();
    };
    const resetVeto = () => {
        setVetoes([]);
        setCurrentPlayer("blue");
    };

    return (
        <div className="flex flex-col p-2">
            <div className="flex grow justify-center">
                <Button
                    className={cn(
                        "max-w-[400px] w-full",
                        currentPlayer === "blue" ? "bg-blue-500" : "bg-red-500"
                    )}
                    onClick={() => addVeto("pass")}
                    disabled={vetoes.length >= 4}
                    variant="colored"
                >
                    Pass
                </Button>
            </div>
            <PickerContext.Provider
                value={{
                    collections,
                    vetoes,
                    currentPlayer,
                    addVeto,
                }}
            >
                <PickingSection category="objective" />
                <PickingSection category="deployment" />
                <PickingSection category="condition" />
            </PickerContext.Provider>

            <div className="flex flex-row gap-2 justify-center">
                <Button
                    className="w-[100px]"
                    onClick={dropVeto}
                    variant="secondary"
                >
                    Undo
                </Button>
                <Button
                    className="w-[100px]"
                    onClick={resetVeto}
                    variant="secondary"
                >
                    Reset
                </Button>
            </div>
        </div>
    );
};
