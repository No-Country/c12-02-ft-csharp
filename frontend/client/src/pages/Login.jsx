import LoginImage from "../components/LoginImage";
import LoginGoogle from "../components/loginGoogle";
import LoginForm from "../components/LoginForm";
import LoginCustomHr from "../components/LoginCustomHr";
import LoginTitle from "../components/LoginTitle";

function Login() {
  return (
    <>
      <section className="mt-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
          <div className="justify-center mx-auto text-left align-bottom transition-all transhtmlForm bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
            <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
              <div className="w-full px-6 py-3">
                <LoginTitle />
                <LoginForm />
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

export default Login;
