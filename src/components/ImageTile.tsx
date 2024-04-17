import { ComponentProps, FC } from "react";
import { cn } from "../lib/cn";
import { useImage } from "../db/useImage";

export type ImageTileProps = {
    grayed?: boolean;
    onClick?: (src?: string) => void;
} & ComponentProps<"div">;

export const ImageTile: FC<ImageTileProps> = ({
    grayed = false,
    className,
    onClick = () => {},
    ...props
}) => {
    const src = useImage("objective/Breakthrough.jpeg");
    return (
        <div
            className={cn(
                "flex p-2 cursor-pointer",
                grayed ? "grayscale" : "",
                className
            )}
            onClick={() => onClick(src)}
            {...props}
        >
            <img
                src={src}
                className="rounded-3xl transition duration-200 delay-150 ease-out hover:scale-110"
            ></img>
        </div>
    );
};
