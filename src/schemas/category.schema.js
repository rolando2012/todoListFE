import { z } from 'zod';

export const categorySchema = z.object({
    name: z.string().trim()
            .max(100,{message:'El nombre es demasiado largo. No puede superar los 100 caracteres.'})
            .min(1, {message: 'El nombre es obligatorio.'})
});