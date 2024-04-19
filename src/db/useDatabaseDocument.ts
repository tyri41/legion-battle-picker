import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { drop, isEmpty, isNonNullish } from "remeda";
import { app } from "../main";

export function useDatabaseDocument<T extends object>(
    path: (string | undefined)[]
) {
    const [data, setData] = useState<T>();

    useEffect(() => {
        if (
            !isEmpty(path) &&
            path.every((part) => isNonNullish(part) && !isEmpty(part))
        ) {
            const stringPath = path as string[];
            const db = getFirestore(app);
            const unsubscribe = onSnapshot(
                doc(db, stringPath[0], ...drop(stringPath, 1)),
                (doc) => {
                    if (doc.exists()) {
                        setData(doc.data() as T);
                    }
                }
            );

            return unsubscribe;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...path]);

    return data;
}
