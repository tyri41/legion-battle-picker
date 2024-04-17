import app from "./app";
import { getFirestore } from "firebase-admin/firestore";
import {
    IMAGE_IDS_CONDITION,
    IMAGE_IDS_DEPLOYMENT,
    IMAGE_IDS_OBJECTIVE,
} from "./const";
import { join, map, pipe } from "remeda";

const shorten = (name: string) =>
    pipe(
        name.split(" "),
        map((s) => s[0] ?? ""),
        join("")
    );
console.log(
    map(IMAGE_IDS_DEPLOYMENT, (name) => {
        const key = shorten(name);
        console.log(key);
        return {
            id: key,
            label: name,
            imageUrl: `${name}.jpeg`,
        };
    })
);

// Promise.all(
// map(IMAGE_IDS_OBJECTIVE, async (name) => {
//     const key = shorten(name);
//     console.log(key);
//     try {
//         await getFirestore(app)
//             .doc(`objective/${key}`)
//             .set({
//                 id: key,
//                 label: name,
//                 imageUrl: `${name}.jpeg`,
//             });
//     } catch (e) {
//         console.log(e);
//     }
// })
// );
// try {
//     // const name = IMAGE_IDS_OBJECTIVE[0];
//     // const key = shorten(name);
//     // console.log(getFirestore(app));
//     // console.log(getFirestore(app).doc("objective/B"));
//     getFirestore(app).doc("objective/B").get().then(console.log);
//     const snap = await getFirestore(app).doc("objective/B").get();
//     console.log("lol", snap.exists);
//     // .doc(`objective/${key}`)
//     // .set({
//     //     id: key,
//     //     label: name,
//     //     imageUrl: `${name}.jpeg`,
//     // });
// } catch (e) {
//     console.log(e);
// }
