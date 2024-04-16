import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/builder")({
    component: Builder,
});

function Builder() {
    return <div className="p-2">Hello from Builder!</div>;
}
