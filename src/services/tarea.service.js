import { apiRequest } from "./apiClient.service";

const URL_TASK = "/tasks"

export async function getAll(page=1){
    return await apiRequest(`${URL_TASK}?page=${page}`, { method: 'GET' });
}