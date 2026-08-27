import { createBrowserRouter } from "react-router";
import App from "./App";
import IndexTask from "./pages/tasks/IndexTask";
import ListCategory from "./pages/categories/ListCategory";

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
                children: [
                    {
                        index: true,
                        Component: ListCategory
                    }
                ]
            }
        ]},
])