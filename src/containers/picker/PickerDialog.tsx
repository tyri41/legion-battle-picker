import { isNonNullish } from "remeda";
import { useImage } from "../../db/useImage";
import { Dialog, DialogBareContent } from "@/components/ui/dialog";

export const PickerDialog = ({
    onReject,
    image,
}: {
    onReject: () => void;
    image: string | undefined;
}) => {
    const src = useImage(image);
    const onOpenChange = (open: boolean) => {
        if (!open) {
            onReject();
        }
    };

    return (
        <>
            <Dialog open={isNonNullish(src)} onOpenChange={onOpenChange}>
                <DialogBareContent>
                    <img src={src} className="rounded-3xl"></img>
                </DialogBareContent>
            </Dialog>
        </>
    );
};
