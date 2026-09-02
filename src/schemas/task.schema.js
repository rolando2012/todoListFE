import { z } from "zod";

export const taskSchema = z.object({
    title: z.string().trim()
            .min(1, { message: "El título es obligatorio."})
            .max(50, { message: "El título no puede superar los 50 caracteres."}),
    description: z.string().trim()
            .min(1, {message: "La descripción es obligatorio."})
            .max(1000, "La descripción no puede superar los 1000 caracteres"),
    category_id: z.string().min(1, "Debes seleccionar una categoría")
        .transform(Number).pipe(z.number().int().positive("La categoría seleccionada no es válida")),
    tags: z.array(z.string()).min(1, "Debes seleccionar al menos una etiqueta")
            .transform((tags) => tags.map(Number))
            .pipe(z.array(z.number().int().positive("Una etiqueta seleccionada no es válida"))),
    state: z.string().transform(Number).pipe(
            z.number().int().refine((value) => value === 0 || value === 1,
                "El estado no es válido")),
});