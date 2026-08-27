import Titles from "../../components/common/titles"
import { useCategory } from "../../hooks/useCategory";

export default function ListCategory(){
    const { categories } = useCategory();
    console.log(categories);

    return(
        <>
            <Titles level='h2' children='Lista de Categorias' />
        </>
    );
}