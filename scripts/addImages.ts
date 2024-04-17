import app from "./app";
import { Glob } from "bun";
import { getStorage } from "firebase-admin/storage";

export const runUploadImages = async () => {
    const glob = new Glob("**/*");

    // Scans the current working directory and each of its sub-directories recursively
    for await (const file of glob.scan("./images")) {
        console.log(file);
        const f = Bun.file(`./images/${file}`);
        await getStorage(app)
            .bucket()
            .file(file)
            .save(Buffer.from(await f.arrayBuffer()));
    }
};

runUploadImages();
