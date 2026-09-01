import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";
import Loading from "../../components/common/Loading";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import Titles from "../../components/common/Titles";
import CreateForm from "../../components/forms/CreateForm";
import { FaPencilAlt } from "react-icons/fa";

export default function EditTag(){
    const { oneTagPromise } = useLoaderData();

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Await
                    resolve={oneTagPromise}
                    errorElement={
                        <ErrorMessage message="Error al cargar la Etiqueta" />
                    }
                >
                {(resolvedCategory) =>{
                    return ( 
                    <section className="max-w-2xl mx-auto px-4 py-10">

                        <Titles level="h2">
                            Editar Etiqueta
                        </Titles>

                        <div className="bg-white rounded-2xl shadow-md p-8 mt-6">
                            <CreateForm submitText="Editar etiqueta" 
                                        onCancelRoute="/tags"
                                        placeholder="Ej. importante, pendiente..."
                                        obj={resolvedCategory}
                                        icon={FaPencilAlt}
                                        method="put" 
                                        edit={true}/>
                        </div>

                    </section>
                )}}
                </Await>
            </Suspense>
        </>
    );
}