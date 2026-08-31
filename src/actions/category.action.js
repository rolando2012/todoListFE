import { redirect } from "react-router";
import { categorySchema } from "../schemas/category.schema";
import { z } from "zod";
import { create } from "../services/category.service";

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