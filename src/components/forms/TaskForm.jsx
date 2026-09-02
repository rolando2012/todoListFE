import { Form, useActionData, useNavigation } from "react-router";
import Button from "../common/Button";
import LinkButton from "../common/LinkButton";
import { ToastError } from "../Toast/ToastError";
import TagSelect from "./extra/TagSelect";
import StateSwitch from "./extra/StateSwitch";
import { HiChevronDown } from "react-icons/hi";

const TaskForm = ({
    submitText,
    onCancelRoute = "/",
    placeholder = "Ingrese el nombre",
    obj = null,
    icon = "",
    method = "post",
    edit = false,
    categories = [],
    tags = [],
}) => {
    const actionData = useActionData();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === "submitting";

    return (
        <>
            {actionData?.error && <ToastError error={actionData.error} />}
            <Form
                method={method}
                className="space-y-6"
                noValidate
            >
                {edit && (
                    <input
                        type="hidden"
                        name="id"
                        defaultValue={obj?.id}
                    />
                )}

                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-semibold text-indigo-700 mb-2"
                    >
                        Título
                    </label>

                    <div className="flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-400">
                        <input
                            id="title"
                            name="title"
                            defaultValue={obj?.title || ""}
                            autoFocus
                            placeholder={placeholder}
                            disabled={isSubmitting}
                            className="w-full outline-none"
                        />
                    </div>

                    {actionData?.errors?.title && (
                        <p
                            className="text-red-400 text-md mt-1.5"
                            role="alert"
                        >
                            {actionData.errors.title[0]}
                        </p>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="description"
                        className="block text-sm font-semibold text-indigo-700 mb-2"
                    >
                        Descripción
                    </label>

                    <div className="flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-400">
                        <textarea
                            id="description"
                            name="description"
                            defaultValue={obj?.description || ""}
                            placeholder="Ingrese una descripción"
                            disabled={isSubmitting}
                            className="w-full outline-none resize-none"
                            rows={3}
                        />
                    </div>

                    {actionData?.errors?.description && (
                        <p
                            className="text-red-400 text-md mt-1.5"
                            role="alert"
                        >
                            {actionData.errors.description[0]}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="category"
                        className="block text-sm font-semibold text-indigo-700 mb-2"
                    >
                        Categoría
                    </label>

                    <div className="relative">
                        <select
                            id="category"
                            name="category_id"
                            defaultValue={obj?.category_id || ""}
                            disabled={isSubmitting}
                            className="w-full appearance-none bg-white border rounded-xl px-4 py-3 pr-10 
                                    text-gray-700 outline-none transition-all duration-200 focus:border-indigo-600 
                                    focus:ring-2 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-400 
                                    cursor-pointer" 
                        >
                            <option value="" disabled> -- Elige una categoría --</option>
                            {categories.map((category) => (
                                <option
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.name}
                                </option>
                            ))}
                        </select>

                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                            <HiChevronDown className="w-4 h-4" />
                        </div>
                    </div>

                    {actionData?.errors?.category_id && (
                        <p
                            className="text-red-400 text-md mt-1.5"
                            role="alert"
                        >
                            {actionData.errors.category_id[0]}
                        </p>
                    )}
                </div>

                <TagSelect
                    tags={tags}
                    selectedTags={obj?.tags || []}
                    disabled={isSubmitting}
                    error={actionData?.errors?.tags}
                />

                <StateSwitch
                    defaultValue={obj?.state ?? 0}
                    disabled={isSubmitting}
                    error={actionData?.errors?.state}
                />

                <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                        type="primary"
                        htmlType="submit"
                        icon={icon}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Guardando..." : submitText}
                    </Button>

                    <LinkButton
                        type="secondary"
                        route={onCancelRoute}
                    >
                        Cancelar
                    </LinkButton>
                </div>
            </Form>
        </>
    );
};

export default TaskForm;