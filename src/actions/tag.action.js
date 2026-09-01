import { redirect } from "react-router";
import { tagSchema, updateTagSchema } from "../schemas/tag.schema";
import { z } from "zod";
import { create, deleteTag, edit } from "../services/tag.service";

export async function createTagAction({ request}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const result = tagSchema.safeParse(data);

    if(!result.success){
        const fieldErrors = z.flattenError(result.error).fieldErrors;
        return { errors: fieldErrors };
    }

    try{
        await create(result.data);
        return redirect('/tags?success=Etiqueta+creado+exitosamente.');
    }catch(error){
        return { error: error.message || "Ocurrió un error inesperado al conectar con el servidor." };
    }
}

export async function editTagAction({ request}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const result = updateTagSchema.safeParse(data);

    if(!result.success){
        const fieldErrors = z.flattenError(result.error).fieldErrors;
        return {errors: fieldErrors};
    }

    try {
        await edit(result.data, result.data.id);
        return redirect('/tags?success=Tag+editada+exitosamente.');
    } catch (error) {
        return { error: error.message || "currió un error inesperado al conectar con el servidor."};
    }
}

export async function deleteTagAction({ request }) {
    const formData = await request.formData();
    const id = formData.get("id");

    try {
        await deleteTag(id);
        return { success: true, message: "Etiqueta eliminada correctamente."};
    } catch (error) {
        return { success: false, message: "No se pudo eliminar la etiqueta.",};
    }
}