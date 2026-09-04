import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";
import Loading from "../../components/common/Loading";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import Titles from "../../components/common/Titles";
import DetailTable from "../../components/shared/DetailTable";
import LinkButton from "../../components/common/LinkButton";
import { FaPencilAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

export default function ShowTask(){
    const { taskPromise } = useLoaderData();

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Await
                    resolve={taskPromise}
                    errorElement={
                        <ErrorMessage message="Error al cargar la tarea" />
                    }
                >
                {(resolvedTask) =>{
                    const data = [{
                            label: "Titulo",
                            value: resolvedTask.title},
                            {label: "Descripción",
                            value: resolvedTask.description},
                            {label: "Estado",
                            value: resolvedTask.state===0? "Pendiente":"Completado"},
                            {label: "Categoria",
                            value: resolvedTask.category.name},
                            {label: "Etiquetas",
                            value: resolvedTask.tags
                            }];
                    return (
                        <>
                            <section className="mx-auto max-w-2xl px-4 py-8">
                                <div className="text-center mb-4">
                                    <Titles level="h3" children="Detalles de Tarea"/>
                                </div>
                                <DetailTable data={data}/>
                                <div className="flex mt-5 gap-5">
                                    <LinkButton type="primary" 
                                            route={`/tasks/edit/${resolvedTask.id}`} 
                                            icon={FaPencilAlt} >
                                        Editar
                                    </LinkButton>
                                    <LinkButton type="secondary" 
                                            route="/tasks"
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
