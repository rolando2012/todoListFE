const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export async function getAll(){
    const url = API_URL+'/tasks';
    try{
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok){
            throw new Error(`Respuesta de estado: ${response.status} `);
        }
        const result = await response.json();
        return result;
    }catch(error){
        console.error('Error en getAll: ', error.message);
    }
}