import { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";
import { useImage } from "../db/useImage";
import defaultPlaceholder from "../assets/condition_back.jpg";

export type ImageTileProps = {
    src?: string;
    imageStyle?: string;
    wrapperStyle?: string;
    placeholder?: string;
} & ComponentProps<"div">;

export const ImageTile: FC<ImageTileProps> = ({
    src: imageURL,
    imageStyle = "",
    wrapperStyle = "",
    placeholder = defaultPlaceholder,
    onClick = () => {},
    ...props
}) => {
    const src = useImage(imageURL) ?? placeholder;

    return (
        <div
            className={cn("flex p-2 cursor-pointer", wrapperStyle)}
            onClick={onClick}
            {...props}
        >
            <img
                src={src}
                className={cn(
                    "rounded-md md:rounded-xl lg:rounded-3xl transition duration-200 delay-150 ease-out hover:scale-110 object-scale-down",
                    imageStyle
                )}
            ></img>
        </div>
    );
};
