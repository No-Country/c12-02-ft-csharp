import { useForm, FormProvider } from "react-hook-form";
import LoginFormInput from "./LoginFormInput";
import LoginFormSubmit from "./LoginFormSubmit";

function SignUpForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  });
  const { handleSubmit, reset } = form;

  const onSubmit = e => {
    console.log(e);
    reset();
  };

  return (
    <FormProvider {...form}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 space-y-2">
          <LoginFormInput
            type="text"
            placeholder="Ingrese su nombre"
            label="Nombre"
            id="name"
            icon="user"
            isRequired={true}
            message="El Nombre es requerido"
            pattern=""
            patternMessage=""
          />
          <LoginFormInput
            type="text"
            placeholder="Ingresar correo"
            label="Email"
            id="email"
            icon="email"
            isRequired={true}
            message="El Email es requerido"
            pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
            patternMessage="Introduce un email valido"
          />
          <LoginFormInput
            type="password"
            placeholder="Ingresar contraseña"
            label="Contraseña"
            id="password"
            icon="password"
            isRequired={true}
            message="La contraseña es requerida"
            pattern=""
            patternMessage=""
          />
          <LoginFormInput
            type="password"
            placeholder="Ingresar contraseña"
            label="Repetir contraseña"
            id="passwordConfirm"
            icon="password"
            isRequired={true}
            message="La contraseña es requerida"
            pattern=""
            patternMessage=""
          />
          <div className="flex flex-col mt-4 lg:space-y-2">
            <LoginFormSubmit content={"Iniciar sesión"} />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default SignUpForm;
