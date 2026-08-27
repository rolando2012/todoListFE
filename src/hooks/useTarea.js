import { useState, useEffect } from "react";
import { getAll } from '../services/tarea.service.js'

export const useTareas = () =>{
    const [tareas, setTareas] = useState([]);

    useEffect(()=>{
        let isMounted = true;
        async function loadTareas() {
            try{
                const data = await getAll();
                if(isMounted) setTareas(data);
            }catch(error){
                if(isMounted) console.error("Fallo en el hook:", error);
            }
        }

        loadTareas();
        return () =>{isMounted=false;};
    },[]);

    return {tareas};
}