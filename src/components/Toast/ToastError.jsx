import { useState } from "react";

export const ToastError = ({ error }) => {
    const [visible, setVisible] = useState(true);
    if (!visible || !error) return null;

    return (
        <div 
        className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 text-sm flex justify-between items-center"
        role="alert"
        >
        <span>{error}</span>
        <button 
            onClick={() => setVisible(false)} 
            className="ml-4 text-red-600/75 hover:text-red-700 font-bold text-sm transition-colors cursor-pointer"
            aria-label="Cerrar error"
        >
            ✕
        </button>
        </div>
    );
};
