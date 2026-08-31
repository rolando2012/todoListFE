import { Form } from "react-router";
import Button from "../common/Button";
import LinkButton from "../common/LinkButton";
import { BsFloppy2Fill } from "react-icons/bs";

const CreateForm = ({
  submitText,
  onCancelRoute = "/",
  placeholder="Ingrese el nombre"
}) => {

  return (
    <Form className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-indigo-700 mb-2"
        >
          Nombre
        </label>

        <div className="flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-400">

          <input
            id="name"
            name="name"
            autoFocus
            placeholder={placeholder}
            className="w-full outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-3">
        <Button
          type="primary"
          htmlType="submit"
          icon={BsFloppy2Fill}
        >
          {submitText}
        </Button>
        <LinkButton
          type="secondary"
          route={onCancelRoute}
        >
          Cancelar
        </LinkButton>
      </div>
    </Form>
  );
};

export default CreateForm;