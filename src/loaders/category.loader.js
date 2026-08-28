import { getAll } from '../services/category.service';

export async function categoryLoader(){
    return {
        categoriesPromise: getAll()
    }
} 