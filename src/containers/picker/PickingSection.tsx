import { FC, useContext, useState } from "react";
import { ImageTile } from "../../components/ImageTile";
import { CardData, CardType } from "../../types";
import { PickerContext, PickerSectionContext } from "./pickerContext";
import { filter, map, take } from "remeda";
import { useDatabaseCollectionObject } from "../../db/useDatabaseCollectionObject";
import { Button } from "flowbite-react";
import { Icons } from "../../components/Icons";
import { cn } from "../../lib/cn";
import { PickerDialog } from "./PickerDialog";

const PickingSectionContent: FC<{
    category: CardType;
    addVeto: () => void;
}> = ({ category, addVeto }) => {
    const { cards, currentPlayer, finished, vetoes } =
        useContext(PickerSectionContext);
    const [modalSrc, setModalSrc] = useState<string>();

    return (
        <div className="w-full flex flex-row">
            <Button
                className={cn(
                    "my-4",
                    currentPlayer === "blue" ? "bg-blue-500" : "bg-red-500"
                )}
                disabled={finished || vetoes >= 3}
                onClick={addVeto}
            >
                <div className="flex flex-col justify-center h-full">
                    <Icons.stop className="w-8" />
                    <p className="">Veto</p>
                </div>
            </Button>
            <div className="grid grid-cols-4 gap-2 p-2">
                {take(cards, 4).map((card, i) => (
                    <ImageTile
                        key={card?.imageUrl ?? i}
                        nr={i}
                        src={
                            card?.imageUrl
                                ? `${category}/${card?.imageUrl}`
                                : undefined
                        }
                        onClick={setModalSrc}
                    />
                ))}
            </div>
            <PickerDialog
                image={modalSrc}
                onReject={() => setModalSrc(undefined)}
            />
        </div>
    );
};

export const PickingSection: FC<{ category: CardType }> = ({ category }) => {
    const {
        currentPlayer,
        vetoes: vetoesList,
        collections,
        addVeto,
    } = useContext(PickerContext);

    const vetoes = filter(vetoesList, (veto) => veto === category).length;

    const allCards = useDatabaseCollectionObject<CardData>([category]);
    const cards = map(collections[category], (id) => allCards[id]);

    return (
        <PickerSectionContext.Provider
            value={{
                vetoes,
                currentPlayer,
                cards,
                finished: vetoesList.length >= 4,
            }}
        >
            <PickingSectionContent
                category={category}
                addVeto={() => addVeto(category)}
            />
        </PickerSectionContext.Provider>
    );
};
