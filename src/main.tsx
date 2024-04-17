import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAXNt4MjWxbjvUbTgoPRWREeI6Hmuu91Ig",
    authDomain: "legion-battle-picker.firebaseapp.com",
    projectId: "legion-battle-picker",
    storageBucket: "legion-battle-picker.appspot.com",
    messagingSenderId: "551159774782",
    appId: "1:551159774782:web:b41f51b77dc23a8df3db6f",
};

export const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
