import { FC } from "react";
import { PickBar } from "../../components/PickBar";
import { CardData, CardType } from "../../types";
import { useFormContext } from "react-hook-form";
import { BuilderForm } from ".";
import { filter, isIncludedIn, isNonNullish, map, pipe, values } from "remeda";
import { useDatabaseCollectionObject } from "../../db/useDatabaseCollectionObject";
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ImageTile } from "@/components/ImageTile";
import { cn } from "@/lib/utils";

const CARD_LIMIT = 4;

export const BuilderSection: FC<{ category: CardType }> = ({ category }) => {
    const allCardsDict = useDatabaseCollectionObject<CardData>([category]);
    const allCards = values(allCardsDict);

    const { setValue, getValues, watch } = useFormContext<BuilderForm>();
    const removeCard = (key: string) => {
        const oldCards = getValues(category);
        setValue(
            category,
            filter(oldCards, (cardKey) => cardKey !== key)
        );
    };
    const addCard = (key: string) => {
        const oldCards = getValues(category);
        setValue(category, [...oldCards, key]);
    };
    const cardKeys = watch(category);
    const items = pipe(
        cardKeys,
        map((key) => allCardsDict[key]),
        filter(isNonNullish),
        map(({ id, label }) => ({ key: id, label }))
    );
    const unpickedCards = filter(
        allCards,
        ({ id }) => !isIncludedIn(id, cardKeys)
    );
    const pickedCardsCount = cardKeys.length;
    const indicatorColor =
        pickedCardsCount !== CARD_LIMIT ? "text-red-300" : "text-green-300";

    return (
        <>
            <AccordionItem value={category} className="border-gray-400">
                <AccordionTrigger>
                    <div className="flex flex-row gap-4 justify-start items-baseline w-full pr-4">
                        <p className="capitalize justify-start text-left w-[100px]">
                            {category}
                        </p>
                        <div className=" italic flex flex-row gap-2 text-sm hidable">
                            {map(items, ({ label }) => (
                                <p key={label}>{label}</p>
                            ))}
                        </div>
                        <div
                            className={cn(
                                "flex flex-row grow justify-end",
                                indicatorColor
                            )}
                        >{`${pickedCardsCount} / 4`}</div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-6 items-center w-full">
                    <PickBar items={items} onClick={removeCard} />
                    <div className="flex flex-wrap gap-3">
                        {map(unpickedCards, ({ imageUrl, id }) => (
                            <ImageTile
                                key={id}
                                src={`${category}/${imageUrl}`}
                                onClick={() =>
                                    pickedCardsCount < CARD_LIMIT && addCard(id)
                                }
                            />
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </>
    );
};
