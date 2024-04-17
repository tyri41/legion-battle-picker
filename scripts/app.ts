import key from "./key.json";
// import keyProd from "./key-prod.json";
import { credential } from "firebase-admin";
import { ServiceAccount, initializeApp } from "firebase-admin/app";

const app = initializeApp({
    credential: credential.cert(key as ServiceAccount),
    storageBucket: "gs://legion-battle-picker.appspot.com",
});
export default app;
