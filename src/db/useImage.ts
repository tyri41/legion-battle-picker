import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { isNonNullish } from "remeda";

export const useImage = (path: string | undefined) => {
    const [url, setUrl] = useState<string>();
    useEffect(() => {
        if (isNonNullish(path)) {
            console.log(path);
            const imageRef = ref(getStorage(), path);
            getDownloadURL(imageRef).then(setUrl);
        } else {
            setUrl(undefined);
        }
    }, [path]);

    return url;
};
