import { getAll } from "../services/tarea.service";

export async function taskLoader({ request  }) {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;
    return {
        tasksPromise: getAll(page)
    }
}