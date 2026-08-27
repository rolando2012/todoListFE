import { apiRequest } from './apiClient.service';


export async function getAll(){
    try{
        return await apiRequest('/categories',{ method: 'GET' });
    }catch(error){
        throw error;
    }
}