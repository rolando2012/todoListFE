import { redirect } from "react-router";
import { create } from "../services/tarea.service";
import { taskSchema } from "../schemas/task.schema";
import z from "zod";

export async function createTaskAction({ request }) {
    const formData = await request.formData();
    const data = {
        title: formData.get("title"),
        description: formData.get("description"),
        category_id: formData.get("category_id") || "",
        tags: formData.getAll("tags[]"),
        state: formData.get("state"),
    };

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
