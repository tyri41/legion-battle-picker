import { createFileRoute } from "@tanstack/react-router";
import { Builder, BuilderForm } from "../containers/builder";

export const Route = createFileRoute("/builder")({
    component: Builder,
    validateSearch: ({
        objective = [],
        deployment = [],
        condition = [],
    }: BuilderForm) => {
        return { objective, deployment, condition } satisfies BuilderForm;
    },
});
