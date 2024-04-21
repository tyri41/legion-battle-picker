import { createFileRoute } from "@tanstack/react-router";
import { Picker } from "../containers/picker";
import { BuilderForm } from "@/containers/builder";

export const Route = createFileRoute("/picker")({
    component: Picker,
    validateSearch: ({
        objective = [],
        deployment = [],
        condition = [],
    }: BuilderForm) => {
        return { objective, deployment, condition } satisfies BuilderForm;
    },
});
