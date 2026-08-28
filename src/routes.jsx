import { createBrowserRouter } from "react-router";
import App from "./App";
import IndexTask from "./pages/tasks/IndexTask";
import ListCategory from "./pages/categories/ListCategory";
import { categoryLoader } from "./loaders/category.loader";

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
                        Component: ListCategory,
                        loader: categoryLoader
                    }
                ]
            }
        ]},
])