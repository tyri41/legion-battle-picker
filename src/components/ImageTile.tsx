import { ComponentProps, FC } from "react";
// import img from "./Rapid Reinforcements.jpeg";
import { cn } from "../lib/cn";

export type ImageTileProps = {
    grayed?: boolean;
} & ComponentProps<"div">;

export const ImageTile: FC<ImageTileProps> = ({
    grayed = false,
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                "w-[420px] h-[300px] flex p-2",
                grayed ? "grayscale" : "",
                className
            )}
            {...props}
        >
            <img
                // src={img}
                className="rounded-3xl transition duration-200 delay-150 ease-out hover:scale-110"
            ></img>
        </div>
    );
};
