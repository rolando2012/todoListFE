import { apiRequest } from './apiClient.service';

const URL_CATEGORY = '/categories'

export async function getAll(page=1){
    try{
        return await apiRequest(`${URL_CATEGORY}?page=${page}`,{ method: 'GET' });
    }catch(error){
        throw error;
    }
}

export async function create(formData){
    try{
        return await apiRequest(`${URL_CATEGORY}`, {method: 'POST',
                                    body: JSON.stringify(formData)});
    }catch(error){
        throw error;
    }
}

export async function edit(formData, id) {
    try {
        return await apiRequest(`${URL_CATEGORY}/${id}`, {method: 'PUT',
                                    body: JSON.stringify(formData) 
        });
    } catch (error) {
        throw error;
    }
}

export async function getOne(id) {
    try {
        return await apiRequest(`${URL_CATEGORY}/${id}`, {method: 'GET'});
    } catch (error) {
        throw error;
    }
}