import Titles from "../../components/common/Titles"
import Loading from "../../components/common/Loading";
import { useLoaderData, Await } from "react-router";
import { Suspense } from "react"; 

export default function ListCategory(){
    const { categoriesPromise } = useLoaderData();

    return(
        <>
            <Titles level='h2' children='Categorias' />
            <Suspense fallback={<Loading />} >
                <Await resolve={categoriesPromise}>
                    {(resolvedCategories) => (
                        <ul>
                            {resolvedCategories.data.map((cat)=> <li key={cat.id} >{cat.name}</li>)}
                        </ul>
                    )}
                </Await>
            </Suspense>
        </>
    );
}