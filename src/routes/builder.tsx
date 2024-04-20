import { createFileRoute } from "@tanstack/react-router";
import { Builder } from "../containers/builder";

export const Route = createFileRoute("/builder")({
    component: Builder,
});
