import { apiRequest } from "./apiClient.service";

const URL_TASK = "/tasks"

export async function getAll(page=1){
    return await apiRequest(`${URL_TASK}?page=${page}`, { method: 'GET' });
}

export async function create(formData) {
    return await apiRequest(`${URL_TASK}`, { method: 'POST',
                            body: JSON.stringify(formData)
    });
}