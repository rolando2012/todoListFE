import { createBrowserRouter } from "react-router";
import App from "./App";
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
import ListTask from "./pages/tasks/ListTask";
import { oneTaskLoader, taskLoader, taskFormLoader, showTaskLoader } from "./loaders/task.loader";
import CreateTask from "./pages/tasks/CreateTask";
import { createTaskAction, deleteTaskAction, editTaskAction } from "./actions/task.action";
import EditTask from "./pages/tasks/EditTask";
import { skipRevalidationOnErrors } from "./utils/shouldRevalidate";
import ShowTask from "./pages/tasks/ShowTask";
import Login from "./pages/auth/Login";
import { loginAction } from "./actions/auth.action";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Login,
                action: loginAction
            },
            {
                path: "tasks",
                children:[
                    {
                        index: true,
                        Component: ListTask,
                        loader: taskLoader,
                        action: deleteTaskAction
                    },
                    {
                        path: "create",
                        Component: CreateTask,
                        loader: taskFormLoader,
                        action: createTaskAction,
                        shouldRevalidate: skipRevalidationOnErrors
                    },
                    {
                        path: "edit/:id",
                        Component: EditTask,
                        loader: oneTaskLoader,
                        action: editTaskAction,
                        shouldRevalidate: skipRevalidationOnErrors
                    },
                    {
                        path: "show/:id",
                        Component: ShowTask,
                        loader: showTaskLoader
                    }
                ]
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