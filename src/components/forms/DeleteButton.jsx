import { useFetcher } from "react-router";
import { FaSpinner } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";

const DeleteButton = ({ id, name }) => {

    const fetcher = useFetcher();
    const isDeleting = fetcher.state !== "idle";

    const handleSubmit = (event) => {

        const confirmed = window.confirm(
            `¿Estás seguro de eliminar esta ${name}?`
        );

        if (!confirmed) {
            event.preventDefault();
        }
    };

    return (
        <fetcher.Form
            method="delete"
            onSubmit={handleSubmit}
            className="inline"
        >
            <input
                type="hidden"
                name="id"
                value={id}
            />

            <button
                type="submit"
                disabled={isDeleting}
                title={`Eliminar ${name}`}
                className="
                    inline-flex
                    items-center
                    justify-center
                    p-2
                    rounded-lg
                    border
                    border-red-200
                    text-red-500
                    hover:bg-red-50
                    hover:text-red-600
                    transition
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                    cursor-pointer
                "
            >
                {isDeleting ? (
                    <FaSpinner className="animate-spin" size={18} strokeWidth={2} />
                ) : (
                    <LuTrash2 size={18} strokeWidth={2} />
                )}
            </button>
        </fetcher.Form>
    );
};

export default DeleteButton;