import Titles from "../../components/common/Titles";
import Loading from "../../components/common/Loading";
import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import Table_1 from "../../components/common/Table_1";
import Pagination_1 from "../../components/common/Pagination_1";

export default function ListCategory() {
    const { categoriesPromise } = useLoaderData();
    return (
        <>
            <Titles level="h2" children="Categorias" />
            <Suspense fallback={<Loading />}>
                <Await
                    resolve={categoriesPromise}
                    errorElement={
                        <ErrorMessage message="Error al cargar las categorias" />
                    }
                >
                    {(resolvedCategories) => {
                        if(!resolvedCategories?.data || resolvedCategories.data.length === 0){
                            return <ErrorMessage message="No hay categorias registradas" />                        }
                        return(
                            <div className="my-4 mx-4 md:mx-10 overflow-hidden">
                                <Table_1
                                    types={resolvedCategories.data}
                                    name='Categoria'
                                    from={resolvedCategories.from}
                                />
                                <Pagination_1
                                    currentPage={resolvedCategories.current_page}
                                    lastPage={resolvedCategories.last_page}
                                    from={resolvedCategories.from}
                                    to={resolvedCategories.to}
                                    total={resolvedCategories.total}
                                />
                            </div>
                        )}}
                </Await>
            </Suspense>
        </>
    );
}