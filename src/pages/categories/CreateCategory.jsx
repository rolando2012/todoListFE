import Titles from "../../components/common/Titles";
import CreateForm from "../../components/forms/CreateForm";

export default function CreateCategory() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-10">

      <Titles level="h2">
        Crear Categoría
      </Titles>

      <div className="bg-white rounded-2xl shadow-md p-8 mt-6">
        <CreateForm submitText="Crear categoría" 
                    placeholder="Ej. Trabajo, Universidad..."
                    onCancelRoute="/categories"/>
      </div>

    </section>
  );
}