import { apiRequest } from "./apiClient.service";

export async function getAll(){
    try{
        return await apiRequest('/tasks', { method: 'GET' });
    }catch(error){
        console.error('Error en getAll: ', error.message);
        throw error;
    }
}