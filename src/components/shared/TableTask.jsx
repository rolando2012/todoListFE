import { LuEye, LuPencil } from "react-icons/lu";
import { Link } from "react-router";
import DeleteButton from "../forms/DeleteButton";
import StatusBadge from "../badges/StatusBadge";

export default function TableTask({ types, name, from, url }) {
    return (
        <div className="overflow-x-auto bg-white rounded-xl shadow-sm my-4 mx-4 md:mx-10 border border-gray-200">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-indigo-50 text-gray-500 text-sm tracking-wide border-b border-gray-200">
                        <th className="sticky left-0 z-20 py-4 px-6 text-left font-semibold">
                            N°
                        </th>

                        <th className="py-4 px-6 text-left font-semibold">
                            Estado
                        </th>

                        <th className="py-4 px-6 text-left font-semibold">
                            Título
                        </th>

                        <th className="py-4 px-6 text-left font-semibold">
                            Categoría
                        </th>

                        <th className="py-4 px-6 text-left font-semibold">
                            Etiquetas
                        </th>

                        <th className="py-4 px-6 text-center font-semibold">
                            Acciones
                        </th>
                    </tr>
                </thead>

                <tbody className="text-gray-600 text-sm">
                    {types.map((task, index) => (
                        <tr
                            key={task.id}
                            className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                        >
                            <td className="sticky left-0 z-10 bg-white py-4 px-6 text-left font-medium text-gray-400">
                                {from + index}
                            </td>

                            <td className="py-4 px-6 text-left">
                                <StatusBadge state={task.state} />
                            </td>

                            <td className="py-4 px-6 text-left">
                                <span className="font-semibold text-gray-700">
                                    {task.title}
                                </span>
                            </td>

                            <td className="py-4 px-6 text-left">
                                {task.category ? (
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-medium">
                                        {task.category.name}
                                    </span>
                                ) : (
                                    <span className="text-gray-400 text-xs italic">
                                        Sin categoría
                                    </span>
                                )}
                            </td>

                            <td className="py-4 px-6 text-left">
                                <div className="flex flex-wrap gap-1.5">
                                    {task.tags?.length > 0 ? (
                                        task.tags.map((tag) => (
                                            <span
                                                key={tag.id}
                                                className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 border border-gray-200 text-xs font-medium"
                                            >
                                                {tag.name}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-gray-400 text-xs italic">
                                            Sin etiquetas
                                        </span>
                                    )}
                                </div>
                            </td>

                            <td className="py-4 px-6">
                                <div className="flex items-center justify-center gap-2">
                                    <Link
                                        to={`${url}/show/${task.id}`}
                                        title={`Ver ${name}`}
                                        className="p-2 rounded-lg border border-blue-200 text-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:scale-105"
                                    >
                                        <LuEye size={18} strokeWidth={2} />
                                    </Link>

                                    <Link
                                        to={`${url}/edit/${task.id}`}
                                        title={`Editar ${name}`}
                                        className="p-2 rounded-lg border border-amber-200 text-amber-500 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 hover:scale-105"
                                    >
                                        <LuPencil size={18} strokeWidth={2} />
                                    </Link>

                                    <DeleteButton
                                        id={task.id}
                                        name="tarea"
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}