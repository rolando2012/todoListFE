import Titles from "../../components/common/Titles";
import Loading from "../../components/common/Loading";
import { useLoaderData, Await, useSearchParams } from "react-router";
import { Suspense } from "react";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import TableTask from "../../components/shared/TableTask";
import Pagination from "../../components/common/Pagination";
import LinkButton from "../../components/common/LinkButton";
import { FaPlus } from "react-icons/fa";
import { Toast } from "../../components/Toast/Toast";

export default function ListTask() {
    const {tasksPromise } = useLoaderData();
    const [searchParams] = useSearchParams();
    const successMessage = searchParams.get("success");

    return (
        <>
        {successMessage &&  <Toast successMessage={successMessage} />}
            <div className="flex justify-between my-4 mx-4 md:mx-20 ">
                <Titles level="h2" children="Tareas" />
                <LinkButton type="primary" icon={FaPlus} route="/tasks/create">
                    Nueva Tarea
                </LinkButton>
            </div>
            
            <Suspense fallback={<Loading />}>
                <Await
                    resolve={tasksPromise}
                    errorElement={
                        <ErrorMessage message="Error al cargar las tareas" />
                    }
                >
                    {(resolvedTasks) => {
                      console.log(resolvedTasks);
                        if(!resolvedTasks?.data || resolvedTasks.data.length === 0){
                            return <ErrorMessage message="No hay tareas registradas" />                        }
                        return(
                            <div className="my-4 mx-4 md:mx-10 overflow-hidden">
                                <TableTask
                                    types={resolvedTasks.data}
                                    name='Tarea'
                                    from={resolvedTasks.from}
                                    url='/tasks'
                                />
                                <Pagination
                                    currentPage={resolvedTasks.current_page}
                                    lastPage={resolvedTasks.last_page}
                                    from={resolvedTasks.from}
                                    to={resolvedTasks.to}
                                    total={resolvedTasks.total}
                                />
                            </div>
                        )}}
                </Await>
            </Suspense>
        </>
    );
}
