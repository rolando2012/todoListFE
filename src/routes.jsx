import { createBrowserRouter } from "react-router";
import App from "./App";
import IndexCategory from "./pages/categories/IndexCategory";
import IndexTask from "./pages/tasks/IndexTask";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: IndexTask
            }, 
            {
                path: "categories",
                Component: IndexCategory,
            }
        ]},
])