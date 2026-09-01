import { z } from "zod";

export const tagSchema = z.object({
    name: z.string().trim()
            .max(50,{message: "El nombre es demasiado largo. No puede superar los 50 caracteres."})
            .min(1,{message: "El nombre de la etiqueta es obligatorio y no puede quedar vacío."})
});