import Titles from "../../components/common/Titles"
import { useCategory } from "../../hooks/useCategory";
import Loading from "../../components/common/Loading";

export default function ListCategory(){
    const { categories } = useCategory();
    console.log(categories);

    return(
        <>
            <Titles level='h2' children='Lista de Categorias' />
            <Loading />
        </>
    );
}