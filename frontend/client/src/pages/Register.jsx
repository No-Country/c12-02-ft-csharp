import SignUpForm from "../components/SignUpForm";
import LoginTitle from "../components/LoginTitle";
import LoginCustomHr from "../components/LoginCustomHr";
import LoginGoogle from "../components/loginGoogle";
import LoginImage from "../components/LoginImage";

function Register() {
  return (
    <>
      <section className="mt-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
          <div className="justify-center mx-auto text-left align-bottom transition-all transhtmlForm bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
            <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
              <div className="w-full px-6 py-3">
                <LoginTitle
                  title="Crea una cuenta"
                  question="¿Ya tienes una cuenta?"
                  linkTo="/login"
                  linkText="Iniciar Sesión"
                />
                <SignUpForm />
                <LoginCustomHr />
                <LoginGoogle />
              </div>
              <LoginImage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
