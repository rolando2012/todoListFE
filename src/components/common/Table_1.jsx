import { LuEye, LuPencil } from "react-icons/lu";
import { Link } from "react-router";
import DeleteButton from "../forms/DeleteButton";

export default function Table_1({ types, name, from }) {
    return (
        <div className="overflow-x-auto bg-white rounded-xl shadow-md my-4 mx-4 md:mx-10 border border-gray-100">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-indigo-50 text-gray-600 text-sm tracking-wide">
                        <th className="sticky left-0 z-20 bg-indigo-50 py-4 px-6 text-left font-semibold">
                            N°
                        </th>

                        <th className="py-4 px-6 text-left font-semibold">
                            Nombre
                        </th>

                        <th className="py-4 px-6 text-left font-semibold">
                            Tareas
                        </th>

                        <th className="py-4 px-6 text-center font-semibold">
                            Acciones
                        </th>
                    </tr>
                </thead>

                <tbody className="text-gray-600 text-sm">
                    {types.map((cat, index) => (
                        <tr
                            key={cat.id}
                            className="border-b border-gray-100 hover:bg-indigo-50/40 transition-colors"
                        >
                            <td className="sticky left-0 z-10 bg-white py-4 px-6 text-left font-medium text-gray-500">
                                {from+index}
                            </td>

                            <td className="py-4 px-6 text-left">
                                <span className="font-semibold text-gray-700">
                                    {cat.name}
                                </span>
                            </td>

                            <td className="py-4 px-6 text-left">
                                <span className="font-semibold text-gray-700">
                                    {cat.tasks_count}
                                </span>
                            </td>

                            <td className="py-4 px-6">
                                <div className="flex items-center justify-center gap-2">
                                    <Link
                                        to={`/categories/show/${cat.id}`}
                                        title={`Ver ${name}`}
                                        className="p-2 rounded-lg border border-blue-200 text-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:scale-105"
                                    >
                                        <LuEye size={18} strokeWidth={2} />
                                    </Link>
                                    <Link
                                        to={`/categories/edit/${cat.id}`}
                                        title={`Editar ${name}`}
                                        className="p-2 rounded-lg border border-amber-200 text-amber-500 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 hover:scale-105"
                                    >
                                        <LuPencil size={18} strokeWidth={2} />
                                    </Link>
                                    <DeleteButton id={cat.id} name="categoría" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}