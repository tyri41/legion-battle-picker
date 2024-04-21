import { createRootRoute, Outlet } from "@tanstack/react-router";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Route = createRootRoute({
    component: () => (
        <>
            <ScrollArea className="h-full w-full fancy-bg">
                <Outlet />
            </ScrollArea>
        </>
    ),
});
