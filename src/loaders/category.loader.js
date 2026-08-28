import { getAll } from '../services/category.service';

export async function categoryLoader({request}){
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1;
    return {
        categoriesPromise: getAll(page)
    }
} 