import { createBrowserRouter, Route } from "react-router";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<App />
    }
])