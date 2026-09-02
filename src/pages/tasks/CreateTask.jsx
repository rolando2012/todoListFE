import Titles from "../../components/common/Titles";
import TaskForm from "../../components/forms/TaskForm";
import { BsFloppy2Fill } from "react-icons/bs";
import { Await, useLoaderData, useActionData } from "react-router";
import { Suspense } from "react";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import Loading from "../../components/common/Loading";
import { useMemo } from "react";

export default function CreateTask() {
    const { categoriesPromise, tagsPromise } = useLoaderData();
    const actionData = useActionData();
    const dataPromise = useMemo(
        () => Promise.all([categoriesPromise, tagsPromise]),
        [categoriesPromise, tagsPromise]
    );
    return (
        <section className="max-w-2xl mx-auto px-4 py-10">
            <Titles level="h2">
                Crear Tarea
            </Titles>

            <Suspense fallback={<Loading />}>
                <Await
                    resolve={dataPromise}
                    errorElement={
                        <ErrorMessage message="Error al cargar formulario" />
                    }
                >
                    {([categories, tags]) => (
                        <div className="bg-white rounded-2xl shadow-md p-8 mt-6">
                            <TaskForm
                                actionData={actionData}
                                submitText="Crear tarea"
                                placeholder="Ej. Preparar informe trimestral..."
                                onCancelRoute="/tasks"
                                icon={BsFloppy2Fill}
                                method="post"
                                categories={categories.data}
                                tags={tags.data}
                            />
                        </div>
                    )}
                </Await>
            </Suspense>
        </section>
    );
}