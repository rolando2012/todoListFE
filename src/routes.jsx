import { createBrowserRouter } from "react-router";
import App from "./App";
import IndexTask from "./pages/tasks/IndexTask";
import ListCategory from "./pages/categories/ListCategory";
import { categoryLoader, catEditLoader } from "./loaders/category.loader";
import CreateCategory from "./pages/categories/CreateCategory";
import { createCategoryAction, editCategoryAction, deleteCatAction } from "./actions/category.action";
import EditCategory from "./pages/categories/EditCategory";
import ShowCategory from "./pages/categories/ShowCategory";
import ListTag from "./pages/tags/ListTag";
import { oneTagLoader, tagLoader } from "./loaders/tag.loader";
import CreateTag from "./pages/tags/CreateTag";
import { createTagAction, deleteTagAction, editTagAction } from "./actions/tag.action";
import ShowTag from "./pages/tags/ShowTag";
import EditTag from "./pages/tags/EditTag";

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
                        loader: categoryLoader,
                        action: deleteCatAction
                    },
                    {
                        path: "create",
                        Component: CreateCategory,
                        action: createCategoryAction
                    },
                    {
                        path: "edit/:id",
                        Component: EditCategory,
                        loader: catEditLoader,
                        action: editCategoryAction
                    },
                    {
                        path: "show/:id",
                        Component: ShowCategory,
                        loader: catEditLoader
                    }
                ]
            },
            {
                path: "tags",
                children:[
                    {
                        index: true,
                        Component: ListTag,
                        loader: tagLoader,
                        action: deleteTagAction
                    },
                    {
                        path: "create",
                        Component: CreateTag,
                        action: createTagAction
                    },
                    {
                        path: "show/:id",
                        Component: ShowTag,
                        loader: oneTagLoader
                    },
                    {
                        path: "edit/:id",
                        Component: EditTag,
                        loader: oneTagLoader,
                        action: editTagAction
                    }
                ]
            }
        ]},
])