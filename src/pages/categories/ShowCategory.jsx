import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";
import Loading from "../../components/common/Loading";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import Titles from "../../components/common/Titles";
import DetailTable from "../../components/shared/DetailTable";
import LinkButton from "../../components/common/LinkButton";
import { FaPencilAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

export default function ShowCategory(){
    const {editCatPromise} = useLoaderData();
    
    return(
        <>
            <Suspense fallback={<Loading />}>
                <Await
                    resolve={editCatPromise}
                    errorElement={
                        <ErrorMessage message="Error al cargar la categoria" />
                    }
                >
                {(resolvedCategory) =>{
                    const data = [{
                            label: "Nombre",
                            value: resolvedCategory.name},{
                            label: "Tareas",
                            value: resolvedCategory.tasks_count
                            }];
                    return (
                        <>
                            <section className="mx-auto max-w-2xl px-4 py-8">
                                <div className="text-center mb-4">
                                    <Titles level="h3" children="Detalles de Categoria"/>
                                </div>
                                <DetailTable data={data}/>
                                <div className="flex mt-5 gap-5">
                                    <LinkButton type="primary" 
                                            route={`/categories/edit/${resolvedCategory.id}`} 
                                            icon={FaPencilAlt} >
                                        Editar
                                    </LinkButton>
                                    <LinkButton type="secondary" 
                                            route="/categories"
                                            icon={FaArrowLeft} >
                                        Volver
                                    </LinkButton>
                                </div>                             
                            </section>
                        </>
                    )}}
                </Await>
            </Suspense>
        </>
    );
}
