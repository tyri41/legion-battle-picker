import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig.json";
import { ThemeProvider } from "@/components/ThemeProvider";

export const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme="dark">
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
