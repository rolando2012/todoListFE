import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useSearchParams } from "react-router";

export default function Pagination({
    currentPage,
    lastPage,
    from,
    to,
    total
}) {
    const [searchParams, setSearchParams] = useSearchParams();

    const goToPage = (page) => {
        searchParams.set("page", page);
        setSearchParams(searchParams);
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
                Mostrando{" "}
                <span className="font-semibold text-gray-700">
                    {from}
                </span>{" "}
                a{" "}
                <span className="font-semibold text-gray-700">
                    {to}
                </span>{" "}
                de{" "}
                <span className="font-semibold text-gray-700">
                    {total}
                </span>{" "}
                registros
            </p>
            <div className="flex items-center gap-2">

                <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => goToPage(currentPage - 1)}
                    className="p-2 rounded-lg border border-gray-200 text-gray-500
                            hover:bg-indigo-50 hover:text-indigo-600
                            disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                    <LuChevronLeft size={18} />
                </button>

                <span className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold">
                    {currentPage}
                </span>

                <button
                    type="button"
                    disabled={currentPage === lastPage}
                    onClick={() => goToPage(currentPage + 1)}
                    className="p-2 rounded-lg border border-gray-200 text-gray-500
                            hover:bg-indigo-50 hover:text-indigo-600
                            disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                    <LuChevronRight size={18} />
                </button>

            </div>
        </div>
    );
}