import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
    override: {
        classGroups: {
            "font-size": [
                "ghost",
                "mini-header",
                "h1-header",
                "h2-header",
                "h3-header",
                "body",
                "price",
                "step",
                "button-large",
                "button-medium",
                "button-small",
            ],
            "text-color": [
                "text",
                "white",
                "black",
                "primary",
                "background",
                "current",
                "transparent",
            ],
        },
    },
});

export const cn = (...inputs: ClassValue[]) => {
    return customTwMerge(clsx(inputs));
};
