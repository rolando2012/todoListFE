import { useEffect, useRef } from "react";
import TomSelect from "tom-select";

export default function TagSelect({
    tags = [],
    selectedTags = [],
    disabled = false,
    error,
}) {
    const selectRef = useRef(null);
    const tomSelectRef = useRef(null);

    useEffect(() => {
        if (!selectRef.current) return;

        tomSelectRef.current = new TomSelect(selectRef.current, {
            plugins: ["remove_button"],
            placeholder: "Selecciona una o más etiquetas",
            maxItems: null,
            create: false,
            closeAfterSelect: false,
        });

        return () => {
            tomSelectRef.current?.destroy();
            tomSelectRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (!tomSelectRef.current) return;

        tomSelectRef.current.disable();

        if (!disabled) {
            tomSelectRef.current.enable();
        }
    }, [disabled]);

    return (
        <div>
            <label
                htmlFor="tags"
                className="block text-sm font-semibold text-indigo-700 mb-2"
            >
                Etiquetas
            </label>

            <select
                ref={selectRef}
                id="tags"
                name="tags[]"
                multiple
                defaultValue={selectedTags.map((tag) => tag.id)}
            >
                {tags.map((tag) => (
                    <option
                        key={tag.id}
                        value={tag.id}
                    >
                        {tag.name}
                    </option>
                ))}
            </select>

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