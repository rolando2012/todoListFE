import { apiRequest } from './apiClient.service';


export async function getAll(page=1){
    try{
        return await apiRequest(`/categories?page=${page}`,{ method: 'GET' });
    }catch(error){
        throw error;
    }
}