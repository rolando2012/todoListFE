import { apiRequest } from "./apiClient.service";

const URL_TAG = "/tags";

export async function getAll(page=1) {
    return await apiRequest(`${URL_TAG}?page=${page}`,{ method: 'GET' });
}

export async function create(formdata) {
    return await apiRequest(`${URL_TAG}`, { method: 'POST' ,
                            body: JSON.stringify(formdata)
    });
}

export async function getOne(id) {
    return await apiRequest(`${URL_TAG}/${id}`, { method: 'GET'});
}