import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="h-full w-full">
                <div className="p-2 flex gap-2">
                    <Link to="/builder" className="[&.active]:font-bold">
                        Home
                    </Link>{" "}
                    <Link to="/picker" className="[&.active]:font-bold">
                        About
                    </Link>
                </div>
                <Outlet />
            </div>
            <TanStackRouterDevtools />
        </>
    ),
});
