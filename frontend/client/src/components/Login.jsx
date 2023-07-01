import { RiMailLine, RiEyeOffLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = e => {
    console.log(e);
  };
  return (
    <>
      <section>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
          <div className="justify-center mx-auto text-left align-bottom transition-all transhtmlForm bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
            <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
              <div className="w-full px-6 py-3">
                <div>
                  <div className="mt-3 text-left sm:mt-2">
                    <h2 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-xl mb-2">
                      Tienda Online
                    </h2>
                    <div className="inline-flex items-center w-full">
                      <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-3xl">
                        Iniciar sesión
                      </h3>
                    </div>
                    <div className="flex items-center my-4">
                      <h3 className="text-gray-600 text-sm mr-2">¿No tienes una cuenta? </h3>
                      <a
                        href="#"
                        type="button"
                        className=" md:text-sm font-medium text-gray-600 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm underline">
                        {" "}
                        Registrate{" "}
                      </a>
                    </div>
                  </div>
                </div>

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-6 space-y-2">
                    <div className="flex flex-col">
                      <div className="relative flex items-center mb-2">
                        <label
                          htmlFor="email"
                          className="absolute -top-3 left-2 px-1 bg-white text-gray-600 text-sm mx-2">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="block w-full px-5 py-3 text-base text-neutral-600 transition duration-500 ease-in-out rounded-lg bg-gray-50  border border-gray-300  focus:outline-none focus:border-blue-500"
                          placeholder="Ingresar correo"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "El Email es requerido"
                            },
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "El formato no es correcto"
                            }
                          })}
                        />
                        <span className="absolute right-2 text-gray-400 text-lg">
                          <RiMailLine />
                        </span>
                      </div>

                      {errors.email && (
                        <div className="mb-4">
                          <span className="text-red-400">{errors.email.message}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <div className="relative flex items-center mb-2">
                        <label
                          htmlFor="password"
                          className="absolute -top-3 left-2 px-1 bg-white text-gray-600 text-sm mx-2">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="block w-full px-5 py-3 text-base text-neutral-600 transition duration-500 ease-in-out rounded-lg bg-gray-50  border border-gray-300  focus:outline-none focus:border-blue-500"
                          placeholder="Ingresar contraseña"
                          {...register("pass", {
                            required: {
                              value: true,
                              message: "La contraseña es requerida"
                            },
                            minLength: {
                              value: 8,
                              message: "La contraseña debe tener al menos 8 caracteres"
                            }
                          })}
                        />
                        <span className="absolute right-2 text-gray-400 text-lg">
                          <RiEyeOffLine />
                        </span>
                      </div>
                      {errors.pass && (
                        <div>
                          <span className="text-red-400">{errors.pass.message}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col mt-4 lg:space-y-2">
                      <a
                        href="#"
                        type="button"
                        className="inline-flex justify-end py-4 md:text-xs font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm">
                        {" "}
                        ¿Has olvidado la contraseña?{" "}
                      </a>
                      <button
                        type="submit"
                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transhtmlForm bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Iniciar sesión
                      </button>
                    </div>
                  </div>
                </form>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-neutral-600 bg-white"> O continua con </span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="w-6 h-6"
                        viewBox="0 0 48 48">
                        <defs>
                          <path
                            id="a"
                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
                        </defs>
                        <clipPath id="b">
                          <use xlinkHref="#a" overflow="visible"></use>
                        </clipPath>
                        <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
                        <path
                          clipPath="url(#b)"
                          fill="#EA4335"
                          d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
                        <path
                          clipPath="url(#b)"
                          fill="#34A853"
                          d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
                        <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path>
                      </svg>
                      <span className="ml-4 text-sm"> Iniciar sesión con Google</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="order-first hidden w-full h-full lg:block">
                <img
                  className="object-cover h-full bg-cover rounded-l-lg"
                  src="https://www.shutterstock.com/image-vector/red-shopping-baskets-parcel-box-600w-2029874339.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
