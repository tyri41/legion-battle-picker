export type CardType = "objective" | "deployment" | "condition";

export type CardData = {
    id: string;
    label: string;
    imageUrl: string;
};

export type CardCollection = { [cardId: string]: CardData };

export type FirestoreDB = {
    [type in CardType]: CardCollection;
};
