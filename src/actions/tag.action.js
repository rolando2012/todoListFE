import { redirect } from "react-router";
import { tagSchema } from "../schemas/tag.schema";
import { z } from "zod";
import { create } from "../services/tag.service";

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