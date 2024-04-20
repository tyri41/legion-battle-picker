import { FC } from "react";
import { PickBar } from "../../components/PickBar";
import { CardData, CardType } from "../../types";
import { useFormContext } from "react-hook-form";
import { BuilderForm } from ".";
import { filter, isNonNullish, map, pipe } from "remeda";
import { useDatabaseCollectionObject } from "../../db/useDatabaseCollectionObject";
import { Accordion } from "flowbite-react";

const items = [
    { key: "B", label: "Breakthrough" },
    { key: "KK", label: "Key Positions" },
];

export const BuilderSection: FC<{ category: CardType }> = ({ category }) => {
    const allCards = useDatabaseCollectionObject<CardData>([category]);

    const { setValue, getValues, watch } = useFormContext<BuilderForm>();
    const removeCard = (key: string) => {
        const oldCards = getValues(category);
        setValue(
            category,
            filter(oldCards, (cardKey) => cardKey !== key)
        );
    };
    const cardKeys = watch(category);
    // const items = pipe(cardKeys,
    //     map((key) => allCards[key]),
    //     filter(isNonNullish),
    //     map(({ id, label }) => ({ key: id, label }))
    // )

    return (
        <>
            <Accordion.Title className=" bg-gray-500 focus:bg-gray-500 hover:bg-gray-400 text-gray-100">
                <p className="capitalize">{category}</p>
            </Accordion.Title>
            <Accordion.Content className=" bg-gray-500 focus:bg-gray-500">
                <PickBar items={items} onClick={removeCard} />
                <div>hi</div>
            </Accordion.Content>
        </>
    );
};
