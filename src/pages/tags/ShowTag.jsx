import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";
import Loading from "../../components/common/Loading";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import Titles from "../../components/common/Titles";
import DetailTable from "../../components/shared/DetailTable";
import LinkButton from "../../components/common/LinkButton";
import { FaPencilAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

export default function ShowTag(){
    const {oneTagPromise} = useLoaderData();

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Await
                    resolve={oneTagPromise}
                    errorElement={
                        <ErrorMessage message="Error al cargar la etiqueta" />
                    }
                >
                {(resolvedTag) =>{
                    const data = [{
                            label: "Nombre",
                            value: resolvedTag.name},{
                            label: "Tareas",
                            value: resolvedTag.tasks_count
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
                                            route={`/tags/edit/${resolvedTag.id}`} 
                                            icon={FaPencilAlt} >
                                        Editar
                                    </LinkButton>
                                    <LinkButton type="secondary" 
                                            route="/tags"
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