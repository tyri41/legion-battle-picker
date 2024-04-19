import { ComponentProps, FC, useContext } from "react";
import { cn } from "../lib/cn";
import { useImage } from "../db/useImage";
import { PickerSectionContext } from "../containers/picker/pickerContext";

export type ImageTileProps = {
    src?: string;
    nr: number;
    onClick?: (src?: string) => void;
} & Omit<ComponentProps<"div">, "onClick">;

const useImageStyles = (nr: number) => {
    const { currentPlayer, vetoes, finished } =
        useContext(PickerSectionContext);
    const border = `border-4 border-${finished ? "green" : currentPlayer}-500`;
    const imageBorder = vetoes === nr ? border : "";
    const grayscale =
        (finished && vetoes !== nr) || nr < vetoes ? "grayscale" : "";

    return {
        grayscale,
        imageBorder,
    };
};

export const ImageTile: FC<ImageTileProps> = ({
    nr,
    src: imageURL,
    className,
    onClick = () => {},
    ...props
}) => {
    const src = useImage(imageURL);
    const { grayscale, imageBorder } = useImageStyles(nr);

    return (
        <div
            className={cn("flex p-2 cursor-pointer", grayscale, className)}
            onClick={() => onClick(src)}
            {...props}
        >
            <img
                src={src}
                className={cn(
                    "rounded-md md:rounded-xl lg:rounded-3xl transition duration-200 delay-150 ease-out hover:scale-110 object-scale-down",
                    imageBorder
                )}
            ></img>
        </div>
    );
};
