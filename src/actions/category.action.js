import { redirect } from "react-router";
import { categorySchema, updateCategorySchema } from "../schemas/category.schema";
import { success, z } from "zod";
import { create, edit, deleteCat } from "../services/category.service";

export async function createCategoryAction({request}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const result = categorySchema.safeParse(data);

    if(!result.success){
        const fieldErrors = z.flattenError(result.error).fieldErrors;
        return {errors: fieldErrors};
    }

    try{
        await create(result.data);
        return redirect('/categories?success=Categoria+creado+exitosamente.')
    }catch(error){
        return { error: error.message || "Ocurrió un error inesperado al conectar con el servidor." };
    }
}

export async function editCategoryAction({request}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const result = updateCategorySchema.safeParse(data);

    if(!result.success){
        const fieldErrors = z.flattenError(result.error).fieldErrors;
        return {errors: fieldErrors};
    }

    try{
        await edit(result.data, data.id);
        return redirect('/categories?success=Categoria+editada+exitosamente.')
    }catch(error){
        return { error: error.message || "Ocurrió un error inesperado al conectar con el servidor." };
    }
}

export async function deleteCatAction({request}){
    const formData = await request.formData();
    const id = formData.get("id");
    try {
        await deleteCat(id);
        return { success: true, message: "Categoría eliminada correctamente.",};
    } catch (error) {
        return { success: false, message: "No se pudo eliminar la categoría.",};
    }
}