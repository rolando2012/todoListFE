import { Form, useActionData, useNavigation } from "react-router";
import Button from "../common/Button";
import LinkButton from "../common/LinkButton";
import { BsFloppy2Fill } from "react-icons/bs";
import { ToastError } from "../Toast/ToastError";

const CreateForm = ({
  submitText,
  onCancelRoute = "/",
  placeholder="Ingrese el nombre"
}) => {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      {actionData?.error &&  <ToastError error={actionData.error} /> }
      <Form method="post" className="space-y-6" noValidate>
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
            disabled={isSubmitting}
            className="w-full outline-none"
          />
        </div>
        {actionData?.errors?.name && (<p className="text-red-400 text-md mt-1.5" role="alert">
              {actionData.errors.name[0]}
            </p>)}
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          type="primary"
          htmlType="submit"
          icon={BsFloppy2Fill}
          disabled={isSubmitting}
        >
          {isSubmitting? "Guardando..." : submitText}
        </Button>
        <LinkButton
          type="secondary"
          route={onCancelRoute}
        >
          Cancelar
        </LinkButton>
      </div>
    </Form>
    </>
  );
};

export default CreateForm;