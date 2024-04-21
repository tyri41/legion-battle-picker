import { createFileRoute } from "@tanstack/react-router";
import { Picker } from "../containers/picker";

export const Route = createFileRoute("/picker")({
    component: Picker,
    validateSearch: (search) => {
        // console.log(search);
        return search;
    },
});
