import { getAll } from "../services/tag.service";

export async function tagLoader({ request }) {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1;
    return {
        tagsPromise: getAll(page)
    }
}