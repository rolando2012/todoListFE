export default function StatusBadge({ state }) {
    const completed = state === 1;

    return (
        <span
            className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${
                completed
                    ? "bg-green-50 text-green-700 border-green-100"
                    : "bg-amber-50 text-amber-700 border-amber-100"
            }`}
        >
            {completed ? "Completado" : "Pendiente"}
        </span>
    );
}