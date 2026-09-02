import Titles from "../../components/common/Titles";
import TaskForm from "../../components/forms/TaskForm";
import { FaPencilAlt } from "react-icons/fa";
import { Await, useLoaderData, useActionData } from "react-router";
import { Suspense } from "react";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import Loading from "../../components/common/Loading";
import { useMemo } from "react";


export default function EditTask(){
    const { taskPromise, categoriesPromise, tagsPromise } = useLoaderData();
    const actionData = useActionData();
    const dataPromise = useMemo(
        () => Promise.all([taskPromise, categoriesPromise, tagsPromise]),
        [ taskPromise,categoriesPromise, tagsPromise]
    );
    return (
        <section className="max-w-2xl mx-auto px-4 py-10">
            <Titles level="h2">
                Editar Tarea
            </Titles>

            <Suspense fallback={<Loading />}>
                <Await
                    resolve={dataPromise}
                    errorElement={
                        <ErrorMessage message="Error al cargar formulario" />
                    }
                >
                    {([task, categories, tags]) => (
                        <div className="bg-white rounded-2xl shadow-md p-8 mt-6">
                            <TaskForm
                                actionData={actionData}
                                submitText="Editar tarea"
                                placeholder="Ej. Preparar informe trimestral..."
                                onCancelRoute="/tasks"
                                icon={FaPencilAlt}
                                method="post"
                                categories={categories.data}
                                tags={tags.data}
                                obj={task}
                            />
                        </div>
                    )}
                </Await>
            </Suspense>
        </section>
    );
}