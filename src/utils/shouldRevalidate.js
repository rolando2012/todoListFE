/**
 * Evita revalidar el loader de una ruta cuando el action
 * devolvió errores de validación (ej. Zod), para que el
 * formulario no se re-suspenda y pierda los mensajes de error.
 */
export function skipRevalidationOnErrors({ actionResult, defaultShouldRevalidate }) {
    if (actionResult?.errors) return false;
    return defaultShouldRevalidate;
}