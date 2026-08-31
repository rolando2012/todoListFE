import { createBrowserRouter } from "react-router";
import App from "./App";
import IndexTask from "./pages/tasks/IndexTask";
import ListCategory from "./pages/categories/ListCategory";
import { categoryLoader, catEditLoader } from "./loaders/category.loader";
import CreateCategory from "./pages/categories/CreateCategory";
import { createCategoryAction } from "./actions/category.action";
import EditCategory from "./pages/categories/EditCategory";

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
                    },
                    {
                        path: "create",
                        Component: CreateCategory,
                        action: createCategoryAction
                    },
                    {
                        path: "edit/:id",
                        Component: EditCategory,
                        loader: catEditLoader
                    }
                ]
            }
        ]},
])