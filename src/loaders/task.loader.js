import { getAll } from "../services/tarea.service";
import { getAll as getAllTags } from "../services/tag.service";
import { getAll as getAllCats } from "../services/category.service";

export async function taskLoader({ request  }) {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;
    return {
        tasksPromise: getAll(page)
    }
}

export async function tastFormLoader() {
    const [categories, tags] = await Promise.all([
        getAllTags(), getAllCats()
    ])

    return {
        categoriesPromise: categories, 
        tagsPromise: tags};
}