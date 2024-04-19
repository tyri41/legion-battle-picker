import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { drop, isEmpty, isNonNullish } from "remeda";
import { app } from "../main";

export function useDatabaseCollectionObject<T extends object>(
    path: (string | undefined)[]
) {
    const [data, setData] = useState<{ [id: string]: T }>({});

    useEffect(() => {
        if (
            !isEmpty(path) &&
            path.every((part) => isNonNullish(part) && !isEmpty(part))
        ) {
            const stringPath = path as string[];
            const db = getFirestore(app);
            const unsubscribe = onSnapshot(
                collection(db, stringPath[0], ...drop(stringPath, 1)),
                (collection) => {
                    const docs: { [id: string]: T } = {};
                    collection.forEach((doc) => {
                        if (doc.exists()) {
                            docs[doc.id] = doc.data() as T;
                        }
                    });
                    setData(docs);
                }
            );

            return unsubscribe;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...path]);

    return data;
}
