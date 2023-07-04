import { useForm, FormProvider } from "react-hook-form";
import LoginFormInput from "./LoginFormInput";
import LoginFormSubmit from "./LoginFormSubmit";
import LoginFormForgotPassword from "./LoginFormForgotPassword";

function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: ""
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
            placeholder="Ingresar contraseña"
            label="Password"
            id="password"
            icon="password"
            isRequired={true}
            message="La contraseña es requerida"
            pattern=""
            patternMessage=""
          />
          <div className="flex flex-col mt-4 lg:space-y-2">
            <LoginFormForgotPassword />
            <LoginFormSubmit />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
export default LoginForm;
