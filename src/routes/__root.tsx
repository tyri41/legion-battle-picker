import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Route = createRootRoute({
    component: () => (
        <>
            <ScrollArea className="h-full w-full fancy-bg">
                <div>
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
            </ScrollArea>
            {/* <TanStackRouterDevtools /> */}
        </>
    ),
});
