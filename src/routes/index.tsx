import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: () => (
        <Navigate
            to="/builder"
            search={{ objective: [], deployment: [], condition: [] }}
        />
    ),
});
