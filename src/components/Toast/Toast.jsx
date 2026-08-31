import { useState } from "react";

export const Toast = ({ successMessage }) => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div
        className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex justify-between items-center"
        role="status"
        >
        <span>{successMessage}</span>
        
        <button 
            onClick={() => setVisible(false)} 
            className="ml-4 text-emerald-600/75 hover:text-emerald-700 font-bold text-sm transition-colors cursor-pointer"
            aria-label="Cerrar notificación"
        >
            ✕
        </button>
        </div>
    );
};
