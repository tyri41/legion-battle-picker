import { ComponentProps, FC, useContext } from "react";
import { PickerSectionContext } from "./pickerContext";
import { ImageTile } from "../../components/ImageTile";

export type PickerImageProps = {
    src?: string;
    nr: number;
    onClick?: (src?: string) => void;
} & Omit<ComponentProps<"div">, "onClick">;

const borderColors = {
    red: "border-red-500",
    blue: "border-blue-500",
    green: "border-green-500",
} as const;

const useImageStyles = (nr: number) => {
    const { currentPlayer, vetoes, finished } =
        useContext(PickerSectionContext);
    const border = `border-4 ${borderColors[finished ? "green" : currentPlayer]}`;
    const imageBorder = vetoes === nr ? border : "";
    const grayscale =
        (finished && vetoes !== nr) || nr < vetoes ? "grayscale" : "";

    return {
        grayscale,
        imageBorder,
    };
};

export const PickerImage: FC<PickerImageProps> = ({
    nr,
    src,
    onClick = () => {},
    ...props
}) => {
    const { grayscale, imageBorder } = useImageStyles(nr);

    return (
        <ImageTile
            onClick={() => onClick(src)}
            src={src}
            wrapperStyle={grayscale}
            imageStyle={imageBorder}
            {...props}
        />
    );
};
