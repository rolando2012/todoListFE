import { apiRequest } from './apiClient.service';

const URL_TAG = '/categories'

export async function getAll(page=1){
    try{
        return await apiRequest(`${URL_TAG}?page=${page}`,{ method: 'GET' });
    }catch(error){
        throw error;
    }
}

export async function create(formData){
    try{
        return await apiRequest(`${URL_TAG}`, {method: 'POST',
                                    body: JSON.stringify(formData)});
    }catch(error){
        throw error;
    }
}