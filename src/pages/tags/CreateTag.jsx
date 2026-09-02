import Titles from "../../components/common/Titles";
import CreateForm from "../../components/forms/CreateForm";
import { BsFloppy2Fill } from "react-icons/bs";

export default function CreateTag(){
    return (
        <section className="max-w-2xl mx-auto px-4 py-10">
            <Titles level="h2">
                Crear Tag
            </Titles>

            <div className="bg-white rounded-2xl shadow-md p-8 mt-6">
                <CreateForm submitText="Crear etiqueta" 
                            placeholder="Ej. importante, pendiente..."
                            onCancelRoute="/tags"
                            icon={BsFloppy2Fill}
                            method="post"/>
            </div>
        </section>
    );
}