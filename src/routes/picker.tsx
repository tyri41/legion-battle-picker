import { createFileRoute } from "@tanstack/react-router";
import { PickingSection } from "../containers/picker/PickingSection";
import { PickerDialog } from "../containers/picker/PickerDialog";

export const Route = createFileRoute("/picker")({
    component: Picker,
});

function Picker() {
    // const [data, setData] = useState();
    // useEffect(() => {
    //     const unsubscribe = onSnapshot(
    //         doc(getFirestore(), "objective", "B"),
    //         {
    //             // source: "cache",
    //         },
    //         (documentSnapshot) => {
    //             if (documentSnapshot.exists()) {
    //                 setData(documentSnapshot.data());
    //             } else {
    //                 console.log("no doc");
    //             }
    //         }
    //     );
    //     return unsubscribe;
    // }, []);
    // console.log(data);
    return (
        <div className="p-3 flex flex-wrap">
            <PickingSection />
            <PickerDialog />
        </div>
    );
}
