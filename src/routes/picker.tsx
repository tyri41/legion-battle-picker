import { createFileRoute } from "@tanstack/react-router";
import { ImageTile } from "../components/ImageTile";

export const Route = createFileRoute("/picker")({
    component: Picker,
});

function Picker() {
    return (
        <div className="p-3 flex flex-wrap">
            <ImageTile />
            <ImageTile />
            <ImageTile />
            <ImageTile />
            <ImageTile />
            <ImageTile />
        </div>
    );
}
