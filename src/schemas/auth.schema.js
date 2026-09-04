import z from "zod";

export const LoginSchema = z.object({
    email: z.email({ message: "Debes ingresar un correo electrónico válido."}).
            min(1, { message: "El correo electrónico es obligatorio."}),
    password: z.string().min(1, { message: "La contraseña es obligatoria."})
});