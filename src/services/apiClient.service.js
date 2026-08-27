const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const DEFAULT_HEADERS = {
    'Accept' : 'application/json',
    'Content-Type' : 'application'
};

export async function apiRequest(endpoint, options = {}){
    const url = `${API_URL}${endpoint}`;

    const config = {
        ...options,
        headers: {
            ...DEFAULT_HEADERS,
            ...options.headers,
        }
    };

    const response = await fetch(url, config);

    if(!response.ok){
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
}