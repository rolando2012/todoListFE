import { redirect } from "react-router";
import { create, edit } from "../services/tarea.service";
import { taskSchema, upadateTask } from "../schemas/task.schema";
import z from "zod";

export async function createTaskAction({ request }) {
    const formData = await request.formData();
    const data = extractTaskData(formData);

    const result = taskSchema.safeParse(data);
    if (!result.success) {
        const fieldErrors = z.flattenError(result.error).fieldErrors;
        return { errors: fieldErrors, };
    }

    try{
        await create(result.data);
        return redirect('/tasks?success=Categoria+creado+exitosamente.')
    }catch(error){
        return { error: error.message || "Ocurrió un error inesperado al conectar con el servidor." };
    }
}

export async function editTaskAction({ request }) {
    const formData = await request.formData();
    const data = { ...extractTaskData(formData) ,id: formData.get("id")};
    const result = upadateTask.safeParse(data);

    if(!result.success){
        const fieldErrors = z.flattenError(result.error).fieldErrors;
        return { errors: fieldErrors};
    }

    try {
        await edit(result.data, result.data.id);
        return redirect('/tasks?success=Categoria+editada+exitosamente.');
    } catch (error) {
        return { error: error.message || "Ocurrió un error inesperado al conectar con el servidor." };
    }
}

function extractTaskData(formData) {
    return {
        title: formData.get("title"),
        description: formData.get("description"),
        category_id: formData.get("category_id") || "",
        tags: formData.getAll("tags[]"),
        state: formData.get("state"),
    };
}