import { getAll, show } from "../services/tarea.service";
import { getAll as getAllTags } from "../services/tag.service";
import { getAll as getAllCats } from "../services/category.service";

export async function taskLoader({ request  }) {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;
    return {
        tasksPromise: getAll(page)
    }
}

export async function taskFormLoader() {
    return {
        categoriesPromise: getAllCats(), 
        tagsPromise: getAllTags()};
}

export async function oneTaskLoader({ params }){
    const id = params.id;
    return{ taskPromise: show(id),
        categoriesPromise: getAllCats(), 
        tagsPromise: getAllTags()
    }
}