const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const getRequestHeaders = (customHeaders = {}) => {
    const token = localStorage.getItem("token");
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...customHeaders
    };
}

export async function apiRequest(endpoint, options = {}){
    const url = `${API_URL}${endpoint}`;

    const config = {
        ...options,
        headers: getRequestHeaders(options.headers)
    };

    const response = await fetch(url, config);

    if(!response.ok){
        // throw new Error(`Error ${response.status}: ${response.json()}`);
        const errorBody = await response.json(); 
        throw new Error(`Error: ${errorBody.message || errorBody.errors[0]}`);
    }

    return response.json();
}