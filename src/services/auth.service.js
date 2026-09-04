import { apiRequest } from "./apiClient.service";

export async function login(formData) {
    return await apiRequest(`/login`, { method: 'POST',
                            body: JSON.stringify(formData)
    })
}