import { Modal } from "flowbite-react";
import { isNonNullish } from "remeda";
import { useImage } from "../../db/useImage";
import { Icons } from "../../components/Icons";

export const PickerDialog = ({
    onReject,
    image,
}: {
    onReject: () => void;
    image: string | undefined;
}) => {
    const src = useImage(image);

    return (
        <>
            <Modal
                dismissible
                show={isNonNullish(src)}
                onClose={onReject}
                className="[&_div]:rounded-3xl [&_div]:outline-none"
            >
                <img src={src} className="rounded-3xl"></img>
                <div
                    className=" absolute right-2 top-2 cursor-pointer"
                    onClick={onReject}
                >
                    <Icons.xCircle className="w-5 sm:w-7 md:w-10" />
                </div>
            </Modal>
        </>
    );
};
