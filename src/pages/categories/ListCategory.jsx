import Titles from "../../components/common/Titles";
import Loading from "../../components/common/Loading";
import { useLoaderData, Await, useSearchParams } from "react-router";
import { Suspense } from "react";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import Table_1 from "../../components/common/Table_1";
import Pagination from "../../components/common/Pagination";
import LinkButton from "../../components/common/LinkButton";
import { FaPlus } from "react-icons/fa";
import { Toast } from "../../components/Toast/Toast";

export default function ListCategory() {
    const { categoriesPromise } = useLoaderData();
    const [searchParams] = useSearchParams();
    const successMessage = searchParams.get("success");
    return (
        <>
        {successMessage &&  <Toast successMessage={successMessage} />}
            <div className="flex justify-between my-4 mx-4 md:mx-20 ">
                <Titles level="h2" children="Categorias" />
                <LinkButton type="primary" icon={FaPlus} route="/categories/create">
                    Nueva Categoría
                </LinkButton>
            </div>
            
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
                                    url='/categories'
                                />
                                <Pagination
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