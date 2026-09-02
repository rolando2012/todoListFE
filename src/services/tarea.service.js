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

export async function show(id) {
    return await apiRequest(`${URL_TASK}/${id}`, { method: 'GET'});
}

export async function edit(formData, id) {
    return await apiRequest(`${URL_TASK}/${id}`, { method: 'PUT',
                                body: JSON.stringify(formData)
    });
}