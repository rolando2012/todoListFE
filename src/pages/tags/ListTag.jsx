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

export default function ShowTag(){
    const { tagsPromise } = useLoaderData();
    const [searchParams] = useSearchParams();
    const successMessage = searchParams.get("success");
    return (
        <>
        {successMessage &&  <Toast successMessage={successMessage} />}
            <div className="flex justify-between my-4 mx-4 md:mx-20 ">
                <Titles level="h2" children="Etiquetas" />
                <LinkButton type="primary" icon={FaPlus} route="/categories/create">
                    Nueva Etiqueta
                </LinkButton>
            </div>
            
            <Suspense fallback={<Loading />}>
                <Await
                    resolve={tagsPromise}
                    errorElement={
                        <ErrorMessage message="Error al cargar las etiquetas" />
                    }
                >
                    {(resolvedTags) => {
                        if(!resolvedTags?.data || resolvedTags.data.length === 0){
                            return <ErrorMessage message="No hay etiquetas registradas" />                        }
                        return(
                            <div className="my-4 mx-4 md:mx-10 overflow-hidden">
                                <Table_1
                                    types={resolvedTags.data}
                                    name='Etiqueta'
                                    from={resolvedTags.from}
                                />
                                <Pagination
                                    currentPage={resolvedTags.current_page}
                                    lastPage={resolvedTags.last_page}
                                    from={resolvedTags.from}
                                    to={resolvedTags.to}
                                    total={resolvedTags.total}
                                />
                            </div>
                        )}}
                </Await>
            </Suspense>
        </>
    );
}