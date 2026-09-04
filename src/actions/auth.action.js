import { LoginSchema } from "../schemas/auth.schema";
import z from "zod";
import { login } from "../services/auth.service";
import { redirect } from "react-router";

export async function loginAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const result = LoginSchema.safeParse(data);

    if(!result.success){
        const fieldErrors = z.flattenError(result.error).fieldErrors;
        return { errors: fieldErrors };
    }

    try {
        const info = await login(result.data);
        localStorage.setItem("token", info.token);
        return redirect('/tasks');
    } catch (error) {
        return { error: error.message || "Ocurrió un error inesperado al conectar con el servidor." };
    }
} 