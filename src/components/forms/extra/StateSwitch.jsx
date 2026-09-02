import { useState } from "react";

export default function StateSwitch({
    defaultValue = 0,
    disabled = false,
    error,
}) {
    const [completed, setCompleted] = useState(defaultValue === 1);

    return (
        <div>
            <label
                htmlFor="state"
                className="block text-sm font-semibold text-indigo-700 mb-2"
            >
                Estado
            </label>

            <div className="flex items-center gap-4">
                <button
                    type="button"
                    role="switch"
                    aria-checked={completed}
                    disabled={disabled}
                    onClick={() => setCompleted(!completed)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ${
                        completed
                            ? "bg-green-500"
                            : "bg-amber-400"
                    } ${
                        disabled
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                    }`}
                >
                    <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${
                            completed
                                ? "translate-x-6"
                                : "translate-x-1"
                        }`}
                    />
                </button>

                <span
                    className={`text-sm font-medium ${
                        completed
                            ? "text-green-700"
                            : "text-amber-700"
                    }`}
                >
                    {completed ? "Completado" : "Pendiente"}
                </span>
            </div>

            <input
                type="hidden"
                name="state"
                value={completed ? 1 : 0}
            />

            {error && (
                <p
                    className="text-red-400 text-md mt-1.5"
                    role="alert"
                >
                    {error[0]}
                </p>
            )}
        </div>
    );
}