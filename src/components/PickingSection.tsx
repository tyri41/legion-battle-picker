import { ImageTile } from "./ImageTile";

export const PickingSection = () => {
    return (
        <div className="grid grid-cols-4 w-full gap-2 p-2">
            <ImageTile grayed />
            <ImageTile />
            <ImageTile />
            <ImageTile />
        </div>
    );
};
