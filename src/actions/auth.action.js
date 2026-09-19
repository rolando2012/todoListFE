import { LoginSchema } from "../schemas/auth.schema";
import z, { success } from "zod";
import { login, logout } from "../services/auth.service";
import { redirect, replace } from "react-router";

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

export async function logoutAction() {
    try {
        const res = await logout();
        localStorage.removeItem("token");
        return replace("/");
    } catch (error) {
        return { success: false, message: error.message || 
            "No se pudo cerrar sesión." };
    }
}