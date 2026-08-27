import { useState, useEffect } from 'react';
import { getAll } from '../services/category.service';

export const useCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let isMounted = true;
        async function loadCategories() {
            try{
                const data = await getAll();
                if(isMounted) setCategories(data);
            }catch(error){
                if(isMounted) console.error('Fallor en el hook: ', error);
            }
        }
        loadCategories();
        return () => {isMounted=false;}
    }, []);

    return {categories}
}