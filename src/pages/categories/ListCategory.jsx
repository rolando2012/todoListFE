import Titles from "../../components/common/Titles"
import Loading from "../../components/common/Loading";
import { useLoaderData, Await } from "react-router";
import { Suspense } from "react"; 
import { ErrorMessage } from "../../components/common/ErrorMessage"
import Table_1 from "../../components/common/Table_1";

export default function ListCategory(){
    const { categoriesPromise } = useLoaderData();

    return(
        <>
            <Titles level='h2' children='Categorias' />
            <Suspense fallback={<Loading />} >
                <Await resolve={categoriesPromise}
                        errorElement={<ErrorMessage location='Categorias' />}>       
                    {(resolvedCategories) => (
                        <Table_1
                            types={resolvedCategories.data}
                            name="categoría"
                        />
                    )}
                </Await>
            </Suspense>
        </>
    );
}