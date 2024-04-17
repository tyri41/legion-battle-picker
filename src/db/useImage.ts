import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

export const useImage = (path: string) => {
    const [url, setUrl] = useState<string>();
    useEffect(() => {
        const imageRef = ref(getStorage(), path);
        getDownloadURL(imageRef).then(setUrl);
    }, [path]);

    return url;
};
